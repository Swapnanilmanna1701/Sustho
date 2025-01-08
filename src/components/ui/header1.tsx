import React from "react";
import { Logo } from "@/components/ui/logo1";
import { LogoWithText } from "@/components/ui/logo-with-text";
import { Button, buttonVariants } from "@/components/ui/button3";
import { X } from "lucide-react";
import Link from "next/link";
import { cn } from "@/utils/functions/cn";

export const Header = () => {
  return (
    <header className="w-full h-16 sticky top-0 left-0 right-0 flex justify-between items-center px-2 md:px-4 lg:px-6 border-b-2 bg-background">
      <Logo className="md:hidden" />
      <LogoWithText className="hidden md:flex" />

      <Link
        href={"https://x.com/anurag__kochar"}
        target="_blank
      "
        className={cn(
          buttonVariants({
            size: "icon",
            className: "bg-black hover:bg-black/90 w-8 h-8",
          })
        )}
      >
        {" "}
        <X size={15} color="white" />{" "}
      </Link>
    </header>
  );
};
