import { Password } from 'primereact/password';
import React, { useState } from 'react';
import { Divider } from 'primereact/divider';
import { values } from "./body";

export type FormProps = {
    title: string;
    value: string;
    password: number;
}

export const FORMS: FormProps[] = [
    {
        title: "First name",
        value: "Jean",
        password: 1,
    },
    {
        title: "Last name",
        value: "Dupont",
        password: 1,
    },
    {
        title: "email",
        value: "jean.dupont@gmail.com",
        password: 1,
    },
    {
        title: "Mot de passe",
        value: "password",
        password: 0,
    },
    {
        title: "Confimer le mot de passe",
        value: "password",
        password: 0,
    },
]

const password = (props: FormProps) => {
    if (props.password === 1)
        return "text"
    else
        return "password"
}

export const Form = (props: FormProps) => {

    const [value, setValue] = useState({
        firstname: '',
        lastname: '',
        email: '',
        str_password: '',
        str_confirm_password: ''
    });

    const handleNameChange = (event: any, input:string) => {
        const newValue = event.target.value;
        setValue(prevState => ({
            ...prevState,
            [input.toLowerCase()]: newValue
        }));
        if (input === "First name") {
            values.firstname = newValue;
        }
        if (input === "Last name") {
            values.lastname = newValue;
        }
        if (input === "email") {
            values.email = newValue;
        }
        if (input === "Mot de passe") {
            values.str_password = newValue;
        }
        if (input === "Confimer le mot de passe") {
            values.str_confirm_password = newValue;
        }
    };

    return (
        <div className="w-full">
            <form>
                <label className="flex flex-col">
                    {props.title}
                    <input
                        type={password(props)}
                        name="name"
                        placeholder={props.value}
                        className="hover:border-white bg-transparent border border-gray-500 rounded p-1"
                        style={{ backdropFilter: 'blur(10px)' }}
                        onChange={(event) => handleNameChange(event, props.title)}
                    />
                    <style> 
                        {` 
                            input::placeholder { 
                                color: #646a75; 
                            }` 
                        } 
                    </style> 
                </label>
            </form>
        </div>
    )
}
