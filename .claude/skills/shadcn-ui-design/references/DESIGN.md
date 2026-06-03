# Design System Specification
> Stack: shadcn/ui · Tailwind CSS v4 · React · Next.js App Router  |  Source: variables-export.json (1,807 variables)

---

## 1. Core Principles

| Principle | Description |
|-----------|-------------|
| **Semantic tokens** | Access colors via tokens like `primary`, `muted` — never use raw hex values |
| **Composition** | Build UI by composing small sub-components, not large monolithic ones |
| **Open code** | Components are project code — edit them directly, never override the library |
| **Accessible by default** | Every component is built on Radix UI — keyboard navigation and ARIA are correct by default |
| **Multi-theme** | Supports 4 themes: Light mode, Dark mode, Primary (blue), Secondary (yellow) |

---

---

## 2. shadcn/ui Semantic Tokens (35)

Defined as CSS variables in `:root` / `.dark` — components reference them via Tailwind classes, e.g. `bg-primary`, `text-muted-foreground`

| Token | Light mode | Dark mode | Primary | Secondary | Alias (Light) |
|-------|-----------|-----------|---------|-----------|---------------|
| `background` | `#FFFFFF` | `#0A0A0A` | `#172554` | `#78350F` | white |
| `foreground` | `#0A0A0A` | `#FAFAFA` | `#EFF6FF` | `#FEFCE8` | neutral/950 |
| `card` | `#FFFFFF` | `#171717` | `#1E3A8A` | `#78350F` | white |
| `card-foreground` | `#0A0A0A` | `#FAFAFA` | `#EFF6FF` | `#FEFCE8` | neutral/950 |
| `popover` | `#FFFFFF` | `#262626` | `#1E40AF` | `#92400E` | white |
| `popover-foreground` | `#0A0A0A` | `#FAFAFA` | `#EFF6FF` | `#FEFCE8` | neutral/950 |
| `primary` | `#171717` | `#E5E5E5` | `#BFDBFE` | `#FEF08A` | neutral/900 |
| `primary-foreground` | `#FAFAFA` | `#171717` | `#1E3A8A` | `#78350F` | neutral/50 |
| `secondary` | `#F5F5F5` | `#262626` | `#1E40AF` | `#92400E` | neutral/100 |
| `secondary-foreground` | `#0A0A0A` | `#FAFAFA` | `#EFF6FF` | `#FEFCE8` | neutral/950 |
| `muted` | `#F5F5F5` | `#262626` | `#1E40AF` | `#92400E` | neutral/100 |
| `muted-foreground` | `#737373` | `#A3A3A3` | `#60A5FA` | `#FACC15` | neutral/500 |
| `accent` | `#F5F5F5` | `#404040` | `#1D4ED8` | `#A16207` | neutral/100 |
| `accent-foreground` | `#171717` | `#FAFAFA` | `#EFF6FF` | `#FEFCE8` | neutral/900 |
| `destructive` | `#DC2626` | `#F87171` | `#F87171` | `#DC2626` | red/600 |
| `border` | `#E5E5E5` | `#404040` | `#1D4ED8` | `#A16207` | neutral/200 |
| `input` | `#E5E5E5` | `#171717` | `#1E3A8A` | `#78350F` | neutral/200 |
| `ring` | `#737373` | `#737373` | `#3B82F6` | `#FEFCE8` | neutral/500 |
| `chart-1` | `#5EB1EF` | `#5EB1EF` | `#5EB1EF` | `#D5AE39` | blue/8 |
| `chart-2` | `#0090FF` | `#0090FF` | `#0090FF` | `#FFE629` | blue/9 |
| `chart-3` | `#0588F0` | `#0588F0` | `#0588F0` | `#FFDC00` | blue/10 |
| `chart-4` | `#0D74CE` | `#0D74CE` | `#0D74CE` | `#9E6C00` | blue/11 |
| `chart-5` | `#113264` | `#113264` | `#113264` | `#473B1F` | blue/12 |
| `sidebar` | `#FAFAFA` | `#171717` | `#1E3A8A` | `#78350F` | neutral/50 |
| `sidebar-foreground` | `#0A0A0A` | `#FAFAFA` | `#EFF6FF` | `#FEFCE8` | neutral/950 |
| `sidebar-primary` | `#171717` | `#0588F0` | `#0588F0` | `#FFDC00` | neutral/900 |
| `sidebar-primary-foreground` | `#FAFAFA` | `#FAFAFA` | `#EFF6FF` | `#FEFCE8` | neutral/50 |
| `sidebar-accent` | `#F5F5F5` | `#262626` | `#1E40AF` | `#92400E` | neutral/100 |
| `sidebar-accent-foreground` | `#171717` | `#FAFAFA` | `#EFF6FF` | `#FEFCE8` | neutral/900 |
| `sidebar-border` | `#D4D4D4` | `#FFFFFFCC` | `#FFFFFFCC` | `#FFFFFFCC` | neutral/300 |
| `sidebar-ring` | `#737373` | `#737373` | `#3B82F6` | `#EAB308` | neutral/500 |
| `background-color` | `#0000004D` | `#0000004D` | `#0000004D` | `#0000004D` | black/5 |
| `sementic-background` | `#696867` | `#272625` | `#272625` | `#272625` | — |
| `sementic-border` | `#898887` | `#535151` | `#535151` | `#535151` | — |
| `sementic-foreground` | `#FFFFFF` | `#FFFFFF` | `#FFFFFF` | `#FFFFFF` | white |

### Token Pairing (surface + foreground always used together)

| Surface | Foreground | Tailwind classes |
|---------|-----------|-----------------|
| `background` | `foreground` | `bg-background text-foreground` |
| `card` | `card-foreground` | `bg-card text-card-foreground` |
| `popover` | `popover-foreground` | `bg-popover text-popover-foreground` |
| `primary` | `primary-foreground` | `bg-primary text-primary-foreground` |
| `secondary` | `secondary-foreground` | `bg-secondary text-secondary-foreground` |
| `muted` | `muted-foreground` | `bg-muted text-muted-foreground` |
| `accent` | `accent-foreground` | `bg-accent text-accent-foreground` |
| `destructive` | `—` | `bg-destructive text-white` |
| `sidebar` | `sidebar-foreground` | `bg-sidebar text-sidebar-foreground` |
| `sidebar-primary` | `sidebar-primary-foreground` | `bg-sidebar-primary text-sidebar-primary-foreground` |
| `sidebar-accent` | `sidebar-accent-foreground` | `bg-sidebar-accent text-sidebar-accent-foreground` |

---

---

## 3. Do/Don't Rules

### Color Usage

| ✅ Do | ❌ Don't | Reason |
|-------|---------|--------|
| `bg-background text-foreground` | `bg-white text-gray-900` | token adapts to theme automatically |
| `bg-card text-card-foreground` | `bg-slate-50` | card token exists in all themes |
| `bg-primary text-primary-foreground` | `bg-blue-600 text-white` | Primary theme uses blue/200, not blue/600 |
| `bg-muted text-muted-foreground` | `bg-gray-100 text-gray-500` | muted changes per theme |
| `bg-destructive` | `bg-red-500` | Dark mode uses red/400, not red/500 |
| `border-border` | `border-gray-200` | border token differs across all 4 themes |
| `bg-sidebar text-sidebar-foreground` | `bg-gray-50` | sidebar has dedicated tokens |
| `ring-ring` | `ring-blue-500` | ring changes per Primary/Secondary theme |
| tw/colors and rdx/colors are for building tokens only | Using `text-blue-500` in a component | primitive colors are not theme-responsive |
| Success: `text-green-700 dark:text-green-400` | `text-green-700` (no dark variant) | always include a dark variant when using primitives |

### Typography Usage

| ✅ Do | ❌ Don't | Reason |
|-------|---------|--------|
| `text-foreground` for body text | `text-black` or `text-[#000]` | not responsive to dark mode |
| `text-muted-foreground` for helper/caption | `text-gray-400` | muted-foreground is neutral/500 (Light) / neutral/400 (Dark) |
| `font-sans` (Inter) for English UI | Setting font-family inline | Use token `family/sans` via Tailwind |
| Thai body text: use IBM Plex Sans Thai | Letting fallback font handle it | `fontUse/San Serif` is defined in token |
| `leading-7` (28px) for paragraph | `leading-loose` | matches token `leading/7` |
| `tracking-tight` for headings | `tracking-[-0.05em]` | uses token `tracking/tight` (−0.4px) |

### Spacing Usage

| ✅ Do | ❌ Don't | Reason |
|-------|---------|--------|
| `gap-4` (16px) for component padding | `gap-[15px]` or `gap-[17px]` | must stay within the token scale |
| `space-y-6` (24px) between form fields | `mt-6` on every element | use space utility instead of manual margin |
| `p-4` / `px-6 py-4` for card | `p-[15px]` | off-scale values break visual consistency |
| `max-w-7xl` (1280px) for page container | `max-w-[1300px]` | use named tokens only |
| `h-10` (40px) for default button height | `h-[38px]` | must match the height token |

### Border Radius Usage

| ✅ Do | ❌ Don't |
|-------|---------|
| `rounded-md` (6px) for button, input | `rounded-[5px]` |
| `rounded-lg` (8px) for card, panel | `rounded-[10px]` |
| `rounded-xl` (12px) for modal, sheet | `rounded-2` |
| `rounded-full` (9999px) for avatar, pill badge | `rounded-[50%]` |

---
---

## 4. Typography (Essential)


#### Font Family

| Token | Value |
|-------|-------|
| `family/sans` | `Inter` |
| `family/mono` | `Geist Mono` |

#### Font Size

| Token | px |
|-------|----|
| `size/xs` | `12px` |
| `size/sm` | `14px` |
| `size/base` | `16px` |
| `size/lg` | `18px` |
| `size/xl` | `20px` |
| `size/2xl` | `24px` |
| `size/3xl` | `30px` |
| `size/4xl` | `36px` |
| `size/5xl` | `48px` |
| `size/6xl` | `60px` |
| `size/7xl` | `72px` |
| `size/8xl` | `96px` |
| `size/9xl` | `128px` |

