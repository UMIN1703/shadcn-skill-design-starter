---
name: shadcn-ui-design
description: Use when building UI components, pages, forms, dialogs, layouts, or anything visual in a project using shadcn/ui + Tailwind CSS v4 + Next.js App Router. Provides component patterns, design tokens, color/typography/spacing rules, accessibility requirements, and Next.js conventions (Server Components, Server Actions, loading.tsx, error.tsx, metadata API). Token reference lives in references/DESIGN.md and references/variables-export.json.
---

# shadcn/ui + Tailwind + Next.js Design Skill

> Guide for building UI components and pages correctly and consistently.
> Full design token reference: **`references/DESIGN.md`** (1,807 tokens) and **`references/variables-export.json`** (source).

---

## Role & Scope

When given a UI task, assume:
- Stack is **React + TypeScript + shadcn/ui + Tailwind CSS v4 + Next.js App Router**
- Component path is `@/components/ui/...`
- Every color comes from a CSS token — never use raw hex or `text-gray-500` directly
- The system supports **4 themes** through the same tokens: Light mode · Dark mode · Primary (blue) · Secondary (yellow)
- Theme switching is done by toggling a class/attribute on the root element — no special classes needed per component

---

## 1. Next.js App Router

### File Conventions

| File | Purpose |
|------|---------|
| `app/layout.tsx` | Root layout — wraps every page (fonts, providers, global nav) |
| `app/page.tsx` | Home route `/` |
| `app/[route]/page.tsx` | Segment page |
| `app/[route]/layout.tsx` | Nested layout for that segment |
| `app/[route]/loading.tsx` | Suspense boundary shown while the page stream loads |
| `app/[route]/error.tsx` | Error boundary — must be `"use client"` |
| `app/[route]/not-found.tsx` | 404 for that segment |
| `app/api/[route]/route.ts` | API route handler |

### Server vs. Client Components

| Rule | Notes |
|------|-------|
| Default: Server Component | No bundle cost, can `await` directly |
| Add `"use client"` only when | Using hooks, browser APIs, event handlers, or interactivity |
| Never mark a layout Server Component as client | Layouts are shared; lifting to client negates streaming |
| Pass serialisable props only across the boundary | No functions, class instances, or Promises as props |

### Data Fetching

```tsx
// Server Component — fetch directly, no useEffect
export default async function ProductsPage() {
  const products = await getProducts()   // Server-side, cached by Next.js
  return <ProductList items={products} />
}

// Parallel fetches — avoid waterfall
const [user, posts] = await Promise.all([getUser(id), getPosts(id)])
```

### Server Actions

```tsx
// app/actions.ts
"use server"
import { revalidatePath } from "next/cache"

export async function createItem(formData: FormData) {
  const name = formData.get("name") as string
  await db.item.create({ data: { name } })
  revalidatePath("/items")
}

// Usage in a Server Component form (no JS required)
import { createItem } from "@/app/actions"

export default function NewItemForm() {
  return (
    <form action={createItem} className="space-y-4">
      <Input name="name" placeholder="Item name" required />
      <Button type="submit">Create</Button>
    </form>
  )
}
```

### next/image

```tsx
import Image from "next/image"

// Always provide width + height or fill + a sized parent
<Image
  src="/hero.jpg"
  alt="Hero image"
  width={1200}
  height={630}
  priority        // above-the-fold images only
  className="rounded-lg object-cover"
/>
```

### loading.tsx / error.tsx

```tsx
// app/dashboard/loading.tsx — automatic Suspense wrapper
import { Skeleton } from "@/components/ui/skeleton"
export default function Loading() {
  return (
    <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8 space-y-4">
      <Skeleton className="h-10 w-1/3" />
      <Skeleton className="h-4 w-2/3" />
      <Skeleton className="h-64 w-full" />
    </div>
  )
}

// app/dashboard/error.tsx — must be "use client"
"use client"
import { Button } from "@/components/ui/button"
export default function Error({ error, reset }: { error: Error; reset: () => void }) {
  return (
    <div className="flex flex-col items-center justify-center min-h-[40vh] gap-4">
      <p className="text-muted-foreground">{error.message}</p>
      <Button onClick={reset}>Try again</Button>
    </div>
  )
}
```

