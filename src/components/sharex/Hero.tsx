"use client"
import { Button } from "@/components/sharex/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "./ui/card";
import { Monitor, Users } from "lucide-react";
import Link from "next/link";
import { useTheme } from "next-themes";

import { MagicCard } from "@/components/sharex/ui/magicCard";


export default function Hero() {
  const { theme } = useTheme();
  return (
    <section className="py-28 bg-black px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto flex flex-col items-center justify-center">
        <div className="mb-10 lg:mb-0">
          <h1 className="text-4xl max-w-2xl sm:text-5xl lg:text-6xl font-bold text-transparent mb-4 tracking-tight bg-gradient-to-br from-foreground to-muted-foreground/70 bg-clip-text">
            Share Your Screen, <span className="text-primary">Connect</span> in
            Real-Time
          </h1>
          <p className="md:text-xl mb-8 opacity-80">
            Collaborate seamlessly with our powerful screen sharing and live
            chat platform.
          </p>
        </div>
        <div className="grid md:grid-cols-2 gap-6 mt-12">
          <MagicCard className="cursor-pointer flex-col items-center justify-center whitespace-nowrap text-4xl shadow-2xl "
        gradientColor={theme === "dark" ? "#262626" : "#D9D9D955"}>
            <CardHeader>
              <CardTitle className="flex items-center text-violet-500  gap-2">
                <Monitor className="h-6 w-6" />
                Start Sharing
              </CardTitle>
              <CardDescription>
                Create a room and share your screen with others
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Link href="/host">
                <Button className="w-full ">Create Room</Button>
              </Link>
            </CardContent>
          </MagicCard>

          <Card className="hover:shadow-lg transition-shadow">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Users className="h-6 w-6" />
                Join a Room
              </CardTitle>
              <CardDescription>
                Enter a room code to view someone screen
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Link href="/join">
                <Button variant="outline" className="w-full">
                  Join Room
                </Button>
              </Link>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
