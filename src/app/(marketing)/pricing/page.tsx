import { AnimationContainer, MaxWidthWrapper, PricingCards } from "@/components";
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion";
import MagicBadge from "@/components/ui/magic-badge";
import { RainbowButton } from "@/components/rainbow-button";

//import { FAQ } from "@/utils/constants/faq";

const PricingPage = () => {
    return (
        <MaxWidthWrapper className="">
            <AnimationContainer delay={0.1}>
                <div className="flex flex-col items-center justify-center py-10 max-w-lg mx-auto">
                    <MagicBadge title="Pricing" />
                    <h1 className="text-2xl md:text-4xl lg:text-5xl font-semibold font-heading text-center mt-6 !leading-tight">
                        Simple and transparent pricing
                    </h1>
                    <p className="text-base md:text-lg mt-6 text-center text-muted-foreground">
                        
                    </p>
                    <RainbowButton className="text-white pointer-events-none">Get Unlimited Access To All The Premium Contents</RainbowButton>
                </div>
            </AnimationContainer>

            <AnimationContainer delay={0.2}>
                <PricingCards />
            </AnimationContainer>
            

            

        </MaxWidthWrapper>
    )
};

export default PricingPage