### Metadata API

```tsx
// Static metadata
import type { Metadata } from "next"
export const metadata: Metadata = {
  title: "Dashboard",
  description: "View your metrics and activity.",
}

// Dynamic metadata
export async function generateMetadata({ params }: { params: { id: string } }): Promise<Metadata> {
  const item = await getItem(params.id)
  return { title: item.name }
}
```

---

## 2. Component Selection

### Decision Tree

```
Displaying data?
  ├── Row-based list → Table or DataTable
  ├── Card-based list → Card grid
  └── Numbers / metrics → Card + typography

Accepting input?
  ├── Text → Input / Textarea
  ├── Select from options → Select / RadioGroup / Combobox
  ├── boolean → Switch / Checkbox
  ├── Date → DatePicker
  └── Multiple fields → Form (react-hook-form + zod)

Need an overlay?
  ├── Confirm destructive action → AlertDialog
  ├── Medium-sized form/content → Dialog
  ├── Panel from edge → Sheet
  └── Short hint → Tooltip / HoverCard

Need feedback?
  ├── inline → Alert
  ├── toast → Sonner
  └── loading → Skeleton / Progress
```

---

## 3. Standard Patterns

### Page Layout (Server Component)

```tsx
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Page Title",
  description: "Page description.",
}

export default async function PageName() {
  return (
    <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8 space-y-8">
      <div className="space-y-2">
        <h1 className="text-4xl font-extrabold tracking-tight text-balance">
          Page Title
        </h1>
        <p className="text-xl text-muted-foreground">
          Page description
        </p>
      </div>
      {/* content */}
    </div>
  )
}
```

### Card

```tsx
import {
  Card, CardHeader, CardTitle, CardDescription,
  CardAction, CardContent, CardFooter
} from "@/components/ui/card"

<Card>
  <CardHeader>
    <CardTitle>Title</CardTitle>
    <CardDescription>Helper text</CardDescription>
    <CardAction>
      <Button variant="ghost" size="icon-sm"><MoreHorizontal /></Button>
    </CardAction>
  </CardHeader>
  <CardContent>
    {/* main body */}
  </CardContent>
  <CardFooter className="justify-between">
    <span className="text-sm text-muted-foreground">Footer info</span>
    <Button size="sm">Action</Button>
  </CardFooter>
</Card>
```

### Button

```tsx
import { Button } from "@/components/ui/button"

// Variants
<Button>Default</Button>
<Button variant="outline">Outline</Button>
<Button variant="secondary">Secondary</Button>
<Button variant="ghost">Ghost</Button>
<Button variant="destructive">Delete</Button>
<Button variant="link">Link</Button>

// Sizes
<Button size="lg">Large</Button>
<Button size="sm">Small</Button>
<Button size="icon"><Plus /></Button>

// With icon
<Button>
  <Plus /> Add Item
</Button>

// Loading state
<Button disabled>
  <Loader2 className="animate-spin" /> Saving...
</Button>
```

### Form (react-hook-form + zod)

```tsx
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { z } from "zod"
import {
  Form, FormControl, FormDescription,
  FormField, FormItem, FormLabel, FormMessage
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"

const schema = z.object({
  email: z.string().email("Invalid email"),
  name:  z.string().min(2, "At least 2 characters"),
})

type FormValues = z.infer<typeof schema>

export function ExampleForm() {
  const form = useForm<FormValues>({
    resolver: zodResolver(schema),
    defaultValues: { email: "", name: "" },
  })

  function onSubmit(values: FormValues) {
    // handle submit
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Email</FormLabel>
              <FormControl>
                <Input placeholder="you@example.com" {...field} />
              </FormControl>
              <FormDescription>We'll never share your email.</FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit">Submit</Button>
      </form>
    </Form>
  )
}
```

