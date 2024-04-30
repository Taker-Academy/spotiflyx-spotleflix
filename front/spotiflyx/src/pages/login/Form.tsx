import { Password } from 'primereact/password';
import React, { useState } from 'react';
import { Divider } from 'primereact/divider';

export type FormProps = {
    title: string;
    value: string;
    password: number;
}

export const FORMS: FormProps[] = [
    {
        title: "Email",
        value: "jean.dupont@gmail.com",
        password: 1,
    },
    {
        title: "Password",
        value: "password",
        password: 0,
    },
]

const header = <h6>Pick a password</h6>;
const footer = (
    <React.Fragment>
        <Divider />
        <p className="mt-2">Suggestions</p>
        <ul className="pl-2 ml-2 mt-0" style={{lineHeight: '1.5'}}>
            <li>At least one lowercase</li>
            <li>At least one uppercase</li>
            <li>At least one numeric</li>
            <li>Minimum 8 characters</li>
        </ul>
    </React.Fragment>
);

const password = (props: FormProps) => {
    if (props.password === 1)
        return "text"
    else
        return "password"
}

export const Form = (props: FormProps) => {
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
