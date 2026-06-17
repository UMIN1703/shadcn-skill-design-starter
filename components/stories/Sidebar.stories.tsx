import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { expect, userEvent, within } from "storybook/test";
import {
  Bot,
  BookOpen,
  ChevronRight,
  ChevronsUpDown,
  Frame,
  GalleryVerticalEnd,
  Map,
  MoreHorizontal,
  PieChart,
  Settings2,
  SquareTerminal,
} from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarInset,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarProvider,
  SidebarTrigger,
} from "@/components/ui/sidebar";

const platform = [
  {
    title: "Playground",
    icon: SquareTerminal,
    items: ["History", "Starred", "Settings"],
  },
  { title: "Models", icon: Bot },
  { title: "Documentation", icon: BookOpen },
  { title: "Settings", icon: Settings2 },
];

const projects = [
  { title: "Design Engineering", icon: Frame },
  { title: "Sales & Marketing", icon: PieChart },
  { title: "Travel", icon: Map },
];

function FullSidebar() {
  return (
    <Sidebar collapsible="icon">
      <SidebarHeader>
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton size="lg" className="h-auto gap-2 py-2">
              <div className="flex aspect-square size-8 shrink-0 items-center justify-center rounded-lg bg-sidebar-primary text-sidebar-primary-foreground">
                <GalleryVerticalEnd className="size-4" />
              </div>
              <div className="grid flex-1 text-left leading-tight">
                <span className="truncate text-sm font-semibold">Acme Inc</span>
                <span className="truncate text-xs">Enterprise</span>
              </div>
              <ChevronsUpDown className="ml-auto size-4" />
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>

      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>Platform</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {platform.map((item) => {
                if (item.items) {
                  return (
                    <Collapsible
                      key={item.title}
                      defaultOpen
                      className="group/collapsible"
                    >
                      <SidebarMenuItem>
                        <CollapsibleTrigger asChild>
                          <SidebarMenuButton>
                            <item.icon />
                            <span>{item.title}</span>
                            <ChevronRight className="ml-auto size-4 transition-transform duration-200 group-data-[state=open]/collapsible:rotate-90" />
                          </SidebarMenuButton>
                        </CollapsibleTrigger>
                        <CollapsibleContent>
                          <ul className="ml-3.5 flex flex-col gap-1 border-l border-sidebar-border px-2.5 py-0.5">
                            {item.items.map((sub) => (
                              <li key={sub}>
                                <a
                                  href="#"
                                  className="flex h-7 items-center rounded-md px-2 text-sm text-sidebar-foreground/80 hover:bg-sidebar-accent hover:text-sidebar-accent-foreground"
                                >
                                  {sub}
                                </a>
                              </li>
                            ))}
                          </ul>
                        </CollapsibleContent>
                      </SidebarMenuItem>
                    </Collapsible>
                  );
                }
                return (
                  <SidebarMenuItem key={item.title}>
                    <SidebarMenuButton>
                      <item.icon />
                      <span>{item.title}</span>
                      <ChevronRight className="ml-auto size-4" />
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                );
              })}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>

        <SidebarGroup>
          <SidebarGroupLabel>Projects</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {projects.map((p) => (
                <SidebarMenuItem key={p.title}>
                  <SidebarMenuButton>
                    <p.icon />
                    <span>{p.title}</span>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
              <SidebarMenuItem>
                <SidebarMenuButton className="text-sidebar-foreground/70">
                  <MoreHorizontal />
                  <span>More</span>
                </SidebarMenuButton>
              </SidebarMenuItem>
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>

      <SidebarFooter>
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton size="lg" className="h-auto gap-2 py-2">
              <Avatar className="size-8 rounded-lg">
                <AvatarImage
                  src="https://github.com/shadcn.png"
                  alt="@shadcn"
                />
                <AvatarFallback className="rounded-lg">SC</AvatarFallback>
              </Avatar>
              <div className="grid flex-1 text-left leading-tight">
                <span className="truncate text-sm font-semibold">Shadcn</span>
                <span className="truncate text-xs">m@example.com</span>
              </div>
              <ChevronsUpDown className="ml-auto size-4" />
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarFooter>
    </Sidebar>
  );
}

function SidebarStateClosed() {
  return (
    <div className="h-[608px] w-fit overflow-hidden rounded-lg border border-border">
      <SidebarProvider defaultOpen={false}>
        <FullSidebar />
      </SidebarProvider>
    </div>
  );
}

function SidebarStateOpen() {
  return (
    <div className="h-[608px] w-full max-w-md overflow-hidden rounded-lg border border-border">
      <SidebarProvider>
        <FullSidebar />
      </SidebarProvider>
    </div>
  );
}

function SidebarWithMainPanel() {
  return (
    <div className="h-[700px] w-full overflow-hidden rounded-lg border border-border">
      <SidebarProvider>
        <FullSidebar />
        <SidebarInset>
          <header className="flex h-12 items-center gap-2 border-b border-border px-4">
            <SidebarTrigger />
            <span className="text-sm font-medium">Dashboard</span>
          </header>
          <div className="p-6 text-sm text-muted-foreground">
            Click the panel icon to collapse the sidebar.
          </div>
        </SidebarInset>
      </SidebarProvider>
    </div>
  );
}

const meta: Meta<typeof SidebarStateOpen> = {
  title: "UI/Sidebar",
  component: SidebarStateOpen,
  tags: ["autodocs"],
  parameters: { layout: "fullscreen" },
};

export default meta;

type Story = StoryObj<typeof SidebarStateOpen>;

export const Default: Story = {
  parameters: { layout: "fullscreen" },
};

export const StateClosed: Story = {
  parameters: { layout: "fullscreen" },
  render: () => <SidebarStateClosed />,
};

export const StateOpen: Story = {
  parameters: { layout: "fullscreen" },
  render: () => <SidebarStateOpen />,
};

export const WithMainPanel: Story = {
  parameters: { layout: "fullscreen" },
  render: () => <SidebarWithMainPanel />,
};

export const ToggleInteraction: Story = {
  name: "Toggle sidebar (QA test)",
  parameters: { layout: "fullscreen" },
  render: () => <SidebarWithMainPanel />,
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const trigger = canvas.getByRole("button", { name: /toggle sidebar/i });
    await userEvent.click(trigger);
    await expect(trigger).toBeVisible();
  },
};
