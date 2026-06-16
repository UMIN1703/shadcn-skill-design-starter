#!/usr/bin/env python3
"""
build-design-md.py — Generate DESIGN.md from variables-export.json.

Renders all 1,807 tokens across 14 sections. Run after a fresh Figma export.

Usage:
    python .claude/skills/shadcn-ui-design/scripts/build-design-md.py \
        --json .claude/skills/shadcn-ui-design/references/variables-export.json \
        --output .claude/skills/shadcn-ui-design/references/DESIGN.md
"""

from __future__ import annotations
import argparse
import json
import sys
from collections import defaultdict
from pathlib import Path

# ---------- helpers ----------

def rgba_to_hex(c):
    """{r,g,b,a in 0..1} → #RRGGBB or #RRGGBBAA"""
    r = round(c["r"] * 255)
    g = round(c["g"] * 255)
    b = round(c["b"] * 255)
    a = c.get("a", 1.0)
    hex_rgb = f"#{r:02X}{g:02X}{b:02X}"
    if a < 1.0:
        a8 = round(a * 255)
        return f"{hex_rgb}{a8:02X}"
    return hex_rgb


def value_for(var, mode_name):
    return var["valuesByMode"].get(mode_name, {})


def fmt_float(v):
    """Format float: integer if no decimal, otherwise drop trailing zeros."""
    if v is None:
        return ""
    if isinstance(v, (int, float)):
        if float(v).is_integer():
            return str(int(v))
        return f"{v:g}"
    return str(v)


def name_sort_key(name):
    """Sort family/scale names: family ascending, scale numeric."""
    # 'blue/500' → ('blue', 500)
    if "/" in name:
        family, rest = name.rsplit("/", 1)
        try:
            return (family, int(rest))
        except ValueError:
            return (family, rest)
    return (name, 0)


def token_scale_key(name):
    """Sort tokens with comma decimals: '0,5' → 0.5."""
    s = name.replace(",", ".")
    try:
        return (0, float(s))
    except ValueError:
        return (1, s)


# ---------- section renderers ----------

CORE_PRINCIPLES = """## 1. Core Principles

| Principle | Description |
|-----------|-------------|
| **Semantic tokens** | Access colors via tokens (`primary`, `muted`, `destructive`) — never raw hex |
| **Composition** | Build UI by composing small sub-components, not monolithic blocks |
| **Open code** | Components are project code — edit them, never override the library |
| **Accessible by default** | Built on Radix UI — keyboard and ARIA correct out of the box |
| **Multi-theme** | Light / Dark / Primary (blue) / Secondary (yellow-brown) toggled via `class` or `data-theme` |
"""


def render_shadcn(vars_by_coll):
    rows = vars_by_coll["shadcn/ui"]
    out = ["## 2. shadcn/ui Semantic Tokens (35)", ""]
    out.append("Defined as CSS custom properties — referenced via Tailwind classes "
               "(`bg-background`, `text-foreground`, etc.). Four palettes selected by "
               "`<html class=\"dark\">` or `<html data-theme=\"primary|secondary\">`.")
    out.append("")
    out.append("| Token | Light | Dark | Primary | Secondary | Alias (Light) |")
    out.append("|---|---|---|---|---|---|")
    for v in sorted(rows, key=lambda x: x["name"]):
        l = value_for(v, "Light mode")
        d = value_for(v, "Dark mode")
        p = value_for(v, "Primary")
        s = value_for(v, "Secondary")
        alias = l.get("alias") or "—"
        out.append(
            f"| `{v['name']}` | `{rgba_to_hex(l['value'])}` "
            f"| `{rgba_to_hex(d['value'])}` "
            f"| `{rgba_to_hex(p['value'])}` "
            f"| `{rgba_to_hex(s['value'])}` "
            f"| {alias} |"
        )
    return "\n".join(out)