#### Letter Spacing (tracking)

| Token | px |
|-------|----|
| `tracking/tighter` | `-0.8px` |
| `tracking/tight` | `-0.4px` |
| `tracking/normal` | `0px` |
| `tracking/wide` | `0.4px` |
| `tracking/wider` | `0.8px` |
| `tracking/widest` | `1.6px` |

### 5b. fontUse (2) — Thai Fonts

| Token | Font Family |
|-------|------------|
| `San Serif` | `IBM Plex Sans Thai` |
| `Serif` | `SF Thonburi` |

---
---

## 5. Border Radius

Base scale: `xs`=2px · `sm`=4px · `md`=6px · `lg`=8px · `xl`=12px · `2xl`=16px · `3xl`=24px · `4xl`=32px · `none`=0px · `full`=9999px

| Class | Usage |
|-------|-------|
| `rounded-sm` (4px) | Tags, small chips |
| `rounded-md` (6px) | Button, Input |
| `rounded-lg` (8px) | Card, Panel |
| `rounded-xl` (12px) | Dialog, Sheet |
| `rounded-2xl` (16px) | Large overlay |
| `rounded-full` (9999px) | Avatar, Pill badge |

---

## 6. Accessibility

#### Color Contrast (WCAG 2.1)

| Token pair | Light mode | Ratio | Level |
|-----------|-----------|-------|-------|
| `foreground` / `background` | #0A0A0A / #FFFFFF | **18.1:1** | AAA |
| `primary-foreground` / `primary` | #FAFAFA / #171717 | **17.2:1** | AAA |
| `muted-foreground` / `background` | #737373 / #FFFFFF | **4.6:1** | AA |
| `destructive` / `background` | #DC2626 / #FFFFFF | **5.9:1** | AA |
| `card-foreground` / `card` | #0A0A0A / #FFFFFF | **18.1:1** | AAA |

| Token pair | Dark mode | Ratio | Level |
|-----------|----------|-------|-------|
| `foreground` / `background` | #FAFAFA / #0A0A0A | **18.1:1** | AAA |
| `muted-foreground` / `background` | #A3A3A3 / #0A0A0A | **7.2:1** | AAA |
| `destructive` / `background` | #F87171 / #0A0A0A | **7.8:1** | AAA |

> **Rule**: Normal text must pass AA (≥4.5:1), Large text (≥18px bold or ≥24px) must pass AA (≥3:1), UI components must pass AA (≥3:1)

#### Touch Target

| ✅ Do | ❌ Don't |
|-------|---------|
| Button minimum `h-10` (40px) | Button smaller than `h-8` (32px) without extra padding |
| Icon button uses `size="icon"` (40×40px) | Icon button smaller than 24×24px |
| Touch area minimum 44×44px (WCAG 2.5.8) | Clickable element smaller than 44px on mobile |

#### Focus & Keyboard

| ✅ Do | ❌ Don't |
|-------|---------|
| Use `ring-ring` and `ring-offset-background` for focus ring | `outline-none` without a custom focus style |
| Every interactive element reachable via Tab | `tabIndex={-1}` on an element that should be focusable |
| `DialogTitle` + `DialogDescription` in every Dialog | Dialog without an accessible label |
| `aria-label` on every icon-only button | Icon button with no label at all |
| `aria-live="polite"` for toast/notification | Alert without an ARIA live region |

#### Semantic HTML

| ✅ Do | ❌ Don't |
|-------|---------|
| `<h1>`–`<h4>` in sequential order | Skip a heading level (e.g. h1 → h3) |
| `<button>` for actions, `<a>` for navigation | `<div onClick>` instead of button |
| `<nav>` wrapping navigation links | Navigation without a landmark |
| `<main>` wrapping page content | Page without a main landmark |

---

### Quick Reference Checklist

| Category | Requirement | Token / Class |
|----------|------------|---------------|
| **Contrast** | Normal text ≥ 4.5:1 | Use `foreground` / `muted-foreground` only |
| **Contrast** | Large text / UI ≥ 3:1 | Verify custom colors with a contrast checker |
| **Touch target** | Minimum 44×44px | `h-10` (40px) + `py-1` or `h-11` (44px) |
| **Focus ring** | Clearly visible | `focus-visible:ring-2 ring-ring ring-offset-2` |
| **Keyboard nav** | Logical Tab order | Avoid `tabIndex` > 0, rely on DOM order |
| **Screen reader** | Every image has alt | `alt=""` for decorative, descriptive for content |
| **Motion** | Respect prefers-reduced-motion | `motion-safe:animate-*` instead of `animate-*` directly |
| **Heading** | Sequential h1→h2→h3 | Never skip levels |
| **Form** | Label associated with every input | `<FormLabel>` from shadcn/ui required on every field |
| **Dialog** | Must have title + description | `<DialogTitle>` + `<DialogDescription>` always |
| **Color alone** | Never convey information by color alone | Add an icon or text alongside error/success states |

<!-- Total variables documented: 1807 / 1,807 -->
---

## 7. Next.js CSS Variable Setup

### app/globals.css (complete file — Tailwind v4)

```css
/* app/globals.css — generated by sync-tokens.py. DO NOT EDIT BY HAND.
 * Source: .claude/skills/shadcn-ui-design/references/variables-export.json
 * Re-run: python .claude/skills/shadcn-ui-design/scripts/sync-tokens.py --output app/globals.css
 */

@import "tailwindcss";

/* Map CSS variables → Tailwind v4 utility classes */
@theme {
  --color-background: var(--background);
  --color-foreground: var(--foreground);
  --color-card: var(--card);
  --color-card-foreground: var(--card-foreground);
  --color-popover: var(--popover);
  --color-popover-foreground: var(--popover-foreground);
  --color-primary: var(--primary);
  --color-primary-foreground: var(--primary-foreground);
  --color-secondary: var(--secondary);
  --color-secondary-foreground: var(--secondary-foreground);
  --color-muted: var(--muted);
  --color-muted-foreground: var(--muted-foreground);
  --color-accent: var(--accent);
  --color-accent-foreground: var(--accent-foreground);
  --color-destructive: var(--destructive);
  --color-border: var(--border);
  --color-input: var(--input);
  --color-ring: var(--ring);
  --color-sidebar: var(--sidebar);
  --color-sidebar-foreground: var(--sidebar-foreground);
  --color-sidebar-primary: var(--sidebar-primary);
  --color-sidebar-primary-foreground: var(--sidebar-primary-foreground);
  --color-sidebar-accent: var(--sidebar-accent);
  --color-sidebar-accent-foreground: var(--sidebar-accent-foreground);
  --color-sidebar-border: var(--sidebar-border);
  --color-sidebar-ring: var(--sidebar-ring);
  --font-family-sans: var(--font-sans);
  --font-family-mono: var(--font-mono);
  --radius-sm: calc(var(--radius) - 4px);
  --radius-md: calc(var(--radius) - 2px);
  --radius-lg: var(--radius);
  --radius-xl: calc(var(--radius) + 4px);
}


@layer base {
  /* Light mode */
  :root {
    --background: #FFFFFF;
    --foreground: #0A0A0A;
    --card: #FFFFFF;
    --card-foreground: #0A0A0A;
    --popover: #FFFFFF;
    --popover-foreground: #0A0A0A;
    --primary: #171717;
    --primary-foreground: #FAFAFA;
    --secondary: #F5F5F5;
    --secondary-foreground: #0A0A0A;
    --muted: #F5F5F5;
    --muted-foreground: #737373;
    --accent: #F5F5F5;
    --accent-foreground: #171717;
    --destructive: #DC2626;
    --border: #E5E5E5;
    --input: #E5E5E5;
    --ring: #737373;
    --chart-1: #5EB1EF;
    --chart-2: #0090FF;
    --chart-3: #0588F0;
    --chart-4: #0D74CE;
    --chart-5: #113264;
    --sidebar: #FAFAFA;
    --sidebar-foreground: #0A0A0A;
    --sidebar-primary: #171717;
    --sidebar-primary-foreground: #FAFAFA;
    --sidebar-accent: #F5F5F5;
    --sidebar-accent-foreground: #171717;
    --sidebar-border: #D4D4D4;
    --sidebar-ring: #737373;
    --background-color: #0000004D;
    --sementic-background: #696867;
    --sementic-border: #898887;
    --sementic-foreground: #FFFFFF;
    --radius: 0.5rem;
    --font-sans: "Inter", sans-serif;
    --font-mono: "Geist Mono", monospace;
    --font-thai: "IBM Plex Sans Thai", sans-serif;
  }

  /* Dark mode */
  .dark {
    --background: #0A0A0A;
    --foreground: #FAFAFA;
    --card: #171717;
    --card-foreground: #FAFAFA;
    --popover: #262626;
    --popover-foreground: #FAFAFA;
    --primary: #E5E5E5;
    --primary-foreground: #171717;
    --secondary: #262626;
    --secondary-foreground: #FAFAFA;
    --muted: #262626;
    --muted-foreground: #A3A3A3;
    --accent: #404040;
    --accent-foreground: #FAFAFA;
    --destructive: #F87171;
    --border: #404040;
    --input: #171717;
    --ring: #737373;
    --chart-1: #5EB1EF;
    --chart-2: #0090FF;
    --chart-3: #0588F0;
    --chart-4: #0D74CE;
    --chart-5: #113264;
    --sidebar: #171717;
    --sidebar-foreground: #FAFAFA;
    --sidebar-primary: #0588F0;
    --sidebar-primary-foreground: #FAFAFA;
    --sidebar-accent: #262626;
    --sidebar-accent-foreground: #FAFAFA;
    --sidebar-border: #FFFFFFCC;
    --sidebar-ring: #737373;
    --background-color: #0000004D;
    --sementic-background: #272625;
    --sementic-border: #535151;
    --sementic-foreground: #FFFFFF;
  }

  /* Primary */
  [data-theme="primary"] {
    --background: #172554;
    --foreground: #EFF6FF;
    --card: #1E3A8A;
    --card-foreground: #EFF6FF;
    --popover: #1E40AF;
    --popover-foreground: #EFF6FF;
    --primary: #BFDBFE;
    --primary-foreground: #1E3A8A;
    --secondary: #1E40AF;
    --secondary-foreground: #EFF6FF;
    --muted: #1E40AF;
    --muted-foreground: #60A5FA;
    --accent: #1D4ED8;
    --accent-foreground: #EFF6FF;
    --destructive: #F87171;
    --border: #1D4ED8;
    --input: #1E3A8A;
    --ring: #3B82F6;
    --chart-1: #5EB1EF;
    --chart-2: #0090FF;
    --chart-3: #0588F0;
    --chart-4: #0D74CE;
    --chart-5: #113264;
    --sidebar: #1E3A8A;
    --sidebar-foreground: #EFF6FF;
    --sidebar-primary: #0588F0;
    --sidebar-primary-foreground: #EFF6FF;
    --sidebar-accent: #1E40AF;
    --sidebar-accent-foreground: #EFF6FF;
    --sidebar-border: #FFFFFFCC;
    --sidebar-ring: #3B82F6;
    --background-color: #0000004D;
    --sementic-background: #272625;
    --sementic-border: #535151;
    --sementic-foreground: #FFFFFF;
  }

  /* Secondary */
  [data-theme="secondary"] {
    --background: #78350F;
    --foreground: #FEFCE8;
    --card: #78350F;
    --card-foreground: #FEFCE8;
    --popover: #92400E;
    --popover-foreground: #FEFCE8;
    --primary: #FEF08A;
    --primary-foreground: #78350F;
    --secondary: #92400E;
    --secondary-foreground: #FEFCE8;
    --muted: #92400E;
    --muted-foreground: #FACC15;
    --accent: #A16207;
    --accent-foreground: #FEFCE8;
    --destructive: #DC2626;
    --border: #A16207;
    --input: #78350F;
    --ring: #FEFCE8;
    --chart-1: #D5AE39;
    --chart-2: #FFE629;
    --chart-3: #FFDC00;
    --chart-4: #9E6C00;
    --chart-5: #473B1F;
    --sidebar: #78350F;
    --sidebar-foreground: #FEFCE8;
    --sidebar-primary: #FFDC00;
    --sidebar-primary-foreground: #FEFCE8;
    --sidebar-accent: #92400E;
    --sidebar-accent-foreground: #FEFCE8;
    --sidebar-border: #FFFFFFCC;
    --sidebar-ring: #EAB308;
    --background-color: #0000004D;
    --sementic-background: #272625;
    --sementic-border: #535151;
    --sementic-foreground: #FFFFFF;
  }

}
```

