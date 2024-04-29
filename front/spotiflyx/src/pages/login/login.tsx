import { Button, buttonVariants } from "@/components/ui/button";
import { Section } from "../../components/Section";
import { FORMS, FormProps, Form } from "./Form";
import { cn } from "@/lib/utils";
import { Link } from 'react-router-dom';

export const LogIn = () => {
    return (
        <Section className="flex flex-col items-baseline pb-6 items-center gap-4 direction-column w-40 h-full pl-4">
            <h3 className="mb-10 big-text">Oh you have an account here ?</h3>
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
                <p>You are maybe new here.</p>
                <Link to="/register">
                    <u>Sign Up Here !</u>
                </Link>
            </div>
        </Section>
    );
}
