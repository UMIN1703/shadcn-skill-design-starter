"use client";

import {
  ArrowUp,
  ChevronDown,
  Copy,
  CreditCard,
  Info,
  Loader2,
  Mail,
  MoreHorizontal,
  Plus,
  RotateCcw,
  Search,
  Star,
} from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import {
  InputGroup,
  InputGroupAddon,
  InputGroupFooter,
  InputGroupHeader,
  InputGroupInput,
  InputGroupTextarea,
} from "@/components/ui/input-group";

export function InputGroupDemo() {
  return (
    <div className="flex w-full max-w-md flex-col gap-10">
      <section className="flex flex-col gap-3">
        <h3 className="font-mono text-sm font-medium text-muted-foreground">
          Icon Start
        </h3>
        <InputGroup>
          <InputGroupAddon>
            <Search />
          </InputGroupAddon>
          <InputGroupInput placeholder="Search..." />
        </InputGroup>
      </section>

      <section className="flex flex-col gap-3">
        <h3 className="font-mono text-sm font-medium text-muted-foreground">
          Icon Both Sides
        </h3>
        <InputGroup>
          <InputGroupAddon>
            <Mail />
          </InputGroupAddon>
          <InputGroupInput type="email" placeholder="you@example.com" />
          <InputGroupAddon position="end">
            <CreditCard />
          </InputGroupAddon>
        </InputGroup>
      </section>

      <section className="flex flex-col gap-3">
        <h3 className="font-mono text-sm font-medium text-muted-foreground">
          Text Addon
        </h3>
        <InputGroup>
          <InputGroupAddon>
            <span className="text-sm">$</span>
          </InputGroupAddon>
          <InputGroupInput type="number" placeholder="0.00" />
          <InputGroupAddon position="end">
            <span className="text-sm">USD</span>
          </InputGroupAddon>
        </InputGroup>
      </section>

      <section className="flex flex-col gap-3">
        <h3 className="font-mono text-sm font-medium text-muted-foreground">
          URL Prefix & Suffix
        </h3>
        <InputGroup>
          <InputGroupAddon>
            <span className="text-sm text-muted-foreground">https://</span>
          </InputGroupAddon>
          <InputGroupInput placeholder="example" />
          <InputGroupAddon position="end">
            <span className="text-sm text-muted-foreground">.com</span>
          </InputGroupAddon>
        </InputGroup>
      </section>

      <section className="flex flex-col gap-3">
        <h3 className="font-mono text-sm font-medium text-muted-foreground">
          With Button
        </h3>
        <InputGroup>
          <InputGroupInput
            placeholder="https://x.com/shadcn"
            defaultValue="https://x.com/shadcn"
          />
          <InputGroupAddon position="end" className="pr-1">
            <Button size="sm" className="h-7 px-3">
              Search
            </Button>
          </InputGroupAddon>
        </InputGroup>
      </section>

      <section className="flex flex-col gap-3">
        <h3 className="font-mono text-sm font-medium text-muted-foreground">
          With Counter
        </h3>
        <InputGroup>
          <InputGroupAddon>
            <Search />
          </InputGroupAddon>
          <InputGroupInput placeholder="Search..." />
          <InputGroupAddon position="end">
            <span className="text-sm text-muted-foreground">12 results</span>
          </InputGroupAddon>
        </InputGroup>
      </section>

      <section className="flex flex-col gap-3">
        <h3 className="font-mono text-sm font-medium text-muted-foreground">
          Avatar Prefix
        </h3>
        <InputGroup>
          <InputGroupAddon>
            <Avatar className="size-5">
              <AvatarImage
                src="https://github.com/shadcn.png"
                alt="@shadcn"
              />
              <AvatarFallback>SC</AvatarFallback>
            </Avatar>
          </InputGroupAddon>
          <InputGroupInput placeholder="@shadcn" defaultValue="@shadcn" />
        </InputGroup>
      </section>

      <section className="flex flex-col gap-3">
        <h3 className="font-mono text-sm font-medium text-muted-foreground">
          With Info Icon
        </h3>
        <InputGroup>
          <InputGroupInput placeholder="Enter password" type="password" />
          <InputGroupAddon position="end">
            <Info />
          </InputGroupAddon>
        </InputGroup>
      </section>

      <section className="flex flex-col gap-3">
        <h3 className="font-mono text-sm font-medium text-muted-foreground">
          Multiple End Icons
        </h3>
        <InputGroup>
          <InputGroupInput placeholder="Card number" />
          <InputGroupAddon position="end">
            <Star />
            <Info />
          </InputGroupAddon>
        </InputGroup>
      </section>

      <section className="flex flex-col gap-3">
        <h3 className="font-mono text-sm font-medium text-muted-foreground">
          Email Domain Suffix
        </h3>
        <InputGroup>
          <InputGroupInput placeholder="Enter your username" />
          <InputGroupAddon position="end">
            <span className="text-sm text-muted-foreground">@company.com</span>
          </InputGroupAddon>
        </InputGroup>
      </section>

      <section className="flex flex-col gap-3">
        <h3 className="font-mono text-sm font-medium text-muted-foreground">
          With Copy Button
        </h3>
        <InputGroup>
          <InputGroupInput
            defaultValue="https://x.com/shadcn"
            readOnly
          />
          <InputGroupAddon position="end" className="pr-1">
            <Button
              size="icon"
              variant="ghost"
              className="size-7"
              aria-label="Copy link"
            >
              <Copy />
            </Button>
          </InputGroupAddon>
        </InputGroup>
      </section>

      <section className="flex flex-col gap-3">
        <h3 className="font-mono text-sm font-medium text-muted-foreground">
          Button Prefix
        </h3>
        <InputGroup>
          <InputGroupAddon className="pl-1">
            <Button size="sm" className="h-7 px-3">
              Click for help with API keys
            </Button>
          </InputGroupAddon>
          <InputGroupInput placeholder="Your email address" />
        </InputGroup>
      </section>

      <section className="flex flex-col gap-3">
        <h3 className="font-mono text-sm font-medium text-muted-foreground">
          Loading Spinner
        </h3>
        <div className="flex flex-col gap-3">
          <InputGroup>
            <InputGroupInput defaultValue="Searching..." readOnly />
            <InputGroupAddon position="end">
              <Loader2 className="animate-spin" />
            </InputGroupAddon>
          </InputGroup>
          <InputGroup>
            <InputGroupAddon>
              <Loader2 className="animate-spin" />
            </InputGroupAddon>
            <InputGroupInput defaultValue="Processing..." readOnly />
          </InputGroup>
          <InputGroup>
            <InputGroupInput defaultValue="Saving changes..." readOnly />
            <InputGroupAddon position="end">
              <span className="text-sm text-muted-foreground">Saving...</span>
            </InputGroupAddon>
          </InputGroup>
        </div>
      </section>

      <section className="flex flex-col gap-3">
        <h3 className="font-mono text-sm font-medium text-muted-foreground">
          Dropdown Trigger End
        </h3>
        <div className="flex flex-col gap-3">
          <InputGroup>
            <InputGroupInput placeholder="Enter file name" />
            <InputGroupAddon position="end" className="pr-1">
              <Button
                size="icon"
                variant="ghost"
                className="size-7"
                aria-label="Open menu"
              >
                <MoreHorizontal />
              </Button>
            </InputGroupAddon>
          </InputGroup>
          <InputGroup>
            <InputGroupInput placeholder="Enter search query" />
            <InputGroupAddon position="end" className="pr-1">
              <Button
                size="sm"
                variant="ghost"
                className="h-7 gap-1 px-2 text-muted-foreground"
              >
                Search in...
                <ChevronDown className="size-3" />
              </Button>
            </InputGroupAddon>
          </InputGroup>
        </div>
      </section>

      <section className="flex flex-col gap-3">
        <h3 className="font-mono text-sm font-medium text-muted-foreground">
          Textarea With Footer
        </h3>
        <InputGroup orientation="col">
          <InputGroupTextarea placeholder="Ask, Search or Chat..." />
          <InputGroupFooter className="text-foreground">
            <div className="flex items-center gap-2">
              <Button
                size="icon"
                variant="ghost"
                className="size-7 rounded-full border border-border"
                aria-label="Add"
              >
                <Plus />
              </Button>
              <span className="text-sm">Auto</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-sm text-muted-foreground">52% used</span>
              <Button
                size="icon"
                className="size-7 rounded-full"
                aria-label="Send"
              >
                <ArrowUp />
              </Button>
            </div>
          </InputGroupFooter>
        </InputGroup>
      </section>

      <section className="flex flex-col gap-3">
        <h3 className="font-mono text-sm font-medium text-muted-foreground">
          Textarea With Counter
        </h3>
        <InputGroup orientation="col">
          <InputGroupTextarea placeholder="Enter your message" />
          <InputGroupFooter>
            <span className="text-sm text-muted-foreground">
              120 characters left
            </span>
          </InputGroupFooter>
        </InputGroup>
      </section>

      <section className="flex flex-col gap-3">
        <h3 className="font-mono text-sm font-medium text-muted-foreground">
          Code Editor
        </h3>
        <InputGroup orientation="col">
          <InputGroupHeader>
            <span className="font-mono text-sm text-foreground">script.js</span>
            <div className="flex items-center gap-1">
              <Button
                size="icon"
                variant="ghost"
                className="size-7"
                aria-label="Reset"
              >
                <RotateCcw />
              </Button>
              <Button
                size="icon"
                variant="ghost"
                className="size-7"
                aria-label="Copy"
              >
                <Copy />
              </Button>
            </div>
          </InputGroupHeader>
          <InputGroupTextarea
            defaultValue={`console.log("Hello, world!");`}
            className="min-h-32 font-mono"
          />
          <InputGroupFooter>
            <span className="text-sm">Line 1, Column 1</span>
            <Button size="sm" className="h-7 gap-1 px-3">
              Run
              <span className="text-xs opacity-70">↵</span>
            </Button>
          </InputGroupFooter>
        </InputGroup>
      </section>

      <section className="flex flex-col gap-3">
        <h3 className="font-mono text-sm font-medium text-muted-foreground">
          Textarea With Submit
        </h3>
        <InputGroup orientation="col">
          <InputGroupTextarea placeholder="Autoresize textarea..." />
          <InputGroupFooter className="justify-end">
            <Button size="sm" className="h-7 px-3">
              Submit
            </Button>
          </InputGroupFooter>
        </InputGroup>
      </section>
    </div>
  );
}