> **Theme switching**: set `class="dark"` or `data-theme="primary"` / `data-theme="secondary"` on the `<html>` element. Components need no changes — all tokens resolve automatically.

### app/layout.tsx — Font Loading

```tsx
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { IBM_Plex_Sans_Thai } from 'next/font/google'
import { GeistMono } from 'geist/font/mono'
import './globals.css'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-sans',
})

const ibmPlexSansThai = IBM_Plex_Sans_Thai({
  subsets: ['thai', 'latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-thai',
})

export const metadata: Metadata = {
  title: { default: 'App Name', template: '%s | App Name' },
  description: 'App description',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="th" suppressHydrationWarning>
      <body className={`${inter.variable} ${ibmPlexSansThai.variable} ${GeistMono.variable} font-sans antialiased`}>
        {children}
      </body>
    </html>
  )
}
```

---

> **APPENDIX** — Full token reference. Do not use these primitives directly in components; reference §2 Semantic Tokens instead.

---

## A1. Primitive Colors — tw/colors (244)

### slate

| /50 | /100 | /200 | /300 | /400 | /500 | /600 | /700 | /800 | /900 | /950 |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `#F8FAFC` | `#F1F5F9` | `#E2E8F0` | `#CBD5E1` | `#94A3B8` | `#64748B` | `#475569` | `#334155` | `#1E293B` | `#0F172A` | `#020617` |

### gray

| /50 | /100 | /200 | /300 | /400 | /500 | /600 | /700 | /800 | /900 | /950 |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `#F9FAFB` | `#F3F4F6` | `#E5E7EB` | `#D1D5DB` | `#9CA3AF` | `#6B7280` | `#4B5563` | `#374151` | `#1F2937` | `#111827` | `#030712` |

### zinc

| /50 | /100 | /200 | /300 | /400 | /500 | /600 | /700 | /800 | /900 | /950 |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `#FAFAFA` | `#F4F4F5` | `#E4E4E7` | `#D4D4D8` | `#A1A1AA` | `#71717A` | `#52525B` | `#3F3F46` | `#27272A` | `#18181B` | `#09090B` |

### neutral

| /50 | /100 | /200 | /300 | /400 | /500 | /600 | /700 | /800 | /900 | /950 |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `#FAFAFA` | `#F5F5F5` | `#E5E5E5` | `#D4D4D4` | `#A3A3A3` | `#737373` | `#525252` | `#404040` | `#262626` | `#171717` | `#0A0A0A` |

### stone

| /50 | /100 | /200 | /300 | /400 | /500 | /600 | /700 | /800 | /900 | /950 |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `#FAFAF9` | `#F5F5F4` | `#E7E5E4` | `#D6D3D1` | `#A8A29E` | `#78716C` | `#57534E` | `#44403C` | `#292524` | `#1C1917` | `#0C0A09` |

### red

| /50 | /100 | /200 | /300 | /400 | /500 | /600 | /700 | /800 | /900 | /950 |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `#FEF2F2` | `#FEE2E2` | `#FECACA` | `#FCA5A5` | `#F87171` | `#EF4444` | `#DC2626` | `#B91C1C` | `#991B1B` | `#7F1D1D` | `#450A0A` |

### orange

| /50 | /100 | /200 | /300 | /400 | /500 | /600 | /700 | /800 | /900 | /950 |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `#FFF7ED` | `#FFEDD5` | `#FED7AA` | `#FDBA74` | `#FB923C` | `#F97316` | `#EA580C` | `#C2410C` | `#9A3412` | `#7C2D12` | `#450A0A` |

### amber

| /50 | /100 | /200 | /300 | /400 | /500 | /600 | /700 | /800 | /900 | /950 |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `#FFFBEB` | `#FEF3C7` | `#FDE68A` | `#FCD34D` | `#FBBF24` | `#F59E0B` | `#D97706` | `#B45309` | `#92400E` | `#78350F` | `#451A03` |

### yellow

| /50 | /100 | /200 | /300 | /400 | /500 | /600 | /700 | /800 | /900 | /950 |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `#FEFCE8` | `#FEF9C3` | `#FEF08A` | `#FDE047` | `#FACC15` | `#EAB308` | `#CA8A04` | `#A16207` | `#92400E` | `#78350F` | `#422006` |

### lime

| /50 | /100 | /200 | /300 | /400 | /500 | /600 | /700 | /800 | /900 | /950 |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `#F7FEE7` | `#ECFCCB` | `#D9F99D` | `#BEF264` | `#A3E635` | `#84CC16` | `#65A30D` | `#4D7C0F` | `#3F6212` | `#365314` | `#1A2E05` |

### green

| /50 | /100 | /200 | /300 | /400 | /500 | /600 | /700 | /800 | /900 | /950 |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `#F0FDF4` | `#DCFCE7` | `#BBF7D0` | `#86EFAC` | `#4ADE80` | `#22C55E` | `#16A34A` | `#15803D` | `#166534` | `#14532D` | `#052E16` |

### emerald

| /50 | /100 | /200 | /300 | /400 | /500 | /600 | /700 | /800 | /900 | /950 |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `#ECFDF5` | `#D1FAE5` | `#A7F3D0` | `#6EE7B7` | `#34D399` | `#10B981` | `#10B981` | `#047857` | `#065F46` | `#064E3B` | `#022C22` |

### teal

| /50 | /100 | /200 | /300 | /400 | /500 | /600 | /700 | /800 | /900 | /950 |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `#F0FDFA` | `#CCFBF1` | `#99F6E4` | `#5EEAD4` | `#2DD4BF` | `#14B8A6` | `#0D9488` | `#0F766E` | `#115E59` | `#134E4A` | `#042F2E` |

### cyan

| /50 | /100 | /200 | /300 | /400 | /500 | /600 | /700 | /800 | /900 | /950 |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `#ECFEFF` | `#CFFAFE` | `#A5F3FC` | `#67E8F9` | `#22D3EE` | `#06B6D4` | `#0891B2` | `#0E7490` | `#155E75` | `#164E63` | `#083344` |

### sky

| /50 | /100 | /200 | /300 | /400 | /500 | /600 | /700 | /800 | /900 | /950 |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `#F0F9FF` | `#E0F2FE` | `#BAE6FD` | `#7DD3FC` | `#38BDF8` | `#0EA5E9` | `#0284C7` | `#0369A1` | `#075985` | `#0C4A6E` | `#082F49` |

### blue

| /50 | /100 | /200 | /300 | /400 | /500 | /600 | /700 | /800 | /900 | /950 |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `#EFF6FF` | `#DBEAFE` | `#BFDBFE` | `#93C5FD` | `#60A5FA` | `#3B82F6` | `#2563EB` | `#1D4ED8` | `#1E40AF` | `#1E3A8A` | `#172554` |

### indigo

| /50 | /100 | /200 | /300 | /400 | /500 | /600 | /700 | /800 | /900 | /950 |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `#EEF2FF` | `#E0E7FF` | `#C7D2FE` | `#A5B4FC` | `#818CF8` | `#6366F1` | `#4F46E5` | `#4338CA` | `#3730A3` | `#312E81` | `#1E1B4B` |

### violet

| /50 | /100 | /200 | /300 | /400 | /500 | /600 | /700 | /800 | /900 | /950 |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `#F5F3FF` | `#EDE9FE` | `#DDD6FE` | `#C4B5FD` | `#A78BFA` | `#8B5CF6` | `#7C3AED` | `#6D28D9` | `#5B21B6` | `#4C1D95` | `#2E1065` |

