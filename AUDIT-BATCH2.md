# Audit Batch 2 — Figma fidelity check

> Date: 2026-06-14
> Scope: deep Figma-vs-code variant-coverage audit for 10 high-impact components not already rechecked in the recent 6-component pass (combobox, command, field, input-group, item, toggle-group).
> Source file: `92ljrxYvIaOPQnAY8hqAU2` (`@shadcn_ui components not token`).
> Method: pulled the master page index from the file (via `get_metadata` error path — useful side-effect that exposes all top-level page node IDs with names), then per component: `get_screenshot` at maxDimension 900 on the page frame, read `components/demos/<name>-demo.tsx` and (where the Figma signaled a likely mismatch) `components/ui/<name>.tsx`, then eyeball-compared the variant list.

## Method

Spot-checked 10 components against Figma. For each: found node-id, got screenshot, read demo, compared variant coverage and obvious styling. Did **not** do per-pixel diffs; the question is "does the demo cover the variants the designer ships?".

Top-level component-page node IDs discovered (handy reference for future audits):

```
accordion       72:2591    alert           72:2633    alert-dialog    72:2675
aspect-ratio   1098:924    avatar          72:2717    badge           72:2718
breadcrumb     101:2       button          72:2719    button-group  1185:1979
calendar       72:2720     card            72:2721    carousel        72:2722
chart          296:42      checkbox        72:2723    collapsible     72:2724
combobox       73:187      command         73:223     context-menu    73:224
data-table     73:225      date-picker     73:226     dialog          73:227
drawer         73:228      empty         1186:3809    dropdown-menu   73:229
field         1188:4205    input           73:1977    input-group   1188:5363
input-otp     101:698      hover-card      73:231     item          1196:923
kbd           1196:1097    label           73:1978    menubar         73:1979
native-select 1254:65      navigation-menu 73:1980    pagination      73:1981
popover        73:1982     progress        73:1983    radio-group     73:1984
scroll-area    73:1985     select          73:1986    separator       73:1987
sheet          73:1988     sidebar        269:32      skeleton        73:1989
slider         73:2895     sonner          73:2896    spinner       1196:1174
switch         73:2897     table           73:2898    tabs            73:2899
textarea       73:2900     toggle          73:2902    toggle-group    73:2903
tooltip        73:2904
```

---

## Per-component findings

### alert (Figma 72:2633)
**Figma variants:** Default (success, icon + title + description), Title-only (icon + title), Destructive (icon + title + bulleted list). Each separated by horizontal divider. White surface, rounded border.
**Demo coverage:** ✓ matches.
**Gaps:** none — `alert-demo.tsx` has exactly the 3 sections in the same order with the same content shape (success icon, trash title-only, destructive with bulleted list).
**Recommendation:** skip — clean match.

### alert-dialog (Figma 72:2675)
**Figma variants:** Single destructive "Are you absolutely sure?" dialog over a dimmed overlay. Animation/prototype frames also present but those are motion specs, not extra variants.
**Demo coverage:** ✓ matches and slightly **exceeds** (intentional). Demo adds a second "Destructive" section ("Delete account / Delete your account?") with a destructive-styled action button. Figma only shows one variant; the demo is a reasonable superset for documentation.
**Gaps:** none against Figma. Optional cleanup: the screenshot in Figma uses "Are you absolutely sure?" — demo's `Default` section already matches that verbatim.
**Recommendation:** skip — clean (demo > figma is acceptable for docs).

### button (Figma 72:2719)
**Figma variants (2 columns × 8 rows):**
- Column 1 (size=default): Default(filled), Secondary, Destructive, Outline, Ghost, Link, icon-only(>), New Branch w/ icon, "Please wait" disabled spinner.
- Column 2 (size=lg or sm — slightly larger surface): same 9 rows.
That's **6 variants × 2 sizes** + icon/loading states.
**Demo coverage:** ⚠️ partial.
**Gaps:**
- [ ] No `size` variant section. Demo only renders default-size buttons across the 6 variants. Figma shows two side-by-side size columns (looks like default vs lg, possibly sm too).
- [ ] No explicit `size="sm"` / `size="lg"` showcase, despite the primitive supporting them.
- [x] Icon button covered (single example).
- [x] Loading-state button covered (single example).
**Recommendation:** **minor tweaks** — add a "Sizes" section showing `size="sm"`, default, `size="lg"`, `size="icon"` in a row. ~5 min.

### badge (Figma 72:2718)
**Figma variants:** 4 base variants (Badge/Secondary/Destructive/Outline) + Verified-with-icon + counter "8" + counter "99" (destructive circle) + "20+" outline. 7 total cells in one card.
**Demo coverage:** ✓ matches.
**Gaps:** none. Demo's 3 sections (Variants / With Icon / Counter) cover all 7 Figma cells.
**Recommendation:** skip — clean match.

### dialog (Figma 73:227)
**Figma variants:** Two sections, divider between:
1. "Open Dialog" → Edit profile (Name + Username + Cancel/Save changes).
2. "Share" → Share link (URL input + Close).
**Demo coverage:** ✓ matches exactly.
**Gaps:** none — `dialog-demo.tsx` has both `Default` (Edit profile) and `Share Link` sections with the same fields and footer button arrangement.
**Recommendation:** skip — clean match.

