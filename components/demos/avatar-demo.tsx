import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

export function AvatarDemo() {
  return (
    <div className="flex flex-col gap-8">
      <Avatar>
        <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
        <AvatarFallback>CN</AvatarFallback>
      </Avatar>

      <Avatar>
        <AvatarFallback className="bg-foreground text-background">
          VC
        </AvatarFallback>
      </Avatar>

      <div className="flex -space-x-2">
        <Avatar className="ring-2 ring-background">
          <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
        <Avatar className="ring-2 ring-background">
          <AvatarFallback>AB</AvatarFallback>
        </Avatar>
        <Avatar className="ring-2 ring-background">
          <AvatarFallback className="bg-foreground text-background">
            VC
          </AvatarFallback>
        </Avatar>
      </div>
    </div>
  );
}
