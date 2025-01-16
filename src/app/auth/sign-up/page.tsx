import {  SignUpForm } from "@/components";
import Link from "next/link";
import gradientStyle from "@/styles/gradient.module.css";
import {cn} from "@/utils/functions/cn"

const SignUpPage = () => {
    return (
        <div className="flex flex-col items-start max-w-sm mx-auto h-dvh overflow-hidden pt-4 md:pt-20">
            <div className="flex items-center w-full py-4 border-b border-border/80 font-bold text-lg">
                <Link href="/#home" className="flex items-center gap-x-2">
                <span
                className={cn(
                  "bg-gradient-to-tr from-zinc-100 via-zinc-200/50 to-zinc-200/90 text-transparent bg-clip-text animate-gradient",
                  gradientStyle.magicText
                )}
              >
                MatrX AI
              </span>
                </Link>
            </div>

            <SignUpForm />

            <div className="flex flex-col items-start w-full">
                <p className="text-sm text-muted-foreground">
                    By signing in, you agree to our{" "}
                    <Link href="/terms" className="text-primary">
                        Terms of Service{" "}
                    </Link>
                    and{" "}
                    <Link href="/privacy" className="text-primary">
                        Privacy Policy
                    </Link>
                </p>
            </div>
            <div className="flex items-start mt-auto border-t border-border/80 py-6 w-full">
                <p className="text-sm text-muted-foreground">
                    Already have an account?{" "}
                    <Link href="/auth/sign-in" className="text-primary">
                        Sign in
                    </Link>
                </p>
            </div>
        </div>
    )
};

export default SignUpPage
