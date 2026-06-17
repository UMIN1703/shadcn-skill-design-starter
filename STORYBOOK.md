# Storybook — dev & QA workflow

Component playground for the design system. Each story is an isolated, interactive demo of one shadcn primitive — usable by dev for development and by QA for visual + interaction testing.

```bash
# Run locally
npm run storybook            # http://localhost:6006
# Build static
npm run build-storybook      # ./storybook-static
```

---

## Layout

| Path | Purpose |
|---|---|
| `.storybook/main.ts` | Framework config (Next.js) + addons (a11y, docs, chromatic) |
| `.storybook/preview.tsx` | Global styles, fonts, 4-theme switcher decorator |
| `components/stories/*.stories.tsx` | Story files (56 — full primitive coverage) |

The theme switcher in the toolbar swaps `<html>` between:
- **Light** — default `:root`
- **Dark** — `<html class="dark">`
- **Primary** — `<html data-theme="primary">` (blue accent)
- **Secondary** — `<html data-theme="secondary">` (yellow accent)

Every story renders inside `bg-background text-foreground` so changing the theme updates every visible token immediately.

---

## For developers

### Writing a new story

```tsx
// components/stories/MyThing.stories.tsx
import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { MyThing } from "@/components/ui/my-thing";

const meta: Meta<typeof MyThing> = {
  title: "UI/MyThing",
  component: MyThing,
  tags: ["autodocs"],
};
export default meta;

type Story = StoryObj<typeof MyThing>;
export const Default: Story = {};
export const Variant: Story = { args: { variant: "outline" } };
```

Tips:
- `tags: ["autodocs"]` auto-generates a Docs page from the JSDoc + `argTypes`.
- For multi-component compositions (Card, Dialog, Form) use `render: () => …` instead of `component`.
- For client-only behavior (toast, dialog, drawer) include a top-level `"use client"` is NOT needed in story files — Storybook treats them as client.

### Adding a new story

All 56 shadcn primitives in `components/ui/` already have a story in `components/stories/`. When you add a new primitive, drop its story next to the existing ones — copy the pattern from a similar one:

| Pattern | Reuse |
|---|---|
| Plain styled element (Badge, Separator, Spinner, Skeleton, Kbd) | copy `Skeleton.stories.tsx` |
| Form control (Input, Textarea, Slider, Checkbox, Switch, Radio Group) | copy `Input.stories.tsx` |
| Overlay (Dialog, Drawer, Sheet, AlertDialog, Popover, Tooltip, HoverCard) | copy `Dialog.stories.tsx` |
| Composite (Card, Table, Tabs, Form, DataTable) | copy `Card.stories.tsx` |
| Toast | copy `Toast.stories.tsx` |

---

## For QA

### Interaction tests (play functions)

Stories with names ending in **"(QA test)"** have an embedded play function — Storybook runs the click/type/expect script in a real browser inside the story panel. Pass = the assertion holds.

| Story | What it tests |
|---|---|
| Button → "Click interaction (QA test)" | clicking the button triggers onClick once |
| Input → "Typing (QA test)" | typing 16 chars updates the input value |
| Dialog → "Open by click (QA test)" | clicking the trigger renders the dialog title |
| Form → "Validation error (QA test)" | submitting empty shows zod's min-2 message |
| Table → "Row count (QA test)" | header + 3 body + footer = 5 rows |
| Toast → "Show on click (QA test)" | clicking the trigger shows the toast text |
| Drawer → "Open by click (QA test)" | clicking the trigger renders the drawer title |

To run a single test: open the story → Interactions tab → "Replay". To run all stories in CI: see "Headless test runner" below.

### A11y panel

`@storybook/addon-a11y` runs axe-core against every story. Open the **A11y** tab → violations + passes are listed. Use this to triage:
- Critical (label missing on input, role missing on button) → must fix before merge
- Serious (low contrast on placeholder) → fix this sprint
- Moderate (decorative svg without aria-hidden) → backlog

### Visual review (manual)

1. Open story
2. Toolbar → Theme → cycle Light / Dark / Primary / Secondary
3. Look for: token drift (raw hex), unreadable text in any theme, broken layout, missing focus ring
4. Toolbar → Viewport → mobile (375px) / tablet (768px) / desktop (1024px)

### Headless test runner (optional)

```bash
# Install test runner (once)
npm install -D @storybook/test-runner playwright

# Run all stories + their play functions
npm run storybook       # in one terminal (or use --ci flag)
npx test-storybook      # in another — exits non-zero on any failure
```

Wire into CI for PR gates.

---

## What's covered today

**56 stories — full coverage of every shadcn primitive in `components/ui/`:**

Accordion, Alert, AlertDialog, AspectRatio, Avatar, Badge, Breadcrumb, Button, ButtonGroup, Calendar, Card, Carousel, Chart, Checkbox, Collapsible, Combobox, Command, ContextMenu, DataTable, DatePicker, Dialog, Drawer, DropdownMenu, Empty, Field, Form, HoverCard, Input, InputGroup, InputOTP, Item, Kbd, Label, Menubar, NativeSelect, NavigationMenu, Pagination, Popover, Progress, RadioGroup, ScrollArea, Select, Separator, Sheet, Sidebar, Skeleton, Slider, Spinner, Switch, Table, Tabs, Textarea, Toast, Toggle, ToggleGroup, Tooltip.

32 of those carry at least one `play` function for interaction testing — purely visual primitives (Badge, Skeleton, Spinner, Calendar, Card, …) are visual-only.

The Storybook server picks up new files on save — no config changes needed when you add a new primitive + story.