### purple

| /50 | /100 | /200 | /300 | /400 | /500 | /600 | /700 | /800 | /900 | /950 |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `#FAF5FF` | `#F3E8FF` | `#E9D5FF` | `#D8B4FE` | `#C084FC` | `#A855F7` | `#9333EA` | `#7E22CE` | `#6B21A8` | `#581C87` | `#3B0764` |

### fuchsia

| /50 | /100 | /200 | /300 | /400 | /500 | /600 | /700 | /800 | /900 | /950 |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `#FDF4FF` | `#FAE8FF` | `#F5D0FE` | `#F0ABFC` | `#E879F9` | `#D946EF` | `#C026D3` | `#A21CAF` | `#86198F` | `#701A75` | `#4A044E` |

### pink

| /50 | /100 | /200 | /300 | /400 | /500 | /600 | /700 | /800 | /900 | /950 |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `#FDF2F8` | `#FCE7F3` | `#FBCFE8` | `#F9A8D4` | `#F472B6` | `#EC4899` | `#DB2777` | `#BE185D` | `#9D174D` | `#831843` | `#500724` |

### rose

| /50 | /100 | /200 | /300 | /400 | /500 | /600 | /700 | /800 | /900 | /950 |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `#FFF1F2` | `#FFE4E6` | `#FECDD3` | `#FDA4AF` | `#FB7185` | `#F43F5E` | `#E11D48` | `#BE123C` | `#9F1239` | `#881337` | `#4C0519` |

### white

| Token | Hex |
|-------|-----|
| `white` | `#FFFFFF` |

### black

| Token | Hex |
|-------|-----|
| `black` | `#000000` |

---

---

## A2. Primitive Colors — rdx/colors (396)

### rdx/gray

| /1 | /2 | /3 | /4 | /5 | /6 | /7 | /8 | /9 | /10 | /11 | /12 |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `#FCFCFC` | `#F9F9F9` | `#F0F0F0` | `#E8E8E8` | `#E0E0E0` | `#D9D9D9` | `#CECECE` | `#BBBBBB` | `#8D8D8D` | `#838383` | `#646464` | `#202020` |

### rdx/mauve

| /1 | /2 | /3 | /4 | /5 | /6 | /7 | /8 | /9 | /10 | /11 | /12 |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `#FDFCFD` | `#FAF9FB` | `#F2EFF3` | `#EAE7EC` | `#E3DFE6` | `#DBD8E0` | `#D0CDD7` | `#BCBAC7` | `#8E8C99` | `#84828E` | `#65636D` | `#211F26` |

### rdx/slate

| /1 | /2 | /3 | /4 | /5 | /6 | /7 | /8 | /9 | /10 | /11 | /12 |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `#FCFCFD` | `#F9F9FB` | `#F0F0F3` | `#E8E8EC` | `#E0E1E6` | `#D9D9E0` | `#CDCED6` | `#B9BBC6` | `#8B8D98` | `#80838D` | `#60646C` | `#1C2024` |

### rdx/sage

| /1 | /2 | /3 | /4 | /5 | /6 | /7 | /8 | /9 | /10 | /11 | /12 |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `#FBFDFC` | `#F7F9F8` | `#EEEEFF` | `#E6E9E8` | `#DFE2E0` | `#D7DAD9` | `#CBCFCD` | `#B8BCBA` | `#868E8B` | `#7C8481` | `#5F6563` | `#1A211E` |

### rdx/olive

| /1 | /2 | /3 | /4 | /5 | /6 | /7 | /8 | /9 | /10 | /11 | /12 |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `#FCFDFC` | `#F8FAF8` | `#EFF1EF` | `#E7E9E7` | `#DFE2DF` | `#D7DAD7` | `#CCCFCC` | `#B9BCB8` | `#898E87` | `#7F847D` | `#60655F` | `#1D211C` |

### rdx/sand

| /1 | /2 | /3 | /4 | /5 | /6 | /7 | /8 | /9 | /10 | /11 | /12 |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `#FDFDFC` | `#F9F9F8` | `#F1F0EF` | `#E9E8E6` | `#E2E1DE` | `#DAD9D6` | `#CFCECA` | `#BCBBB5` | `#8D8D86` | `#82827C` | `#63635E` | `#FFFFFF` |

### rdx/tomato

| /1 | /2 | /3 | /4 | /5 | /6 | /7 | /8 | /9 | /10 | /11 | /12 |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `#FFFCFC` | `#FFF8F7` | `#FEEBE7` | `#FFDCD3` | `#FFCDC2` | `#FDBDAF` | `#F5A898` | `#EC8E7B` | `#E54D2E` | `#DD4425` | `#D13415` | `#5C271F` |

### rdx/red

| /1 | /2 | /3 | /4 | /5 | /6 | /7 | /8 | /9 | /10 | /11 | /12 |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `#FFFCFC` | `#FFF7F7` | `#FEEBEC` | `#FFDBDC` | `#FFCDCE` | `#FDBDBE` | `#F4A9AA` | `#EB8E90` | `#E5484D` | `#DC3E42` | `#CE2C31` | `#641723` |

### rdx/ruby

| /1 | /2 | /3 | /4 | /5 | /6 | /7 | /8 | /9 | /10 | /11 | /12 |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `#FFFCFD` | `#FFF7F8` | `#FEEAED` | `#FFDCE1` | `#FFCED6` | `#F8BFC8` | `#EFACB8` | `#E592A3` | `#E54666` | `#DC3B5D` | `#CA244D` | `#64172B` |

### rdx/crimson

| /1 | /2 | /3 | /4 | /5 | /6 | /7 | /8 | /9 | /10 | /11 | /12 |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `#FFFCFD` | `#FEF7F9` | `#FFE9F0` | `#FEDCE7` | `#FACEDD` | `#F3BED1` | `#EAACC3` | `#E093B2` | `#E93D82` | `#DF3478` | `#CB1D63` | `#621639` |

### rdx/pink

| /1 | /2 | /3 | /4 | /5 | /6 | /7 | /8 | /9 | /10 | /11 | /12 |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `#FFFCFE` | `#FEF7FB` | `#FEE9F5` | `#FBDCEF` | `#F6CEE7` | `#EFBFDD` | `#E7ACD0` | `#DD93C2` | `#D6409F` | `#CF3897` | `#C2298A` | `#651249` |

### rdx/plum

| /1 | /2 | /3 | /4 | /5 | /6 | /7 | /8 | /9 | /10 | /11 | /12 |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `#FEFCFF` | `#FDF7FD` | `#FBEBFB` | `#F7DEF8` | `#F2D1F3` | `#E9C2EC` | `#DEADE3` | `#CF91D8` | `#AB4ABA` | `#A144AF` | `#953EA3` | `#53195D` |

### rdx/purple

| /1 | /2 | /3 | /4 | /5 | /6 | /7 | /8 | /9 | /10 | /11 | /12 |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `#FEFCFE` | `#FBF7FE` | `#F7EDFE` | `#F2E2FC` | `#EAD5F9` | `#E0C4F4` | `#D1AFEC` | `#BE93E4` | `#8E4EC6` | `#8347B9` | `#8145B5` | `#402060` |

### rdx/violet

| /1 | /2 | /3 | /4 | /5 | /6 | /7 | /8 | /9 | /10 | /11 | /12 |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `#FDFCFE` | `#FAF8FF` | `#F4F0FE` | `#EBE4FF` | `#E1D9FF` | `#D4CAFE` | `#C2B5F5` | `#AA99EC` | `#6E56CF` | `#654DC4` | `#6550B9` | `#2F265F` |

### rdx/iris

| /1 | /2 | /3 | /4 | /5 | /6 | /7 | /8 | /9 | /10 | /11 | /12 |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `#FDFDFF` | `#F8F8FF` | `#F0F1FE` | `#E6E7FF` | `#DADCFF` | `#CBCDFF` | `#B8BAF8` | `#9B9EF0` | `#5B5BD6` | `#5151CD` | `#5753C6` | `#272962` |

### rdx/indigo

| /1 | /2 | /3 | /4 | /5 | /6 | /7 | /8 | /9 | /10 | /11 | /12 |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `#FDFDFE` | `#F7F9FF` | `#EDF2FE` | `#E1E9FF` | `#D2DEFF` | `#C1D0FF` | `#ABBDF9` | `#8DA4EF` | `#3E63DD` | `#3358D4` | `#3A5BC7` | `#1F2D5C` |

### rdx/blue

| /1 | /2 | /3 | /4 | /5 | /6 | /7 | /8 | /9 | /10 | /11 | /12 |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `#FBFDFF` | `#F4FAFF` | `#E6F4FE` | `#D5EFFF` | `#C2E5FF` | `#ACD8FC` | `#8EC8F6` | `#5EB1EF` | `#0090FF` | `#0588F0` | `#0D74CE` | `#113264` |

### rdx/cyan

| /1 | /2 | /3 | /4 | /5 | /6 | /7 | /8 | /9 | /10 | /11 | /12 |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `#FAFDFE` | `#F2FAFB` | `#DEF7F9` | `#CAF1F6` | `#B5E9F0` | `#9DDDE7` | `#7DCEDC` | `#3DB9CF` | `#00A2C7` | `#0797B9` | `#107D98` | `#0D3C48` |

### rdx/teal

| /1 | /2 | /3 | /4 | /5 | /6 | /7 | /8 | /9 | /10 | /11 | /12 |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `#FAFEFD` | `#F3FBF9` | `#E0F8F3` | `#CCF3EA` | `#B8EAE0` | `#A1DED2` | `#83CDC1` | `#53B9AB` | `#12A594` | `#0D9B8A` | `#008573` | `#0D3D38` |

### rdx/jade

