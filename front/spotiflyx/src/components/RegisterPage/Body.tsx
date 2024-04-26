import { Section } from "../Section"
import Link from "next/link"
import { FORMS, FormProps, Form } from "./Form";
import { Button, buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils"

export const Body = () => {
    return (
        <Section className="flex flex-col items-baseline pb-6 items-center gap-4 direction-column w-40 h-full pl-4">
            <h3 className="mb-10 big-text">SignUp to Discover a New World</h3>
            {FORMS.map((project, index) => (
            <Form
                key={index}
                title={project.title}
                value={project.value}
                password={project.password}
            />
            ))}
            <p className={cn(buttonVariants({ size : "default"}), "size-10 w-full mt-20")}>Welcome !</p>
            <div className="flex flex-row gap-3">
                <p>Already have an account ?</p>
                <Link href="https://www.youtube.com/watch?v=xvFZjo5PgG0">
                    <u>LogIn Here !</u>
                </Link>
            </div>
        </Section>
    )
}