### Server Action Form

```tsx
// app/[route]/actions.ts
"use server"
import { revalidatePath } from "next/cache"
import { redirect } from "next/navigation"

export async function submitForm(formData: FormData) {
  const name = formData.get("name") as string
  // validate + save
  await db.record.create({ data: { name } })
  revalidatePath("/records")
  redirect("/records")
}

// app/[route]/page.tsx — no "use client" needed
import { submitForm } from "./actions"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Label } from "@/components/ui/label"

export default function NewRecordPage() {
  return (
    <form action={submitForm} className="space-y-6 max-w-md">
      <div className="space-y-2">
        <Label htmlFor="name">Name</Label>
        <Input id="name" name="name" required />
      </div>
      <Button type="submit">Save</Button>
    </form>
  )
}
```


### Dialog

```tsx
import {
  Dialog, DialogTrigger, DialogContent,
  DialogHeader, DialogTitle, DialogDescription, DialogFooter
} from "@/components/ui/dialog"

<Dialog>
  <DialogTrigger asChild>
    <Button variant="outline">Open</Button>
  </DialogTrigger>
  <DialogContent className="sm:max-w-md">
    <DialogHeader>
      <DialogTitle>Dialog Title</DialogTitle>
      <DialogDescription>Supporting description text.</DialogDescription>
    </DialogHeader>
    {/* body content */}
    <DialogFooter>
      <Button type="submit">Confirm</Button>
    </DialogFooter>
  </DialogContent>
</Dialog>
```

### AlertDialog (Destructive Confirmation)

```tsx
import {
  AlertDialog, AlertDialogTrigger, AlertDialogContent,
  AlertDialogHeader, AlertDialogTitle, AlertDialogDescription,
  AlertDialogFooter, AlertDialogCancel, AlertDialogAction
} from "@/components/ui/alert-dialog"

<AlertDialog>
  <AlertDialogTrigger asChild>
    <Button variant="destructive">Delete</Button>
  </AlertDialogTrigger>
  <AlertDialogContent>
    <AlertDialogHeader>
      <AlertDialogTitle>Are you sure?</AlertDialogTitle>
      <AlertDialogDescription>
        This action cannot be undone.
      </AlertDialogDescription>
    </AlertDialogHeader>
    <AlertDialogFooter>
      <AlertDialogCancel>Cancel</AlertDialogCancel>
      <AlertDialogAction onClick={handleDelete}>Delete</AlertDialogAction>
    </AlertDialogFooter>
  </AlertDialogContent>
</AlertDialog>
```

### Table

```tsx
import {
  Table, TableHeader, TableBody, TableFooter,
  TableHead, TableRow, TableCell, TableCaption
} from "@/components/ui/table"

<Table>
  <TableCaption>List of recent invoices.</TableCaption>
  <TableHeader>
    <TableRow>
      <TableHead>Invoice</TableHead>
      <TableHead>Status</TableHead>
      <TableHead className="text-right">Amount</TableHead>
    </TableRow>
  </TableHeader>
  <TableBody>
    {items.map((item) => (
      <TableRow key={item.id}>
        <TableCell className="font-medium">{item.invoice}</TableCell>
        <TableCell>{item.status}</TableCell>
        <TableCell className="text-right">{item.amount}</TableCell>
      </TableRow>
    ))}
  </TableBody>
</Table>
```

### Alert (Inline Feedback)

```tsx
import { Alert, AlertTitle, AlertDescription } from "@/components/ui/alert"
import { AlertCircle, CheckCircle2 } from "lucide-react"

// Error
<Alert variant="destructive">
  <AlertCircle className="h-4 w-4" />
  <AlertTitle>Error</AlertTitle>
  <AlertDescription>Something went wrong.</AlertDescription>
</Alert>

// Success (default variant + custom color)
<Alert className="border-green-500/50 text-green-700 dark:text-green-400">
  <CheckCircle2 className="h-4 w-4" />
  <AlertTitle>Success</AlertTitle>
  <AlertDescription>Changes saved.</AlertDescription>
</Alert>
```