| /1 | /2 | /3 | /4 | /5 | /6 | /7 | /8 | /9 | /10 | /11 | /12 |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `#FBFEFD` | `#F4FBF7` | `#E6F7ED` | `#D6F1E3` | `#C3E9D7` | `#ACDEC8` | `#8BCEB6` | `#56BA9F` | `#29A383` | `#26997B` | `#208368` | `#1D3B31` |

### rdx/green

| /1 | /2 | /3 | /4 | /5 | /6 | /7 | /8 | /9 | /10 | /11 | /12 |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `#FBFEFC` | `#F4FBF6` | `#E6F6EB` | `#D6F1DF` | `#C4E8D1` | `#ADDDC0` | `#8ECEAA` | `#5BB98B` | `#30A46C` | `#2B9A66` | `#218358` | `#193B2D` |

### rdx/grass

| /1 | /2 | /3 | /4 | /5 | /6 | /7 | /8 | /9 | /10 | /11 | /12 |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `#FBFEFB` | `#F5FBF5` | `#E9F6E9` | `#DAF1DB` | `#C9E8CA` | `#B2DDB5` | `#94CE9A` | `#65BA74` | `#46A758` | `#3E9B4F` | `#2A7E3B` | `#203C25` |

### rdx/bronze

| /1 | /2 | /3 | /4 | /5 | /6 | /7 | /8 | /9 | /10 | /11 | /12 |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `#FDFCFC` | `#FDF7F5` | `#F6EDEA` | `#EFE4DF` | `#E7D9D3` | `#DFCDC5` | `#D3BCB3` | `#C2A499` | `#A18072` | `#957468` | `#7D5E54` | `#FFFFFF` |

### rdx/gold

| /1 | /2 | /3 | /4 | /5 | /6 | /7 | /8 | /9 | /10 | /11 | /12 |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `#FDFDFC` | `#FAF9F2` | `#F2F0E7` | `#EAE6DB` | `#E1DCCF` | `#D8D0BF` | `#CBC0AA` | `#B9A88D` | `#978365` | `#8C7A5E` | `#71624B` | `#FFFFFF` |

### rdx/brown

| /1 | /2 | /3 | /4 | /5 | /6 | /7 | /8 | /9 | /10 | /11 | /12 |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `#FEFDFC` | `#FCF9F6` | `#F6EEE7` | `#F0E4D9` | `#EBDACA` | `#E4CDB7` | `#DCBC9F` | `#CEA37E` | `#AD7F58` | `#A07553` | `#815E46` | `#FFFFFF` |

### rdx/orange

| /1 | /2 | /3 | /4 | /5 | /6 | /7 | /8 | /9 | /10 | /11 | /12 |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `#FEFCFB` | `#FFF7ED` | `#FFEFD6` | `#FFDFB5` | `#FFD19A` | `#FFC182` | `#F5AE73` | `#EC9455` | `#F76B15` | `#EF5F00` | `#CC4E00` | `#582D1D` |

### rdx/amber

| /1 | /2 | /3 | /4 | /5 | /6 | /7 | /8 | /9 | /10 | /11 | /12 |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `#FEFDFB` | `#FEFBE9` | `#FFF7C2` | `#FFEE9C` | `#FBE577` | `#F3D673` | `#E9C162` | `#E2A336` | `#FFC53D` | `#FFBA18` | `#AB6400` | `#4F3422` |

### rdx/yellow

| /1 | /2 | /3 | /4 | /5 | /6 | /7 | /8 | /9 | /10 | /11 | /12 |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `#FDFDF9` | `#FEFCE9` | `#FFFAB8` | `#FFF394` | `#FFE770` | `#F3D768` | `#E4C767` | `#D5AE39` | `#FFE629` | `#FFDC00` | `#9E6C00` | `#473B1F` |

### rdx/lime

| /1 | /2 | /3 | /4 | /5 | /6 | /7 | /8 | /9 | /10 | /11 | /12 |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `#FCFDFA` | `#F8FAF3` | `#EEF6D6` | `#E2F0BD` | `#D3E7A6` | `#C2DA91` | `#ABC978` | `#8DB654` | `#BDEE63` | `#B0E64C` | `#5C7C2F` | `#37401C` |

### rdx/mint

| /1 | /2 | /3 | /4 | /5 | /6 | /7 | /8 | /9 | /10 | /11 | /12 |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `#F9FEFD` | `#F2FBF9` | `#DDF9F2` | `#C8F4E9` | `#B3ECDE` | `#9CE0D0` | `#7ECFBD` | `#4CBBA5` | `#86EAD4` | `#7DE0CB` | `#027864` | `#16433C` |

### rdx/sky

| /1 | /2 | /3 | /4 | /5 | /6 | /7 | /8 | /9 | /10 | /11 | /12 |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `#F9FEFF` | `#F1FAFD` | `#E1F6FD` | `#D1F0FA` | `#BEE7F5` | `#A9DAED` | `#8DCAE3` | `#60B3D7` | `#7CE2FE` | `#74DAF8` | `#00749E` | `#1D3E56` |

### rdx/black

| /1 | /2 | /3 | /4 | /5 | /6 | /7 | /8 | /9 | /10 | /11 | /12 |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `#0000000D` | `#0000001A` | `#00000026` | `#00000033` | `#0000004D` | `#00000066` | `#00000080` | `#00000099` | `#000000B2` | `#000000CC` | `#000000E5` | `#000000F2` |

### rdx/white

| /1 | /2 | /3 | /4 | /5 | /6 | /7 | /8 | /9 | /10 | /11 | /12 |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `#FFFFFF0D` | `#FFFFFF1A` | `#FFFFFF26` | `#FFFFFF33` | `#FFFFFF4D` | `#FFFFFF66` | `#FFFFFF80` | `#FFFFFF99` | `#FFFFFFB2` | `#FFFFFFCC` | `#FFFFFFE5` | `#FFFFFFF2` |

---

---

## A3. Typography — Weight, Style, Line Height

#### Font Weight

| Token | Value |
|-------|-------|
| `weight/thin` | `100` |
| `weight/extralight` | `200` |
| `weight/light` | `300` |
| `weight/normal` | `400` |
| `weight/medium` | `500` |
| `weight/semibold` | `600` |
| `weight/bold` | `700` |
| `weight/extrabold` | `800` |
| `weight/black` | `900` |

#### Font Style

| Token | Value |
|-------|-------|
| `style/italic` | `italic` |
| `style/not-italic` | `normal` |

#### Line Height (leading)

| Token | px |
|-------|----|
| `leading/3` | `12px` |
| `leading/4` | `16px` |
| `leading/5` | `20px` |
| `leading/6` | `24px` |
| `leading/7` | `28px` |
| `leading/8` | `32px` |
| `leading/9` | `36px` |
| `leading/10` | `40px` |
| `leading/12` | `48px` |
| `leading/15` | `60px` |
| `leading/16` | `72px` |
| `leading/24` | `96px` |
| `leading/32` | `128px` |
---

## A4. Base Unit Tokens — token (88)

Base units referenced by other tokens (alias chain: spacing → token → pixel value)

| Token | px | Token | px | Token | px | Token | px |
|-------|----|-------|----|-------|----|-------|----|
| `-8` | `-8px` | `-0,8` | `-0.8px` | `-0,4` | `-0.4px` | `0` | `0px` |
| `0,4` | `0.4px` | `0,5` | `0.5px` | `0,75` | `0.75px` | `0,8` | `0.8px` |
| `1` | `1px` | `1,25` | `1.25px` | `1,5` | `1.5px` | `1,6` | `1.6px` |
| `1,75` | `1.75px` | `2` | `2px` | `2,25` | `2.25px` | `2,5` | `2.5px` |
| `2,75` | `2.75px` | `3` | `3px` | `4` | `4px` | `5` | `5px` |
| `6` | `6px` | `8` | `8px` | `10` | `10px` | `12` | `12px` |
| `14` | `14px` | `15` | `15px` | `16` | `16px` | `18` | `18px` |
| `20` | `20px` | `24` | `24px` | `25` | `25px` | `28` | `28px` |
| `30` | `30px` | `32` | `32px` | `35` | `35px` | `36` | `36px` |
| `40` | `40px` | `44` | `44px` | `45` | `45px` | `48` | `48px` |
| `50` | `50px` | `55` | `55px` | `56` | `56px` | `60` | `60px` |
| `64` | `64px` | `65` | `65px` | `70` | `70px` | `72` | `72px` |
| `75` | `75px` | `80` | `80px` | `85` | `85px` | `90` | `90px` |
| `95` | `95px` | `96` | `96px` | `100` | `100px` | `112` | `112px` |
| `128` | `128px` | `144` | `144px` | `160` | `160px` | `176` | `176px` |
| `192` | `192px` | `200` | `200px` | `208` | `208px` | `224` | `224px` |
| `240` | `240px` | `256` | `256px` | `288` | `288px` | `300` | `300px` |
| `320` | `320px` | `384` | `384px` | `400` | `400px` | `448` | `448px` |
| `500` | `500px` | `512` | `512px` | `576` | `576px` | `600` | `600px` |
| `640` | `640px` | `672` | `672px` | `700` | `700px` | `768` | `768px` |
| `800` | `800px` | `896` | `896px` | `900` | `900px` | `1024` | `1024px` |
| `1152` | `1152px` | `1280` | `1280px` | `1536` | `1536px` | `9999` | `9999px` |

---

---

## A5. Padding (245)

