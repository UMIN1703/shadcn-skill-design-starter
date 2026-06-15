"use client";

import * as React from "react";
import {
  ArrowLeft,
  ArrowRight,
  Bold,
  ChevronDown,
  Copy,
  Italic,
  Minus,
  Plus,
  Send,
  Underline,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { ButtonGroup } from "@/components/ui/button-group";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  InputGroup,
  InputGroupFooter,
  InputGroupTextarea,
} from "@/components/ui/input-group";

export function ButtonGroupDemo() {
  return (
    <div className="flex flex-col gap-10">
      <section className="flex flex-col gap-3">
        <h3 className="font-mono text-sm font-medium text-muted-foreground">
          Default
        </h3>
        <ButtonGroup>
          <Button variant="outline">Years</Button>
          <Button variant="outline">Months</Button>
          <Button variant="outline">Weeks</Button>
        </ButtonGroup>
      </section>

      <section className="flex flex-col gap-3">
        <h3 className="font-mono text-sm font-medium text-muted-foreground">
          Icon Group
        </h3>
        <ButtonGroup>
          <Button variant="outline" size="icon" aria-label="Bold">
            <Bold />
          </Button>
          <Button variant="outline" size="icon" aria-label="Italic">
            <Italic />
          </Button>
          <Button variant="outline" size="icon" aria-label="Underline">
            <Underline />
          </Button>
        </ButtonGroup>
      </section>

      <section className="flex flex-col gap-3">
        <h3 className="font-mono text-sm font-medium text-muted-foreground">
          Sizes
        </h3>
        <div className="flex flex-col gap-3">
          <ButtonGroup>
            <Button variant="outline" size="sm">
              Small
            </Button>
            <Button variant="outline" size="sm" aria-label="Add">
              <Plus />
            </Button>
          </ButtonGroup>
          <ButtonGroup>
            <Button variant="outline">Default</Button>
            <Button variant="outline" size="icon" aria-label="Add">
              <Plus />
            </Button>
          </ButtonGroup>
          <ButtonGroup>
            <Button variant="outline" size="lg">
              Large
            </Button>
            <Button variant="outline" size="lg" aria-label="Add">
              <Plus />
            </Button>
          </ButtonGroup>
        </div>
      </section>

      <section className="flex flex-col gap-3">
        <h3 className="font-mono text-sm font-medium text-muted-foreground">
          Vertical Stack
        </h3>
        <ButtonGroup className="flex-col">
          <Button variant="outline" size="icon" aria-label="Increase">
            <Plus />
          </Button>
          <Button variant="outline" size="icon" aria-label="Decrease">
            <Minus />
          </Button>
        </ButtonGroup>
      </section>

      <section className="flex flex-col gap-3">
        <h3 className="font-mono text-sm font-medium text-muted-foreground">
          Pagination
        </h3>
        <ButtonGroup>
          <Button variant="outline" size="icon" aria-label="Previous page">
            <ArrowLeft />
          </Button>
          <Button variant="outline">1</Button>
          <Button variant="outline">2</Button>
          <Button variant="outline">3</Button>
          <Button variant="outline">4</Button>
          <Button variant="outline">5</Button>
          <Button variant="outline" size="icon" aria-label="Next page">
            <ArrowRight />
          </Button>
        </ButtonGroup>
      </section>

      <section className="flex flex-col gap-3">
        <h3 className="font-mono text-sm font-medium text-muted-foreground">
          Copy / Paste
        </h3>
        <ButtonGroup>
          <Button variant="outline">
            <Copy className="mr-2 size-4" />
            Copy
          </Button>
          <Button variant="outline">Paste</Button>
        </ButtonGroup>
      </section>

      <section className="flex flex-col gap-3">
        <h3 className="font-mono text-sm font-medium text-muted-foreground">
          Split
        </h3>
        <ButtonGroup>
          <Button variant="secondary">Button</Button>
          <Button variant="secondary" size="icon" aria-label="Add">
            <Plus />
          </Button>
        </ButtonGroup>
      </section>

      <section className="flex flex-col gap-3">
        <h3 className="font-mono text-sm font-medium text-muted-foreground">
          Primary with Menu
        </h3>
        <ButtonGroup>
          <Button>Save</Button>
          <Button size="icon" aria-label="More options">
            <ChevronDown />
          </Button>
        </ButtonGroup>
      </section>

      <section className="flex flex-col gap-3">
        <h3 className="font-mono text-sm font-medium text-muted-foreground">
          Follow with Dropdown
        </h3>
        <ButtonGroup>
          <Button>Follow</Button>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button size="icon" aria-label="More options">
                <ChevronDown />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuItem>Mute</DropdownMenuItem>
              <DropdownMenuItem>Mark as Read</DropdownMenuItem>
              <DropdownMenuItem>Report</DropdownMenuItem>
              <DropdownMenuItem>Block</DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem>Share</DropdownMenuItem>
              <DropdownMenuItem>Copy</DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem className="text-destructive">
                Delete
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </ButtonGroup>
      </section>

      <section className="flex flex-col gap-3">
        <h3 className="font-mono text-sm font-medium text-muted-foreground">
          Currency Pair
        </h3>
        <ButtonGroup>
          <Button variant="outline">USD</Button>
          <Button variant="outline">EUR</Button>
          <Button variant="outline">GBP</Button>
        </ButtonGroup>
      </section>

      <section className="flex flex-col gap-3">
        <h3 className="font-mono text-sm font-medium text-muted-foreground">
          Composer
        </h3>
        <InputGroup orientation="col" className="max-w-md">
          <InputGroupTextarea placeholder="Ask Copilot..." />
          <InputGroupFooter>
            <Button
              size="icon"
              variant="ghost"
              className="size-7"
              aria-label="Add attachment"
            >
              <Plus />
            </Button>
            <Button size="icon" className="size-7" aria-label="Send">
              <Send />
            </Button>
          </InputGroupFooter>
        </InputGroup>
      </section>
    </div>
  );
}