### Toast (Sonner)

```tsx
import { toast } from "sonner"

// Usage examples
toast("Event created")
toast.success("Saved successfully")
toast.error("Something went wrong")
toast.warning("Check your input")
toast.loading("Saving...")
toast.promise(saveData(), {
  loading: "Saving...",
  success: "Saved!",
  error: "Failed to save",
})
```

### Skeleton (Loading State)

```tsx
import { Skeleton } from "@/components/ui/skeleton"

// Card skeleton
<Card>
  <CardHeader className="space-y-2">
    <Skeleton className="h-5 w-1/2" />
    <Skeleton className="h-4 w-3/4" />
  </CardHeader>
  <CardContent className="space-y-3">
    <Skeleton className="h-4 w-full" />
    <Skeleton className="h-4 w-full" />
    <Skeleton className="h-4 w-2/3" />
  </CardContent>
</Card>
```

### Badge

```tsx
import { Badge } from "@/components/ui/badge"

<Badge>Default</Badge>
<Badge variant="secondary">Secondary</Badge>
<Badge variant="outline">Outline</Badge>
<Badge variant="destructive">Error</Badge>
```

---

## 4. Color Rules

| ✅ Do | ❌ Don't |
|----|--------|
| `text-foreground` | `text-gray-900` |
| `text-muted-foreground` | `text-gray-500` |
| `bg-background` | `bg-white` |
| `bg-card` | `bg-slate-50` |
| `border-border` | `border-gray-200` |
| `bg-primary text-primary-foreground` | `bg-blue-600 text-white` |
| `bg-destructive` | `bg-red-500` |
| `bg-sidebar text-sidebar-foreground` | `bg-gray-50 text-gray-900` |
| `bg-sidebar-primary text-sidebar-primary-foreground` | `bg-black text-white` |
| `bg-sidebar-accent text-sidebar-accent-foreground` | `bg-gray-100 text-gray-800` |
| `border-sidebar-border` | `border-gray-300` |
| `bg-sementic-background text-sementic-foreground` | (hardcoded brown/warm bg) |

> **Exception — Success/Warning states**: shadcn/ui has no semantic token for success/warning. tw/colors primitives may be used as a special case, e.g. `border-green-500/50 text-green-700 dark:text-green-400` or `text-yellow-600 dark:text-yellow-400` — a dark variant is always required

---

## 5. Typography Rules

### Font Families (from token)
| Token | Font | Usage |
|-------|------|-------|
| `font/family/sans` | Inter | Default sans-serif |
| `font/family/mono` | Geist Mono | Code, monospace |
| `fontUse/San Serif` | IBM Plex Sans Thai | Thai sans-serif body text |
| `fontUse/Serif` | SF Thonburi | Thai serif / display |

### Type Scale (Tailwind class → font token)
| Style | Classes | `font/size` token |
|-------|---------|------------------|
| H1 | `text-4xl font-extrabold tracking-tight` | `size/4xl` (36px) |
| H2 | `text-3xl font-semibold tracking-tight` | `size/3xl` (30px) |
| H3 | `text-2xl font-semibold tracking-tight` | `size/2xl` (24px) |
| H4 | `text-xl font-semibold` | `size/xl` (20px) |
| Lead | `text-xl text-muted-foreground` | `size/xl` (20px) |
| Body | `text-base leading-7` | `size/base` (16px) |
| Small | `text-sm font-medium` | `size/sm` (14px) |
| Muted | `text-sm text-muted-foreground` | `size/sm` (14px) |
| Code | `text-sm font-mono bg-muted rounded px-[0.3rem]` | `size/sm` (14px) |