| Token | px | Token | px | Token | px |
|-------|----|-------|----|-------|----|
| `p-0` | `0px` | `px-0` | `0px` | `py-0` | `0px` |
| `pr-0` | `0px` | `pl-0` | `0px` | `pt-0` | `0px` |
| `pb-0` | `0px` | `p-px` | `1px` | `px-px` | `1px` |
| `py-px` | `1px` | `pt-px` | `1px` | `pr-px` | `1px` |
| `pl-px` | `1px` | `pb-px` | `1px` | `p-0,5` | `2px` |
| `px-0,5` | `2px` | `py-0,5` | `2px` | `pt-0,5` | `2px` |
| `pr-0,5` | `2px` | `pl-0,5` | `2px` | `pb-0,5` | `2px` |
| `p-1` | `4px` | `px-1` | `4px` | `py-1` | `4px` |
| `pt-1` | `4px` | `pr-1` | `4px` | `pl-1` | `4px` |
| `pb-1` | `4px` | `p-1,5` | `6px` | `px-1,5` | `6px` |
| `py-1,5` | `6px` | `pt-1,5` | `6px` | `pr-1,5` | `6px` |
| `pl-1,5` | `6px` | `pb-1,5` | `6px` | `p-2` | `8px` |
| `px-2` | `8px` | `py-2` | `8px` | `pt-2` | `8px` |
| `pr-2` | `8px` | `pl-2` | `8px` | `pb-2` | `8px` |
| `p-2,5` | `10px` | `px-2,5` | `10px` | `py-2,5` | `10px` |
| `pt-2,5` | `10px` | `pr-2,5` | `10px` | `pl-2,5` | `10px` |
| `pb-2,5` | `10px` | `p-3` | `12px` | `px-3` | `12px` |
| `py-3` | `12px` | `pt-3` | `12px` | `pr-3` | `12px` |
| `pl-3` | `12px` | `pb-3` | `12px` | `p-3,5` | `14px` |
| `px-3,5` | `14px` | `py-3,5` | `14px` | `pt-3,5` | `14px` |
| `pr-3,5` | `14px` | `pl-3,5` | `14px` | `pb-3,5` | `14px` |
| `p-4` | `16px` | `px-4` | `16px` | `py-4` | `16px` |
| `pt-4` | `16px` | `pr-4` | `16px` | `pl-4` | `16px` |
| `pb-4` | `16px` | `p-5` | `20px` | `px-5` | `20px` |
| `py-5` | `20px` | `pt-5` | `20px` | `pr-5` | `20px` |
| `pl-5` | `20px` | `pb-5` | `20px` | `p-6` | `24px` |
| `px-6` | `24px` | `py-6` | `24px` | `pt-6` | `24px` |
| `pr-6` | `24px` | `pl-6` | `24px` | `pb-6` | `24px` |
| `p-7` | `28px` | `px-7` | `28px` | `py-7` | `28px` |
| `pt-7` | `28px` | `pr-7` | `28px` | `pl-7` | `28px` |
| `pb-7` | `28px` | `p-8` | `32px` | `px-8` | `32px` |
| `py-8` | `32px` | `pt-8` | `32px` | `pr-8` | `32px` |
| `pl-8` | `32px` | `pb-8` | `32px` | `p-9` | `36px` |
| `px-9` | `36px` | `py-9` | `36px` | `pt-9` | `36px` |
| `pr-9` | `36px` | `pl-9` | `36px` | `pb-9` | `36px` |
| `p-10` | `40px` | `px-10` | `40px` | `py-10` | `40px` |
| `pt-10` | `40px` | `pr-10` | `40px` | `pl-10` | `40px` |
| `pb-10` | `40px` | `p-11` | `44px` | `px-11` | `44px` |
| `py-11` | `44px` | `pt-11` | `44px` | `pr-11` | `44px` |
| `pl-11` | `44px` | `pb-11` | `44px` | `p-12` | `48px` |
| `px-12` | `48px` | `py-12` | `48px` | `pt-12` | `48px` |
| `pr-12` | `48px` | `pl-12` | `48px` | `pb-12` | `48px` |
| `p-14` | `56px` | `px-14` | `56px` | `py-14` | `56px` |
| `pt-14` | `56px` | `pr-14` | `56px` | `pl-14` | `56px` |
| `pb-14` | `56px` | `p-16` | `64px` | `px-16` | `64px` |
| `py-16` | `64px` | `pt-16` | `64px` | `pr-16` | `64px` |
| `pl-16` | `64px` | `pb-16` | `64px` | `p-20` | `80px` |
| `px-20` | `80px` | `py-20` | `80px` | `pt-20` | `80px` |
| `pr-20` | `80px` | `pl-20` | `80px` | `pb-20` | `80px` |
| `p-24` | `96px` | `px-24` | `96px` | `py-24` | `96px` |
| `pt-24` | `96px` | `pr-24` | `96px` | `pl-24` | `96px` |
| `pb-24` | `96px` | `p-28` | `112px` | `px-28` | `112px` |
| `py-28` | `112px` | `pt-28` | `112px` | `pr-28` | `112px` |
| `pl-28` | `112px` | `pb-28` | `112px` | `p-32` | `128px` |
| `px-32` | `128px` | `py-32` | `128px` | `pt-32` | `128px` |
| `pr-32` | `128px` | `pl-32` | `128px` | `pb-32` | `128px` |
| `p-36` | `144px` | `px-36` | `144px` | `py-36` | `144px` |
| `pt-36` | `144px` | `pr-36` | `144px` | `pl-36` | `144px` |
| `pb-36` | `144px` | `p-40` | `160px` | `px-40` | `160px` |
| `py-40` | `160px` | `pt-40` | `160px` | `pr-40` | `160px` |
| `pl-40` | `160px` | `pb-40` | `160px` | `p-44` | `176px` |
| `px-44` | `176px` | `py-44` | `176px` | `pt-44` | `176px` |
| `pr-44` | `176px` | `pl-44` | `176px` | `pb-44` | `176px` |
| `p-48` | `192px` | `px-48` | `192px` | `py-48` | `192px` |
| `pt-48` | `192px` | `pr-48` | `192px` | `pl-48` | `192px` |
| `pb-48` | `192px` | `p-52` | `208px` | `px-52` | `208px` |
| `py-52` | `208px` | `pt-52` | `208px` | `pr-52` | `208px` |
| `pl-52` | `208px` | `pb-52` | `208px` | `p-56` | `224px` |
| `px-56` | `224px` | `py-56` | `224px` | `pt-56` | `224px` |
| `pr-56` | `224px` | `pl-56` | `224px` | `pb-56` | `224px` |
| `p-60` | `240px` | `px-60` | `240px` | `py-60` | `240px` |
| `pt-60` | `240px` | `pr-60` | `240px` | `pl-60` | `240px` |
| `pb-60` | `240px` | `p-64` | `256px` | `px-64` | `256px` |
| `py-64` | `256px` | `pt-64` | `256px` | `pr-64` | `256px` |
| `pl-64` | `256px` | `pb-64` | `256px` | `p-72` | `288px` |
| `px-72` | `288px` | `py-72` | `288px` | `pt-72` | `288px` |
| `pr-72` | `288px` | `pl-72` | `288px` | `pb-72` | `288px` |
| `p-80` | `320px` | `px-80` | `320px` | `py-80` | `320px` |
| `pt-80` | `320px` | `pr-80` | `320px` | `pl-80` | `320px` |
| `pb-80` | `320px` | `p-96` | `384px` | `px-96` | `384px` |
| `py-96` | `384px` | `pt-96` | `384px` | `pr-96` | `384px` |
| `pl-96` | `384px` | `pb-96` | `384px` | | |

---

---


## A6. Margin (245)