def render_color_palette(vars_by_coll, coll_name, heading, intro):
    rows = vars_by_coll[coll_name]
    out = [heading, "", intro, ""]
    # Group by family (substring before '/')
    families = defaultdict(list)
    standalone = []
    for v in rows:
        if "/" in v["name"]:
            family, _ = v["name"].rsplit("/", 1)
            families[family].append(v)
        else:
            standalone.append(v)

    for family in sorted(families):
        items = sorted(families[family], key=lambda x: name_sort_key(x["name"]))
        out.append(f"### {family}")
        out.append("")
        out.append("| Step | Hex |")
        out.append("|---|---|")
        for v in items:
            mode = next(iter(v["valuesByMode"].values()))
            _, step = v["name"].rsplit("/", 1)
            out.append(f"| `{v['name']}` | `{rgba_to_hex(mode['value'])}` |")
        out.append("")

    if standalone:
        out.append("### Standalone")
        out.append("")
        out.append("| Name | Hex |")
        out.append("|---|---|")
        for v in sorted(standalone, key=lambda x: x["name"]):
            mode = next(iter(v["valuesByMode"].values()))
            out.append(f"| `{v['name']}` | `{rgba_to_hex(mode['value'])}` |")
        out.append("")
    return "\n".join(out)


def render_token_scale(vars_by_coll):
    rows = vars_by_coll["token"]
    out = ["## 5. Base Unit Tokens — `token` (88)", ""]
    out.append("Primitive numeric scale aliased by every spacing/sizing token. "
               "Names use comma as decimal (`0,5` = 0.5px). Unit: pixels.")
    out.append("")
    out.append("| Name | Value (px) |")
    out.append("|---|---|")
    for v in sorted(rows, key=lambda x: token_scale_key(x["name"])):
        mode = next(iter(v["valuesByMode"].values()))
        out.append(f"| `{v['name']}` | `{fmt_float(mode['value'])}` |")
    return "\n".join(out)


def render_typography(vars_by_coll):
    rows = vars_by_coll["font"]
    fontuse = vars_by_coll["fontUse"]
    out = ["## 4. Typography (47 tokens)", ""]

    groups = defaultdict(list)
    for v in rows:
        prefix = v["name"].split("/", 1)[0]
        groups[prefix].append(v)

    order = ["family", "size", "weight", "style", "leading", "tracking"]
    for prefix in order:
        items = groups.get(prefix, [])
        if not items:
            continue
        out.append(f"### {prefix} ({len(items)})")
        out.append("")
        out.append("| Name | Value | Alias |")
        out.append("|---|---|---|")
        for v in sorted(items, key=lambda x: x["name"]):
            mode = next(iter(v["valuesByMode"].values()))
            val = mode["value"]
            alias = mode.get("alias", "—") or "—"
            val_str = fmt_float(val) if isinstance(val, (int, float)) else str(val)
            out.append(f"| `{v['name']}` | `{val_str}` | {alias} |")
        out.append("")

    out.append("### fontUse (2) — Thai/secondary family selectors")
    out.append("")
    out.append("| Name | Family |")
    out.append("|---|---|")
    for v in sorted(fontuse, key=lambda x: x["name"]):
        mode = next(iter(v["valuesByMode"].values()))
        out.append(f"| `{v['name']}` | `{mode['value']}` |")
    return "\n".join(out)


def render_flat_scale(vars_by_coll, coll, heading, intro, sort_key=None):
    rows = vars_by_coll[coll]
    out = [heading, "", intro, ""]
    out.append("| Name | Value |")
    out.append("|---|---|")
    if sort_key is None:
        sort_key = lambda x: x["name"]
    for v in sorted(rows, key=sort_key):
        mode = next(iter(v["valuesByMode"].values()))
        out.append(f"| `{v['name']}` | `{fmt_float(mode['value'])}` |")
    return "\n".join(out)


def render_axis_scale(vars_by_coll, coll, heading, intro, axes, name_pattern):
    """For padding/margin/gap/space — group by axis prefix."""
    rows = vars_by_coll[coll]
    out = [heading, "", intro, ""]

    by_axis = defaultdict(list)
    for v in rows:
        for axis in axes:
            if v["name"].startswith(axis + "-") or v["name"] == axis:
                by_axis[axis].append(v)
                break

    for axis in axes:
        items = by_axis.get(axis, [])
        if not items:
            continue
        out.append(f"### `{axis}-*` ({len(items)})")
        out.append("")
        out.append("| Name | Value (px) |")
        out.append("|---|---|")

        def k(v):
            # strip axis prefix, parse numeric
            scale = v["name"][len(axis) + 1:] if v["name"].startswith(axis + "-") else "0"
            return token_scale_key(scale)

        for v in sorted(items, key=k):
            mode = next(iter(v["valuesByMode"].values()))
            out.append(f"| `{v['name']}` | `{fmt_float(mode['value'])}` |")
        out.append("")
    return "\n".join(out)