---

## 6. Spacing Rules

- Use `space-y-*` or `gap-*` for spacing between elements — never use `mb-*` on the last item
- Form fields: `space-y-6` (24px)
- Card sections: `space-y-4` (16px)
- Inline elements: `gap-2` (8px)
- Page sections: `space-y-8` (32px) or `space-y-12` (48px)
- Every spacing value must be within the token scale defined in references/DESIGN.md Appendix A5–A8

---

## 7. Composition Rules

- Use the `asChild` prop when another component should act as the trigger:
  ```tsx
  <DialogTrigger asChild><Button>Open</Button></DialogTrigger>
  ```
- Never nest interactive elements (e.g., `<button>` inside `<button>`)
- Icons inside a Button do not need their own `aria-label` — put it on the Button instead:
  ```tsx
  <Button size="icon" aria-label="Add item"><Plus /></Button>
  ```

---

## 8. TypeScript Pattern

```tsx
// Component props — extend HTML element when it is a leaf component
interface CardStatProps extends React.HTMLAttributes<HTMLDivElement> {
  label: string
  value: string | number
  trend?: "up" | "down" | "neutral"
}

// Variant type from cva or component
import type { ButtonProps } from "@/components/ui/button"
type ButtonVariant = ButtonProps["variant"]
```

---

## 9. File Naming Convention

| Type | Pattern | Example |
|--------|---------|---------|
| Root layout | `app/layout.tsx` | `app/layout.tsx` |
| Page | `app/[route]/page.tsx` | `app/dashboard/page.tsx` |
| Layout | `app/[route]/layout.tsx` | `app/dashboard/layout.tsx` |
| Loading UI | `app/[route]/loading.tsx` | `app/dashboard/loading.tsx` |
| Error boundary | `app/[route]/error.tsx` | `app/dashboard/error.tsx` |
| Not found | `app/[route]/not-found.tsx` | `app/dashboard/not-found.tsx` |
| API route | `app/api/[route]/route.ts` | `app/api/items/route.ts` |
| Server Actions | `app/[route]/actions.ts` | `app/dashboard/actions.ts` |
| UI component (shadcn) | `components/ui/[name].tsx` | `components/ui/button.tsx` |
| Custom component | `components/[feature]/[name].tsx` | `components/dashboard/stats-card.tsx` |
| Hook | `hooks/use-[name].ts` | `hooks/use-debounce.ts` |
| Util | `lib/[name].ts` | `lib/format.ts` |
| Type | `types/[name].ts` | `types/api.ts` |

---

## 10. Pre-Delivery Checklist

- [ ] Every color uses a semantic token — no raw hex, `text-gray-*`, or `bg-white`
- [ ] All 4 themes (Light/Dark/Primary/Secondary) render correctly
- [ ] Every form field has an associated `<Label>`
- [ ] Every interactive element is keyboard-accessible
- [ ] Loading / empty / error states covered for every async operation
- [ ] Every destructive action has a confirmation (AlertDialog)
- [ ] Responsive from `sm:` breakpoint upward
- [ ] Every spacing value is within the token scale (references/DESIGN.md Appendix A5–A8)
- [ ] No hardcoded strings — displayed text is stored in variables or i18n keys
- [ ] Success/Warning states using primitive colors always have a dark variant
- [ ] Pages are Server Components by default — `"use client"` only where needed
- [ ] Async data fetching uses `await` directly in Server Components (no useEffect for data)
- [ ] Parallel data fetches use `Promise.all()` to avoid waterfalls
- [ ] Every route segment has a `loading.tsx` for Suspense fallback
- [ ] Every route segment has an `error.tsx` marked `"use client"`
- [ ] Every page exports `metadata` (static) or `generateMetadata` (dynamic)
- [ ] Images use `next/image` with explicit `width`/`height` or `fill`
- [ ] Fonts loaded via `next/font` in root layout — no `@import` in CSS
