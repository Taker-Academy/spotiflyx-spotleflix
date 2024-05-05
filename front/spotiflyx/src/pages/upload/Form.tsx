import React, { useState } from 'react';
import { WhichMedia } from './UploadMusicVideo';

export var title = '';
export var link = '';

export type FormProps = {
    title: string;
    value: string | (() => string);
}

const WhichValue = () => {
    console.log(WhichMedia);
    if (WhichMedia === "Video")
        return "https://www.youtube.com/watch?v=dQw4w9WgXcQ";
    return "https://open.spotify.com/track/6yqwxY8qifBBhyryjZutxk?si=c766a5d007ce4b37";
}


export var FORMS: FormProps[] = [
    {
        title: "Title of the video",
        value: "add a name",
    },
    {
        title: "Link",
        value: WhichValue,
    },
]

export const UpdateForm = () => {
    return FORMS;
}


export const Form = (props: FormProps) => {

    const [value, setValue] = useState({
        title: '',
        link: '',
    });

    const handleNameChange = (event: any, input:string) => {
        const newValue = event.target.value;
        setValue(prevState => ({
            ...prevState,
            [input.toLowerCase()]: newValue
        }));
        if (input === "Title of the video") {
            title = newValue;
        }
        if (input === "Link") {
            link = newValue;
        }
    };

    return (
        <div className="w-full">
            <form>
                <label className="flex flex-col">
                    {props.title}
                    <input
                        type="text"
                        name="name"
                        placeholder={typeof props.value === 'function' ? props.value() : props.value}
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