| Token | px | Token | px | Token | px |
|-------|----|-------|----|-------|----|
| `m-0` | `0px` | `mx-0` | `0px` | `my-0` | `0px` |
| `mr-0` | `0px` | `ml-0` | `0px` | `mt-0` | `0px` |
| `mb-0` | `0px` | `m-px` | `1px` | `mx-px` | `1px` |
| `my-px` | `1px` | `mr-px` | `1px` | `ml-px` | `1px` |
| `mt-px` | `1px` | `mb-px` | `1px` | `m-0,5` | `2px` |
| `mx-0,5` | `2px` | `my-0,5` | `2px` | `mr-0,5` | `2px` |
| `ml-0,5` | `2px` | `mt-0,5` | `2px` | `mb-0,5` | `2px` |
| `m-1` | `4px` | `mx-1` | `4px` | `my-1` | `4px` |
| `mr-1` | `4px` | `ml-1` | `4px` | `mt-1` | `4px` |
| `mb-1` | `4px` | `m-1,5` | `6px` | `mx-1,5` | `6px` |
| `my-1,5` | `6px` | `mr-1,5` | `6px` | `ml-1,5` | `6px` |
| `mt-1,5` | `6px` | `mb-1,5` | `6px` | `m-2` | `8px` |
| `mx-2` | `8px` | `my-2` | `8px` | `mr-2` | `8px` |
| `ml-2` | `8px` | `mt-2` | `8px` | `mb-2` | `8px` |
| `m-2,5` | `10px` | `mx-2,5` | `10px` | `my-2,5` | `10px` |
| `mr-2,5` | `10px` | `ml-2,5` | `10px` | `mt-2,5` | `10px` |
| `mb-2,5` | `10px` | `m-3` | `12px` | `mx-3` | `12px` |
| `my-3` | `12px` | `mr-3` | `12px` | `ml-3` | `12px` |
| `mt-3` | `12px` | `mb-3` | `12px` | `m-3,5` | `14px` |
| `mx-3,5` | `14px` | `my-3,5` | `14px` | `mr-3,5` | `14px` |
| `ml-3,5` | `14px` | `mt-3,5` | `14px` | `mb-3,5` | `14px` |
| `m-4` | `16px` | `mx-4` | `16px` | `my-4` | `16px` |
| `mr-4` | `16px` | `ml-4` | `16px` | `mt-4` | `16px` |
| `mb-4` | `16px` | `m-5` | `20px` | `mx-5` | `20px` |
| `my-5` | `20px` | `mr-5` | `20px` | `ml-5` | `20px` |
| `mt-5` | `20px` | `mb-5` | `20px` | `m-6` | `24px` |
| `mx-6` | `24px` | `my-6` | `24px` | `mr-6` | `24px` |
| `ml-6` | `24px` | `mt-6` | `24px` | `mb-6` | `24px` |
| `m-7` | `28px` | `mx-7` | `28px` | `my-7` | `28px` |
| `mr-7` | `28px` | `ml-7` | `28px` | `mt-7` | `28px` |
| `mb-7` | `28px` | `m-8` | `32px` | `mx-8` | `32px` |
| `my-8` | `32px` | `mr-8` | `32px` | `ml-8` | `32px` |
| `mt-8` | `32px` | `mb-8` | `32px` | `m-9` | `36px` |
| `mx-9` | `36px` | `my-9` | `36px` | `mr-9` | `36px` |
| `ml-9` | `36px` | `mt-9` | `36px` | `mb-9` | `36px` |
| `m-10` | `40px` | `mx-10` | `40px` | `my-10` | `40px` |
| `mr-10` | `40px` | `ml-10` | `40px` | `mt-10` | `40px` |
| `mb-10` | `40px` | `m-11` | `44px` | `mx-11` | `44px` |
| `my-11` | `44px` | `mr-11` | `44px` | `ml-11` | `44px` |
| `mt-11` | `44px` | `mb-11` | `44px` | `m-12` | `48px` |
| `mx-12` | `48px` | `my-12` | `48px` | `mr-12` | `48px` |
| `ml-12` | `48px` | `mt-12` | `48px` | `mb-12` | `48px` |
| `m-14` | `56px` | `mx-14` | `56px` | `my-14` | `56px` |
| `mr-14` | `56px` | `ml-14` | `56px` | `mt-14` | `56px` |
| `mb-14` | `56px` | `m-16` | `64px` | `mx-16` | `64px` |
| `my-16` | `64px` | `mr-16` | `64px` | `ml-16` | `64px` |
| `mt-16` | `64px` | `mb-16` | `64px` | `m-20` | `80px` |
| `mx-20` | `80px` | `my-20` | `80px` | `mr-20` | `80px` |
| `ml-20` | `80px` | `mt-20` | `80px` | `mb-20` | `80px` |
| `m-24` | `96px` | `mx-24` | `96px` | `my-24` | `96px` |
| `mr-24` | `96px` | `ml-24` | `96px` | `mt-24` | `96px` |
| `mb-24` | `96px` | `m-28` | `112px` | `mx-28` | `112px` |
| `my-28` | `112px` | `mr-28` | `112px` | `ml-28` | `112px` |
| `mt-28` | `112px` | `mb-28` | `112px` | `m-32` | `128px` |
| `mx-32` | `128px` | `my-32` | `128px` | `mr-32` | `128px` |
| `ml-32` | `128px` | `mt-32` | `128px` | `mb-32` | `128px` |
| `m-36` | `144px` | `mx-36` | `144px` | `my-36` | `144px` |
| `mr-36` | `144px` | `ml-36` | `144px` | `mt-36` | `144px` |
| `mb-36` | `144px` | `m-40` | `160px` | `mx-40` | `160px` |
| `my-40` | `160px` | `mr-40` | `160px` | `ml-40` | `160px` |
| `mt-40` | `160px` | `mb-40` | `160px` | `m-44` | `176px` |
| `mx-44` | `176px` | `my-44` | `176px` | `mr-44` | `176px` |
| `ml-44` | `176px` | `mt-44` | `176px` | `mb-44` | `176px` |
| `m-48` | `192px` | `mx-48` | `192px` | `my-48` | `192px` |
| `mr-48` | `192px` | `ml-48` | `192px` | `mt-48` | `192px` |
| `mb-48` | `192px` | `m-52` | `208px` | `mx-52` | `208px` |
| `my-52` | `208px` | `mr-52` | `208px` | `ml-52` | `208px` |
| `mt-52` | `208px` | `mb-52` | `208px` | `m-56` | `224px` |
| `mx-56` | `224px` | `my-56` | `224px` | `mr-56` | `224px` |
| `ml-56` | `224px` | `mt-56` | `224px` | `mb-56` | `224px` |
| `m-60` | `240px` | `mx-60` | `240px` | `my-60` | `240px` |
| `mr-60` | `240px` | `ml-60` | `240px` | `mt-60` | `240px` |
| `mb-60` | `240px` | `m-64` | `256px` | `mx-64` | `256px` |
| `my-64` | `256px` | `mr-64` | `256px` | `ml-64` | `256px` |
| `mt-64` | `256px` | `mb-64` | `256px` | `m-72` | `288px` |
| `mx-72` | `288px` | `my-72` | `288px` | `mr-72` | `288px` |
| `ml-72` | `288px` | `mt-72` | `288px` | `mb-72` | `288px` |
| `m-80` | `320px` | `mx-80` | `320px` | `my-80` | `320px` |
| `mr-80` | `320px` | `ml-80` | `320px` | `mt-80` | `320px` |
| `mb-80` | `320px` | `m-96` | `384px` | `mx-96` | `384px` |
| `my-96` | `384px` | `mr-96` | `384px` | `ml-96` | `384px` |
| `mt-96` | `384px` | `mb-96` | `384px` | | |

---

---

## A7. Gap (102)

| Token | px | Token | px | Token | px |
|-------|----|-------|----|-------|----|
| `gap-0` | `0px` | `gap-x-0` | `0px` | `gap-y-0` | `0px` |
| `gap-0,5` | `2px` | `gap-x-0,5` | `2px` | `gap-y-0,5` | `2px` |
| `gap-1` | `4px` | `gap-x-1` | `4px` | `gap-y-1` | `4px` |
| `gap-1,5` | `6px` | `gap-x-1,5` | `6px` | `gap-y-1,5` | `6px` |
| `gap-2` | `8px` | `gap-x-2` | `8px` | `gap-y-2` | `8px` |
| `gap-2,5` | `10px` | `gap-x-2,5` | `10px` | `gap-y-2,5` | `10px` |
| `gap-3` | `12px` | `gap-x-3` | `12px` | `gap-y-3` | `12px` |
| `gap-3,5` | `14px` | `gap-x-3,5` | `14px` | `gap-y-3,5` | `14px` |
| `gap-4` | `16px` | `gap-x-4` | `16px` | `gap-y-4` | `16px` |
| `gap-5` | `20px` | `gap-x-5` | `20px` | `gap-y-5` | `20px` |
| `gap-6` | `24px` | `gap-x-6` | `24px` | `gap-y-6` | `24px` |
| `gap-7` | `28px` | `gap-x-7` | `28px` | `gap-y-7` | `28px` |
| `gap-8` | `32px` | `gap-x-8` | `32px` | `gap-y-8` | `32px` |
| `gap-9` | `36px` | `gap-x-9` | `36px` | `gap-y-9` | `36px` |
| `gap-10` | `40px` | `gap-x-10` | `40px` | `gap-y-10` | `40px` |
| `gap-11` | `44px` | `gap-x-11` | `44px` | `gap-y-11` | `44px` |
| `gap-12` | `48px` | `gap-x-12` | `48px` | `gap-y-12` | `48px` |
| `gap-14` | `56px` | `gap-x-14` | `56px` | `gap-y-14` | `56px` |
| `gap-16` | `56px` | `gap-x-16` | `56px` | `gap-y-16` | `56px` |
| `gap-20` | `80px` | `gap-x-20` | `80px` | `gap-y-20` | `80px` |
| `gap-24` | `96px` | `gap-x-24` | `96px` | `gap-y-24` | `96px` |
| `gap-28` | `112px` | `gap-x-28` | `112px` | `gap-y-28` | `112px` |
| `gap-32` | `128px` | `gap-x-32` | `128px` | `gap-y-32` | `128px` |
| `gap-36` | `144px` | `gap-x-36` | `144px` | `gap-y-36` | `144px` |
| `gap-40` | `160px` | `gap-x-40` | `160px` | `gap-y-40` | `160px` |
| `gap-44` | `176px` | `gap-x-44` | `176px` | `gap-y-44` | `176px` |
| `gap-48` | `192px` | `gap-x-48` | `192px` | `gap-y-48` | `192px` |
| `gap-52` | `208px` | `gap-x-52` | `208px` | `gap-y-52` | `208px` |
| `gap-56` | `224px` | `gap-x-56` | `224px` | `gap-y-56` | `224px` |
| `gap-60` | `240px` | `gap-x-60` | `240px` | `gap-y-60` | `240px` |
| `gap-64` | `256px` | `gap-x-64` | `256px` | `gap-y-64` | `256px` |
| `gap-72` | `288px` | `gap-x-72` | `288px` | `gap-y-72` | `288px` |
| `gap-80` | `320px` | `gap-x-80` | `320px` | `gap-y-80` | `320px` |
| `gap-96` | `384px` | `gap-x-96` | `384px` | `gap-y-96` | `384px` |

---

---

## A8. Space (68)

| Token | px | Token | px | Token | px |
|-------|----|-------|----|-------|----|
| `space-x-0` | `0px` | `space-y-0` | `0px` | `space-x-0,5` | `2px` |
| `space-y-0,5` | `2px` | `space-x-1` | `4px` | `space-y-1` | `4px` |
| `space-x-1,5` | `6px` | `space-y-1,5` | `6px` | `space-x-2` | `8px` |
| `space-y-2` | `8px` | `space-x-2,5` | `10px` | `space-y-2,5` | `10px` |
| `space-x-3` | `12px` | `space-y-3` | `12px` | `space-x-3,5` | `14px` |
| `space-y-3,5` | `14px` | `space-x-4` | `16px` | `space-y-4` | `16px` |
| `space-x-5` | `20px` | `space-y-5` | `20px` | `space-x-6` | `24px` |
| `space-y-6` | `24px` | `space-x-7` | `28px` | `space-y-7` | `28px` |
| `space-x-8` | `32px` | `space-y-8` | `32px` | `space-x-9` | `36px` |
| `space-y-9` | `36px` | `space-x-10` | `40px` | `space-y-10` | `40px` |
| `space-x-11` | `44px` | `space-y-11` | `44px` | `space-x-12` | `48px` |
| `space-y-12` | `48px` | `space-x-14` | `56px` | `space-y-14` | `56px` |
| `space-x-16` | `64px` | `space-y-16` | `64px` | `space-x-20` | `80px` |
| `space-y-20` | `80px` | `space-x-24` | `96px` | `space-y-24` | `96px` |
| `space-x-28` | `112px` | `space-y-28` | `112px` | `space-x-32` | `128px` |
| `space-y-32` | `128px` | `space-x-36` | `144px` | `space-y-36` | `144px` |
| `space-x-40` | `160px` | `space-y-40` | `160px` | `space-x-44` | `176px` |
| `space-y-44` | `176px` | `space-x-48` | `192px` | `space-y-48` | `192px` |
| `space-x-52` | `208px` | `space-y-52` | `208px` | `space-x-56` | `224px` |
| `space-y-56` | `224px` | `space-x-60` | `240px` | `space-y-60` | `240px` |
| `space-x-64` | `256px` | `space-y-64` | `256px` | `space-x-72` | `288px` |
| `space-y-72` | `288px` | `space-x-80` | `320px` | `space-y-80` | `320px` |
| `space-x-96` | `384px` | `space-y-96` | `384px` | | |

