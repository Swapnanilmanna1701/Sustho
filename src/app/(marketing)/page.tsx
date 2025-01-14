import {
  AnimationContainer,
  MaxWidthWrapper,
  PricingCards,
} from "@/components";
//import { BentoCard, BentoGrid, CARDS } from "@/components/ui/bento-grid";
//import { BorderBeam } from "@/components/ui/border-beam";
import { Button } from "@/components/ui/button";
//import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { LampContainer } from "@/components/ui/lamp";
import MagicBadge from "@/components/ui/magic-badge";
import MagicCard from "@/components/ui/magic-card";
import { PROCESS } from "@/utils";
//import { REVIEWS } from "@/utils/constants/misc";
import { currentUser } from "@clerk/nextjs/server";
import Reviews from "@/components/reviews";
//import Connect from "@/components/connect";
import { ArrowRightIcon, CreditCardIcon } from "lucide-react";
//import Image from "next/image";
import Link from "next/link";
import gradientStyle from "@/styles/gradient.module.css";
import { cn } from "@/utils/functions/cn";
import Footer from "@/components/navigation/footer";
import State from "@/components/state";
import PopImagesParagraph from "@/components/preview";
import AnimatedLogoCloud from "@/components/logo-cloud";
import TextRevealButton from "@/components/text-reveal-button";
import StarWarsButton from "@/components/star-button";
import SkewedInfiniteScroll from "@/components/infinitescroll";


//import { Spotlight } from "@/components/ui/spotlight";