def render_border_radius(vars_by_coll):
    rows = vars_by_coll["border-radius"]
    out = ["## 11. Border Radius (150)", ""]
    out.append("Sizes: `xs=2`, `sm=4`, `md=6`, `lg=8`, `xl=12`, `2xl=16`, "
               "`3xl=24`, `4xl=32`, `none=0`, `full=9999`. Each size has 15 "
               "directional variants (`rounded-*`, `-s`, `-e`, `-t`, `-r`, `-b`, "
               "`-l`, `-ss`, `-se`, `-ee`, `-es`, `-tl`, `-tr`, `-br`, `-bl`).")
    out.append("")

    sizes = ["xs", "sm", "md", "lg", "xl", "2xl", "3xl", "4xl", "none", "full"]
    dirs = ["", "s", "e", "t", "r", "b", "l", "ss", "se", "ee", "es", "tl", "tr", "br", "bl"]

    by_name = {v["name"]: v for v in rows}

    def cell(direction, size):
        key = f"rounded-{direction}-{size}" if direction else f"rounded-{size}"
        v = by_name.get(key)
        if not v:
            return ""
        mode = next(iter(v["valuesByMode"].values()))
        return fmt_float(mode["value"])

    out.append("| Direction | " + " | ".join(sizes) + " |")
    out.append("|" + "---|" * (len(sizes) + 1))
    for d in dirs:
        label = f"`rounded-{d}-*`" if d else "`rounded-*`"
        row = [label]
        for s in sizes:
            v = cell(d, s)
            row.append(f"`{v}`" if v else "—")
        out.append("| " + " | ".join(row) + " |")
    return "\n".join(out)


def render_border_width(vars_by_coll):
    rows = vars_by_coll["border-width"]
    out = ["## 12. Border Width (45)", ""]
    out.append("Sizes: `0=0`, `(default)=1`, `2=2`, `4=4`, `8=8` (pixels). "
               "9 directional axes: `border`, `border-x`, `border-y`, `border-s`, "
               "`border-e`, `border-t`, `border-r`, `border-b`, `border-l`.")
    out.append("")

    sizes = ["0", "", "2", "4", "8"]  # "" means default = 1px (just `border`)
    axes = ["", "x", "y", "s", "e", "t", "r", "b", "l"]

    by_name = {v["name"]: v for v in rows}

    out.append("| Axis | 0 | (default 1) | 2 | 4 | 8 |")
    out.append("|---|---|---|---|---|---|")
    for ax in axes:
        prefix = "border" if not ax else f"border-{ax}"
        label = f"`{prefix}*`"
        row = [label]
        for s in sizes:
            key = prefix if not s else f"{prefix}-{s}"
            v = by_name.get(key)
            if v:
                mode = next(iter(v["valuesByMode"].values()))
                row.append(f"`{fmt_float(mode['value'])}`")
            else:
                row.append("—")
        out.append("| " + " | ".join(row) + " |")
    return "\n".join(out)


def render_opacity(vars_by_coll):
    rows = vars_by_coll["opacity"]
    out = ["## 14. Opacity (21)", ""]
    out.append("Steps 0–100 by 5. Used as `bg-foo/{N}`, `text-foo/{N}`, etc.")
    out.append("")
    out.append("| Name | Value (%) |")
    out.append("|---|---|")
    for v in sorted(rows, key=lambda x: int(x["name"])):
        mode = next(iter(v["valuesByMode"].values()))
        out.append(f"| `{v['name']}` | `{fmt_float(mode['value'])}` |")
    return "\n".join(out)


# ---------- main ----------