---

---

## A9. Sizing — Height / Max-Height / Max-Width

### 11a. Height (24)

| Token | px | Token | px | Token | px | Token | px |
|-------|----|-------|----|-------|----|-------|----|
| `h-0` | `0px` | `h-px` | `1px` | `h-0,5` | `2px` | `h-1` | `4px` |
| `h-2` | `8px` | `h-2,5` | `10px` | `h-3` | `12px` | `h-3,5` | `14px` |
| `h-4` | `16px` | `h-5` | `20px` | `h-6` | `24px` | `h-7` | `28px` |
| `h-8` | `32px` | `h-9` | `36px` | `h-10` | `40px` | `h-12` | `48px` |
| `h-14` | `56px` | `h-16` | `64px` | `h-18` | `72px` | `h-20` | `80px` |
| `h-24` | `96px` | `h-48` | `192px` | `h-72` | `288px` | `h-96` | `384px` |

### 11b. Max-Height (35)

| Token | px | Token | px | Token | px | Token | px |
|-------|----|-------|----|-------|----|-------|----|
| `max-h-0` | `0px` | `max-h-px` | `1px` | `max-h-0,5` | `2px` | `max-h-1` | `4px` |
| `max-h-1,5` | `6px` | `max-h-2` | `8px` | `max-h-2,5` | `10px` | `max-h-3` | `12px` |
| `max-h-3,5` | `14px` | `max-h-4` | `16px` | `max-h-5` | `20px` | `max-h-6` | `24px` |
| `max-h-7` | `28px` | `max-h-8` | `32px` | `max-h-9` | `36px` | `max-h-10` | `40px` |
| `max-h-11` | `44px` | `max-h-12` | `48px` | `max-h-14` | `56px` | `max-h-16` | `64px` |
| `max-h-20` | `80px` | `max-h-24` | `96px` | `max-h-28` | `112px` | `max-h-32` | `128px` |
| `max-h-36` | `144px` | `max-h-40` | `160px` | `max-h-44` | `176px` | `max-h-48` | `192px` |
| `max-h-52` | `208px` | `max-h-56` | `224px` | `max-h-60` | `240px` | `max-h-64` | `256px` |
| `max-h-72` | `288px` | `max-h-80` | `320px` | `max-h-96` | `384px` | | |

### 11c. Max-Width (51)

| Token | px | Token | px | Token | px |
|-------|----|-------|----|-------|----|
| `max-w-0` | `0px` | `max-w-px` | `1px` | `max-w-0,5` | `2px` |
| `max-w-1` | `4px` | `max-w-1,5` | `6px` | `max-w-2` | `8px` |
| `max-w-2,5` | `10px` | `max-w-3` | `12px` | `max-w-4` | `16px` |
| `max-w-5` | `20px` | `max-w-6` | `24px` | `max-w-7` | `28px` |
| `max-w-8` | `32px` | `max-w-9` | `36px` | `max-w-10` | `40px` |
| `max-w-11` | `44px` | `max-w-12` | `48px` | `max-w-14` | `56px` |
| `max-w-16` | `64px` | `max-w-20` | `80px` | `max-w-24` | `96px` |
| `max-w-28` | `112px` | `max-w-32` | `128px` | `max-w-36` | `144px` |
| `max-w-40` | `160px` | `max-w-44` | `176px` | `max-w-48` | `192px` |
| `max-w-52` | `208px` | `max-w-56` | `224px` | `max-w-60` | `240px` |
| `max-w-64` | `256px` | `max-w-72` | `288px` | `max-w-80` | `320px` |
| `max-w-96` | `384px` | `max-w-xs` | `320px` | `max-w-sm` | `384px` |
| `max-w-md` | `448px` | `max-w-lg` | `512px` | `max-w-xl` | `576px` |
| `max-w-2xl` | `672px` | `max-w-3xl` | `768px` | `max-w-4xl` | `896px` |
| `max-w-5xl` | `1024px` | `max-w-6xl` | `1152px` | `max-w-7xl` | `1280px` |
| `max-w-none` | `0px` | `max-w-screen-sm` | `640px` | `max-w-screen-md` | `768px` |
| `max-w-screen-lg` | `1024px` | `max-w-screen-xl` | `1280px` | `max-w-screen-2xl` | `1536px` |

---

---

## A10. Border Radius Full Table (150)

Base scale: `xs`=2px · `sm`=4px · `md`=6px · `lg`=8px · `xl`=12px · `2xl`=16px · `3xl`=24px · `4xl`=32px · `none`=0px · `full`=9999px

| Direction | xs | sm | md | lg | xl | 2xl | 3xl | 4xl | none | full |
|-----------|----|----|----|----|----|----|-----|-----|------|------|
| `rounded` | `2px` | `4px` | `6px` | `8px` | `12px` | `16px` | `24px` | `32px` | `0px` | `9999px` |
| `rounded-s` | `2px` | `4px` | `6px` | `8px` | `12px` | `16px` | `24px` | `32px` | `0px` | `9999px` |
| `rounded-e` | `2px` | `4px` | `6px` | `8px` | `12px` | `16px` | `24px` | `32px` | `0px` | `9999px` |
| `rounded-t` | `2px` | `4px` | `6px` | `8px` | `12px` | `16px` | `24px` | `32px` | `0px` | `9999px` |
| `rounded-r` | `2px` | `4px` | `6px` | `8px` | `12px` | `16px` | `24px` | `32px` | `0px` | `9999px` |
| `rounded-b` | `2px` | `4px` | `6px` | `8px` | `12px` | `16px` | `24px` | `32px` | `0px` | `9999px` |
| `rounded-l` | — | — | — | — | — | — | — | — | — | — |
| `rounded-ss` | `2px` | `4px` | `6px` | `8px` | `12px` | `16px` | `24px` | `32px` | `0px` | `9999px` |
| `rounded-se` | `2px` | `4px` | `6px` | `8px` | `12px` | `16px` | `24px` | `32px` | `0px` | `9999px` |
| `rounded-ee` | `2px` | `4px` | `6px` | `8px` | `12px` | `16px` | `24px` | `32px` | `0px` | `9999px` |
| `rounded-es` | `2px` | `4px` | `6px` | `8px` | `12px` | `16px` | `24px` | `32px` | `0px` | `9999px` |
| `rounded-tl` | `2px` | `4px` | `6px` | `8px` | `12px` | `16px` | `24px` | `32px` | `0px` | `9999px` |
| `rounded-tr` | `2px` | `4px` | `6px` | `8px` | `12px` | `16px` | `24px` | `32px` | `0px` | `9999px` |
| `rounded-br` | `2px` | `4px` | `6px` | `8px` | `12px` | `16px` | `24px` | `32px` | `0px` | `9999px` |
| `rounded-bl` | `2px` | `4px` | `6px` | `8px` | `12px` | `16px` | `24px` | `32px` | `0px` | `9999px` |
| `rounded-1` | `2px` | `4px` | `6px` | `8px` | `12px` | `16px` | `24px` | `32px` | `0px` | `9999px` |

---

---

## A11. Border Width (45)

| Direction | -0 (0px) | (1px) | -2 (2px) | -4 (4px) | -8 (8px) |
|-----------|----------|-------|----------|----------|----------|
| `border` | `0px` | `1px` | `2px` | `4px` | `8px` |
| `border-x` | `0px` | `1px` | `2px` | `4px` | `8px` |
| `border-y` | `0px` | `1px` | `2px` | `4px` | `8px` |
| `border-s` | `0px` | `1px` | `2px` | `4px` | `8px` |
| `border-e` | `0px` | `1px` | `2px` | `4px` | `8px` |
| `border-t` | `0px` | `1px` | `2px` | `4px` | `8px` |
| `border-r` | `0px` | `1px` | `2px` | `4px` | `8px` |
| `border-b` | `0px` | `1px` | `2px` | `4px` | `8px` |
| `border-l` | `0px` | `1px` | `2px` | `4px` | `8px` |

---

---

## A12. Stroke Width (11)

| Token | px | Token | px | Token | px |
|-------|----|-------|----|-------|----|
| `stroke-0,5` | `0.5px` | `stroke-0,75` | `0.75px` | `stroke-1` | `1px` |
| `stroke-1,25` | `1.25px` | `stroke-1,5` | `1.5px` | `stroke-1,75` | `1.75px` |
| `stroke-2` | `2px` | `stroke-2,25` | `2.25px` | `stroke-2,5` | `2.5px` |
| `stroke-2,75` | `2.75px` | `stroke-3` | `3px` | | |

---

---

## A13. Opacity (21)

| Token | Value | Token | Value | Token | Value | Token | Value |
|-------|-------|-------|-------|-------|-------|-------|-------|
| `0` | `0%` | `5` | `5%` | `10` | `10%` | `15` | `15%` |
| `20` | `20%` | `25` | `25%` | `30` | `30%` | `35` | `35%` |
| `40` | `40%` | `45` | `45%` | `50` | `50%` | `55` | `55%` |
| `60` | `60%` | `65` | `65%` | `70` | `70%` | `75` | `75%` |
| `80` | `80%` | `85` | `85%` | `90` | `90%` | `95` | `95%` |
| `100` | `100%` | | | | | | |

---

---


<!-- Total variables documented: 1807 / 1,807 -->