const HomePage = async () => {
  const user = await currentUser();

  return (
    <div className="overflow-x-hidden bg-black scrollbar-hide size-full">
      <MaxWidthWrapper>
        <div className="flex flex-col items-center justify-center w-full text-center bg-gradient-to-t from-background">
          <AnimationContainer className="flex flex-col bg-black items-center justify-center w-full text-center">
            <button className="py-10">
              <StarWarsButton />
            </button>
            <h1 className="text-foreground text-center py-6 text-5xl font-medium tracking-normal text-balance sm:text-6xl md:text-7xl lg:text-8xl !leading-[1.15] w-full font-heading">
              Smart Links with{" "}
              <span
                className={cn(
                  "bg-gradient-to-tr from-zinc-100 via-zinc-200/50 to-zinc-200/90 text-transparent bg-clip-text animate-gradient",
                  gradientStyle.magicText
                )}
              >
                Precision
              </span>
            </h1>
            <p className="mb-12 text-lg tracking-tight text-muted-foreground md:text-xl text-balance">
              <PopImagesParagraph />
            </p>
            <div className="mb-10">
            <Link
              href={user ? "/dashboard" : "/auth/sign-in"}
              className="flex items-center"
            >
              <TextRevealButton />
            </Link>
            </div>

            
          </AnimationContainer>

          <State />
        </div>
      </MaxWidthWrapper>

      {/* Companies Section */}
      <MaxWidthWrapper>
        <AnimatedLogoCloud />
      </MaxWidthWrapper>

      {/* Features Section */}
      <MaxWidthWrapper className="pt-10">
        <AnimationContainer delay={0.1}>
          <div className="flex flex-col w-full items-center lg:items-center justify-center py-8">
            <MagicBadge title="Features" />
            <h2 className="text-center lg:text-center text-3xl md:text-5xl !leading-[1.1] font-medium font-heading text-foreground mt-6">
              Manage Links Like a Pro
            </h2>
            <p className="mt-4 text-center lg:text-center text-lg text-muted-foreground max-w-lg">
              Linkify is a powerful link management tool that helps you shorten,
              track, and organize all your links in one place.
            </p>
          </div>
        </AnimationContainer>
        <AnimationContainer delay={0.2}>
          <SkewedInfiniteScroll />
        </AnimationContainer>
      </MaxWidthWrapper>

      {/* Process Section */}
      <MaxWidthWrapper className="py-10">
        <AnimationContainer delay={0.1}>
          <div className="flex flex-col items-center lg:items-center justify-center w-full py-8 max-w-xl mx-auto">
            <MagicBadge title="The Process" />
            <h2 className="text-center lg:text-center text-3xl md:text-5xl !leading-[1.1] font-medium font-heading text-foreground mt-6">
              Effortless link management in 3 steps
            </h2>
            <p className="mt-4 text-center lg:text-center text-lg text-muted-foreground max-w-lg">
              Follow these simple steps to optimize, organize, and share your
              links with ease.
            </p>
          </div>
        </AnimationContainer>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 w-full py-8 gap-4 md:gap-8">
          {PROCESS.map((process, id) => (
            <AnimationContainer delay={0.2 * id} key={id}>
              <MagicCard className="group md:py-8">
                <div className="flex flex-col items-start justify-center w-full">
                  <process.icon
                    strokeWidth={1.5}
                    className="w-10 h-10 text-foreground"
                  />
                  <div className="flex flex-col relative items-start">
                    <span className="absolute -top-6 right-0 border-2 border-border text-foreground font-medium text-2xl rounded-full w-12 h-12 flex items-center justify-center pt-0.5">
                      {id + 1}
                    </span>
                    <h3 className="text-base mt-6 font-medium text-foreground">
                      {process.title}
                    </h3>
                    <p className="mt-2 text-sm text-muted-foreground">
                      {process.description}
                    </p>
                  </div>
                </div>
              </MagicCard>
            </AnimationContainer>
          ))}
        </div>
      </MaxWidthWrapper>

      {/* Pricing Section */}
      <MaxWidthWrapper className="py-10">
        <AnimationContainer delay={0.1}>
          <div className="flex flex-col items-center lg:items-center justify-center w-full py-8 max-w-xl mx-auto">
            <MagicBadge title="Simple Pricing" />
            <h2 className="text-center lg:text-center text-3xl md:text-5xl !leading-[1.1] font-medium font-heading text-foreground mt-6">
              Choose a plan that works for you
            </h2>
            <p className="mt-4 text-center lg:text-center text-lg text-muted-foreground max-w-lg">
              Get started with Linkify today and enjoy more features with our
              pro plans.
            </p>
          </div>
        </AnimationContainer>
        <AnimationContainer delay={0.2}>
          <PricingCards />
        </AnimationContainer>
        <AnimationContainer delay={0.3}>
          <div className="flex flex-wrap items-start md:items-center justify-center lg:justify-evenly gap-6 mt-12 max-w-5xl mx-auto w-full">
            <div className="flex items-center gap-2">
              <CreditCardIcon className="w-5 h-5 text-foreground" />
              <span className="text-muted-foreground">
                No credit card required
              </span>
            </div>
          </div>
        </AnimationContainer>
      </MaxWidthWrapper>

      {/* Reviews Section */}
      <Reviews />

      {/* CTA Section */}
      <MaxWidthWrapper className="mt-20 max-w-[100vw] overflow-x-hidden scrollbar-hide">
        <AnimationContainer delay={0.1}>
          <LampContainer>
            <div className="flex flex-col items-center justify-center relative w-full text-center">
              <h2 className="bg-gradient-to-b from-neutral-200 to-neutral-400 py-4 bg-clip-text text-center text-4xl md:text-7xl !leading-[1.15] font-medium font-heading tracking-tight text-transparent mt-8">
                Step into the future of link management
              </h2>
              <p className="text-muted-foreground mt-6 max-w-md mx-auto">
                Experience the cutting-edge solution that transforms how you
                handle your links. Elevate your online presence with our
                next-gen platform.
              </p>
              <div className="mt-6">
                <Button>
                  Get started for free
                  <ArrowRightIcon className="w-4 h-4 ml-2" />
                </Button>
              </div>
            </div>
          </LampContainer>
        </AnimationContainer>
        <Footer />
      </MaxWidthWrapper>
    </div>
  );
};

export default HomePage;
