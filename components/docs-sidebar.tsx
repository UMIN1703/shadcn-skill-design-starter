"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";

type NavItem = {
  title: string;
  href: string;
  disabled?: boolean;
};

type NavSection = {
  title: string;
  items: NavItem[];
};

const sections: NavSection[] = [
  {
    title: "Getting Started",
    items: [
      { title: "Introduction", href: "/docs" },
      { title: "Installation", href: "/docs/installation", disabled: true },
      { title: "Theming", href: "/docs/theming", disabled: true },
    ],
  },
  {
    title: "Design Tokens",
    items: [
      { title: "Overview", href: "/docs/tokens" },
      { title: "Colors", href: "/docs/tokens/colors" },
      { title: "Typography", href: "/docs/tokens/typography" },
      { title: "Spacing", href: "/docs/tokens/spacing" },
      { title: "Sizing", href: "/docs/tokens/sizing" },
      { title: "Borders", href: "/docs/tokens/borders" },
      { title: "Effects", href: "/docs/tokens/effects" },
    ],
  },
  {
    title: "Components",
    items: [
      { title: "Accordion", href: "/docs/components/accordion" },
      { title: "Alert", href: "/docs/components/alert" },
      { title: "Alert Dialog", href: "/docs/components/alert-dialog" },
      { title: "Aspect Ratio", href: "/docs/components/aspect-ratio" },
      { title: "Avatar", href: "/docs/components/avatar" },
      { title: "Badge", href: "/docs/components/badge" },
      { title: "Breadcrumb", href: "/docs/components/breadcrumb" },
      { title: "Button", href: "/docs/components/button" },
      { title: "Button Group", href: "/docs/components/button-group" },
      { title: "Calendar", href: "/docs/components/calendar" },
      { title: "Card", href: "/docs/components/card" },
      { title: "Carousel", href: "/docs/components/carousel" },
      { title: "Chart", href: "/docs/components/chart" },
      { title: "Checkbox", href: "/docs/components/checkbox" },
      { title: "Collapsible", href: "/docs/components/collapsible" },
      { title: "Combobox", href: "/docs/components/combobox" },
      { title: "Command", href: "/docs/components/command" },
      { title: "Context Menu", href: "/docs/components/context-menu" },
      { title: "Data Table", href: "/docs/components/data-table" },
      { title: "Date Picker", href: "/docs/components/date-picker" },
      { title: "Dialog", href: "/docs/components/dialog" },
      { title: "Drawer", href: "/docs/components/drawer" },
      { title: "Dropdown Menu", href: "/docs/components/dropdown-menu" },
      { title: "Empty", href: "/docs/components/empty" },
      { title: "Field", href: "/docs/components/field" },
      { title: "Form", href: "/docs/components/form" },
      { title: "Hover Card", href: "/docs/components/hover-card" },
      { title: "Input", href: "/docs/components/input" },
      { title: "Input Group", href: "/docs/components/input-group" },
      { title: "Input OTP", href: "/docs/components/input-otp" },
      { title: "Item", href: "/docs/components/item" },
      { title: "Kbd", href: "/docs/components/kbd" },
      { title: "Label", href: "/docs/components/label" },
      { title: "Menubar", href: "/docs/components/menubar" },
      { title: "Native Select", href: "/docs/components/native-select" },
      { title: "Navigation Menu", href: "/docs/components/navigation-menu" },
      { title: "Pagination", href: "/docs/components/pagination" },
      { title: "Popover", href: "/docs/components/popover" },
      { title: "Progress", href: "/docs/components/progress" },
      { title: "Radio Group", href: "/docs/components/radio-group" },
      { title: "Scroll Area", href: "/docs/components/scroll-area" },
      { title: "Select", href: "/docs/components/select" },
      { title: "Separator", href: "/docs/components/separator" },
      { title: "Sheet", href: "/docs/components/sheet" },
      { title: "Sidebar", href: "/docs/components/sidebar" },
      { title: "Skeleton", href: "/docs/components/skeleton" },
      { title: "Slider", href: "/docs/components/slider" },
      { title: "Sonner", href: "/docs/components/sonner" },
      { title: "Spinner", href: "/docs/components/spinner" },
      { title: "Switch", href: "/docs/components/switch" },
      { title: "Table", href: "/docs/components/table" },
      { title: "Tabs", href: "/docs/components/tabs" },
      { title: "Textarea", href: "/docs/components/textarea" },
      { title: "Toggle", href: "/docs/components/toggle" },
      { title: "Toggle Group", href: "/docs/components/toggle-group" },
      { title: "Tooltip", href: "/docs/components/tooltip" },
    ],
  },
];

export function DocsSidebar() {
  const pathname = usePathname();

  return (
    <nav className="flex flex-col gap-6">
      {sections.map((section) => (
        <div key={section.title} className="flex flex-col gap-1">
          <h4 className="px-2 py-1 text-sm font-semibold text-foreground">
            {section.title}
          </h4>
          <ul className="flex flex-col gap-0.5">
            {section.items.map((item) => {
              const isActive = pathname === item.href;
              if (item.disabled) {
                return (
                  <li key={item.href}>
                    <span className="flex cursor-not-allowed items-center gap-2 rounded-md px-2 py-1.5 text-sm text-muted-foreground/60">
                      {item.title}
                      <span className="rounded-md border border-border bg-muted px-1.5 py-0.5 text-[10px] font-medium text-muted-foreground">
                        soon
                      </span>
                    </span>
                  </li>
                );
              }
              return (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className={cn(
                      "flex items-center rounded-md px-2 py-1.5 text-sm transition-colors",
                      isActive
                        ? "bg-muted font-medium text-foreground"
                        : "text-muted-foreground hover:bg-muted/60 hover:text-foreground"
                    )}
                  >
                    {item.title}
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
      ))}
    </nav>
  );
}