### dropdown-menu (Figma 73:229)
**Figma variants:** 3 sections separated by dividers:
1. "My account" menu — labels Profile / Billing / Settings / Keyboard shortcuts (each with `⇧⌘P`, `⌘B`, `⌘S`, `⌘K` shortcuts), separator, Team / Invite Users (with `>` submenu indicator) / New Team (`⌘+T`), separator, Github / Support / **API (disabled, greyed)**, separator, Log out (`⇧⌘Q`).
2. "Appearance" — checkbox items: ✓ Status Bar, Activity Bar (disabled-greyed), Panel.
3. "Panel Position" — radio items: Top, ● Bottom (selected), Right.
**Demo coverage:** ✓ matches.
**Gaps:** none — `dropdown-menu-demo.tsx` exactly mirrors the three variants. `Invite Users` has the submenu, `API` is disabled, `Activity Bar` checkbox is disabled, radio defaults to bottom. All matching.
**Recommendation:** skip — clean match.

### accordion (Figma 72:2591)
**Figma variants:** State frame shows several stacked configurations:
- Closed list of 3 items (Product Information / Shipping Details / Return Policy).
- Same list with the second item expanded (Product Information panel open).
- "Animation molecule" frame shows multiple expanded states.
**Demo coverage:** ✓ matches.
**Gaps:** none against the static design. The docs page renders `<Faq>` (in `components/faq.tsx`) which uses `type="single" collapsible` with exactly the three Figma items and the same prose. No "type=multiple" example, but Figma doesn't show multiple-open either.
**Note:** the demo file `accordion-demo.tsx` is not in `components/demos/` (the docs page directly imports `<Faq>` instead). Per CLAUDE.md §3.3 convention, every demo should live under `components/demos/`. `<Faq>` already uses idiomatic single-variant rendering, but it skips the `<section><h3 className="font-mono…">` wrapper. **Minor convention drift.**
**Recommendation:** **minor tweaks** — either (a) wrap `<Faq>` in the `<section><h3>` convention, or (b) add a thin `components/demos/accordion-demo.tsx` that delegates to `<Faq>` and follows §3.3. ~5 min.

### tabs (Figma 73:2899)
**Figma variants:** One example — `Account | Password` triggers + an Account card with Name / Username inputs + "Save changes" button.
**Demo coverage:** ✓ matches.
**Gaps:** none. Demo renders Account/Password tabs with matching card body. Could optionally add a second example showing vertical/icon-only variants, but Figma doesn't ship those.
**Recommendation:** skip — clean match.

### popover (Figma 73:1982)
**Figma variants:** One example — "Open popover" trigger + "Dimensions" card containing 4 rows: Width=100%, Max. width=320px, Height=25px, Max. height=none.
**Demo coverage:** ⚠️ partial.
**Gaps:**
- [ ] Figma popover has **4 input rows** (Width, Max. width, Height, Max. height). Demo only renders **2** (Width and Height). Missing `Max. width` and `Max. height` rows.
- [ ] Demo's existing rows use 3-column grid (`grid-cols-3`) which collapses Width into one cell and Input across cols-2 — matches Figma layout, just incomplete.
**Recommendation:** **minor tweaks** — add the missing 2 rows (`Max. width = 320px`, `Max. height = none`) to match Figma's 4-row Dimensions form. ~3 min.

### select (Figma 73:1986)
**Figma variants:** Three sections, divider between:
1. Default — placeholder "Select a fruit" closed + opened menu with "Fruits" group label and items Apple (checked) / Banana / Blueberry / Grapes / Pineapple.
2. Grouped — placeholder "Select a timezone" closed + opened menu with two groups: "North America" (EST checked / CST / MST / PST / AKST / HST) and "Europe & Africa" (GMT / CET / CEE / WEST).
3. Form — Username label + "Select a verified email to display" + helper text + Submit button. Open menu shows `m@example.com` (checked) / `m@google.com` / `m@support.com`.
**Demo coverage:** ✓ matches.
**Gaps:** none. `select-demo.tsx` has all three sections with the same group labels, same items, same form copy.
- Minor: Figma Form variant shows the **opened** state for the second trigger; demo just shows closed triggers. Cosmetic only — opening it is the user's job at runtime.
**Recommendation:** skip — clean match.

---

## Summary

- **Clean (no changes needed):** **6** — alert, alert-dialog, badge, dialog, dropdown-menu, tabs, select. (Counting alert-dialog as clean because its superset behaviour is intentional.) Recount with strict-clean: 6 = alert, badge, dialog, dropdown-menu, tabs, select. (Plus alert-dialog as "clean — intentional superset".)
- **Needs minor tweaks:** **3** — button (missing `size` showcase), accordion (demo file location + section convention drift), popover (missing 2 of 4 form rows).
- **Needs rewrite:** **0**.
- **Could not locate Figma frame:** **0** — full page index was recovered.

## Prioritized fix list

1. **popover** — add the missing `Max. width` and `Max. height` rows to the Dimensions form so the demo matches the 4-row Figma layout. ~3 min.
2. **accordion** — either wrap `<Faq>` in the `<section><h3 className="font-mono text-sm font-medium text-muted-foreground">…</h3></section>` convention, or move the single-variant accordion rendering into `components/demos/accordion-demo.tsx` per §3.3. ~5 min.
3. **button** — add a "Sizes" section to `button-demo.tsx` showing `size="sm"`, default, `size="lg"`, `size="icon"` side-by-side. Figma renders two size columns; demo currently only covers default size. ~5 min.

Total fix budget: **~13 min** to close the variant-coverage gap across the 10 highest-impact components in this batch.

## Not in scope (note for next batch)

The remaining ~40 components not in the recently-rechecked 6 and not in this batch of 10 still need a fidelity sweep. Suggested next batch (sorted by likely user-facing impact): drawer, sheet, hover-card, tooltip, breadcrumb, pagination, navigation-menu, menubar, context-menu, calendar, table, data-table, date-picker, form, slider, progress, input-otp, textarea, kbd, native-select, empty, scroll-area.