def main():
    p = argparse.ArgumentParser()
    p.add_argument("--json", required=True)
    p.add_argument("--output", required=True)
    args = p.parse_args()

    with open(args.json) as f:
        data = json.load(f)

    vars_by_coll = defaultdict(list)
    for v in data["variables"]:
        vars_by_coll[v["collectionName"]].append(v)

    total = sum(len(vs) for vs in vars_by_coll.values())
    print(f"Loaded {total} variables across {len(vars_by_coll)} collections", file=sys.stderr)

    parts = [
        "# Design System Specification",
        "",
        "> Stack: shadcn/ui · Tailwind CSS v4 · React · Next.js App Router",
        f"> Source: `variables-export.json` ({total} variables across 17 collections)",
        "> Generated by `build-design-md.py` — do not hand-edit.",
        "",
        "---",
        "",
        CORE_PRINCIPLES,
        "",
        "---",
        "",
        render_shadcn(vars_by_coll),
        "",
        "---",
        "",
        "## 3. Primitive Color Palettes",
        "",
        "Two sources: Tailwind `tw/colors` (244) and Radix `rdx/colors` (396). "
        "shadcn/ui semantic tokens alias these — components should not consume them "
        "directly except for chart palettes.",
        "",
        render_color_palette(vars_by_coll, "tw/colors",
                             "### 3a. tw/colors (244) — Tailwind palette",
                             "11 steps per hue plus `white` and `black` standalones."),
        "",
        render_color_palette(vars_by_coll, "rdx/colors",
                             "### 3b. rdx/colors (396) — Radix UI palette",
                             "12 steps per hue (Radix scale). Includes `black/1-12` and "
                             "`white/1-12` transparency ramps."),
        "",
        "---",
        "",
        render_typography(vars_by_coll),
        "",
        "---",
        "",
        render_token_scale(vars_by_coll),
        "",
        "---",
        "",
        render_axis_scale(vars_by_coll, "padding",
                          "## 6. Padding (245)",
                          "Tailwind padding axes × 35 scale steps. Unit: pixels.",
                          ["p", "px", "py", "pt", "pr", "pb", "pl"],
                          None),
        "",
        "---",
        "",
        render_axis_scale(vars_by_coll, "margin",
                          "## 7. Margin (245)",
                          "Tailwind margin axes × 35 scale steps. Unit: pixels.",
                          ["m", "mx", "my", "mt", "mr", "mb", "ml"],
                          None),
        "",
        "---",
        "",
        render_axis_scale(vars_by_coll, "gap",
                          "## 8. Gap (102)",
                          "Flex/grid gap. 3 axes × 34 steps. Unit: pixels.",
                          ["gap", "gap-x", "gap-y"],
                          None),
        "",
        "---",
        "",
        render_axis_scale(vars_by_coll, "space",
                          "## 9. Space (68)",
                          "Tailwind `space-x-*` / `space-y-*` (sibling gutter). Unit: pixels.",
                          ["space-x", "space-y"],
                          None),
        "",
        "---",
        "",
        "## 10. Sizing",
        "",
        render_flat_scale(vars_by_coll, "height",
                          "### 10a. height (24)",
                          "`h-*` scale. Unit: pixels.",
                          sort_key=lambda x: token_scale_key(x["name"][2:]) if x["name"].startswith("h-") else (1, x["name"])),
        "",
        render_flat_scale(vars_by_coll, "max-height",
                          "### 10b. max-height (35)",
                          "`max-h-*` scale. Unit: pixels.",
                          sort_key=lambda x: token_scale_key(x["name"][6:]) if x["name"].startswith("max-h-") else (1, x["name"])),
        "",
        render_flat_scale(vars_by_coll, "max-width",
                          "### 10c. max-width (51)",
                          "`max-w-*` scale plus screen-breakpoint variants (`max-w-screen-{sm…2xl}`). Unit: pixels.",
                          sort_key=lambda x: token_scale_key(x["name"][6:]) if x["name"].startswith("max-w-") else (1, x["name"])),
        "",
        "---",
        "",
        render_border_radius(vars_by_coll),
        "",
        "---",
        "",
        render_border_width(vars_by_coll),
        "",
        "---",
        "",
        render_flat_scale(vars_by_coll, "stroke-width",
                          "## 13. Stroke Width (11)",
                          "Icon/SVG stroke. `stroke-0,5` through `stroke-3`. Unit: pixels.",
                          sort_key=lambda x: token_scale_key(x["name"][7:])),
        "",
        "---",
        "",
        render_opacity(vars_by_coll),
        "",
        "---",
        "",
        f"_End of spec — {total} variables._",
    ]

    output = "\n".join(parts) + "\n"
    Path(args.output).write_text(output)
    print(f"Wrote {args.output} ({len(output)} bytes)", file=sys.stderr)


if __name__ == "__main__":
    main()
