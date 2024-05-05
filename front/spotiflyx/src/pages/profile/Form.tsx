import React, { useState } from 'react';

export var CurrentPassword = '';
export var NewPassword = '';

export type FormProps = {
    old_password: string;
    value: string;
}

export const FORMS: FormProps[] = [
    {
        old_password: "Current Password",
        value: "password",
    },
    {
        old_password: "Password",
        value: "new password",
    },
]

export const Form = (props: FormProps) => {

    const [value, setValue] = useState({
        CurrentPassword: '',
        NewPassword: '',
    });

    const handleNameChange = (event: any, input:string) => {
        const newValue = event.target.value;
        setValue(prevState => ({
            ...prevState,
            [input.toLowerCase()]: newValue
        }));
        if (input === "Current Password") {
            CurrentPassword = newValue;
        }
        if (input === "Password") {
            NewPassword = newValue;
        }
    };

    return (
        <div className="w-full pb-4">
            <form>
                <label className="flex flex-col">
                    {props.old_password}
                    <input
                        type="password"
                        name="name"
                        placeholder={props.value}
                        className="hover:border-white bg-transparent border border-gray-500 rounded p-1"
                        style={{ backdropFilter: 'blur(10px)' }}
                        onChange={(event) => handleNameChange(event, props.old_password)}
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
