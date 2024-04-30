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

    const [value, setValue] = useState('');

    const handleNameChange = (event: any, input:string) => {
        setValue(event.target.value);
        if (input === "First name") {
            values.firstname = value;
        }
        if (input === "Last name") {
            values.lastname = value;
        }
        if (input === "email") {
            values.email = value;
        }
        if (input === "Mot de passe") {
            values.str_password = value;
        }
        if (input === "Confimer le mot de passe") {
            values.str_confirm_password = value;
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
                        value={value}
                        onChange={() => handleNameChange(event, props.title)}
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
