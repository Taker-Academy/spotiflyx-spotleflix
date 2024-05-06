import { Section } from "../../components/Section"
import { Link, useNavigate } from 'react-router-dom';
import { FORMS, FormProps, Form } from "./Form";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils"
import React, { PropsWithChildren, useState, useEffect } from 'react';
import SendRegisterForm from "./SentregisterForm";
import setAuthToken from '../SeAuthToken';

export const values = {
    firstname: '',
    lastname: '',
    email: '',
    str_password: '',
    str_confirm_password: '',
}

const CheckConfirmPassword = (password: string, confirm_password: string) => {
    if (password === confirm_password)
        return false;
    return true;
}

const Body = () => {

    const navigate = useNavigate();

    const handleClick = async (
            firstname: string,
            lastname: string,
            email: string,
            password: string,
            confirm_passord: string) => {
        if (CheckConfirmPassword(password, confirm_passord) === true) {
            alert("Please enter the same password");
            return 1;
        }
        console.log("First name = ", firstname);
        console.log("Last name = ", lastname);
        console.log("email = ", email);
        console.log("password= ", password);
        try {
            const response = await SendRegisterForm(firstname, lastname, email, password);
            if (response.status === 201) {
                alert("Welcome " + values.firstname);
                setAuthToken(response.data.token);
                navigate("/home");
                return 0;
            } else {
                console.error("An error occur oops !\n");
                navigate("/register");
                return 1;
            }
        } catch (error) {
            console.error(error);
            navigate("/register");
            return 1;
        }
    };

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
            <p 
                onClick={() => handleClick(
                    values.firstname,
                    values.lastname,
                    values.email,
                    values.str_password,
                    values.str_confirm_password)}
                className={cn(buttonVariants({ size : "default"}), "size-10 w-full mt-20")}
                >
                Welcome !
            </p>
            <div className="flex flex-row gap-3">
                <p>Already have an account ?</p>
                <Link to="/">
                    <u>LogIn Here !</u>
                </Link>
            </div>
        </Section>
    )
}

export default Body;
