import { Button, buttonVariants } from "@/components/ui/button";
import { Section } from "../../components/Section";
import { FORMS, FormProps, Form } from "./Form";
import { cn } from "@/lib/utils";
import { Link, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import SendLogInForm from "./SendLoginForm";
import { email, str_password } from "./Form";

export const LogIn = () => {

    const [ReturnValue, setReturnValue] = useState(1);
    const navigate = useNavigate();

    const handleClick = async (
            email: string,
            password: string,) => {
        try {
            const response = await SendLogInForm(email, password);
            alert(response.status);
            if (response.status === 200) {
                setReturnValue(0);
                return 0;
            } else {
                setReturnValue(1);
                navigate('/login');
                alert("It seems that you do not have an account");
                return 1;
            }
        } catch (error) {
            console.error(error);
            setReturnValue(1);
            navigate('/login');
            return 1;
        }
    };

    const RedirectToHome = (): string => {
        if (ReturnValue === 1)
            return "/home";
        return "/login";
    }

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
            <Link to={RedirectToHome()}>
                <p 
                    onClick={() => handleClick(
                        email,
                        str_password
                    )}
                    className={cn(buttonVariants({ size : "default"}), "size-10 w-full mt-20")}
                >
                    Welcome back !
                </p>
            </Link>
            <div className="flex flex-row gap-3">
                <p>You are maybe new here.</p>
                <Link to="/register">
                    <u>Sign Up Here !</u>
                </Link>
            </div>
        </Section>
    );
}
