import { Section } from "@/components/Section"
import { Spacing } from "@/components/Spacing";
import { FormControl, RadioGroup, FormLabel, FormControlLabel, Radio } from "@mui/material"
import { useState } from "react"
import { cn } from "@/lib/utils";
import { buttonVariants } from "@/components/ui/button";
import { FORMS, Form, title, link, UpdateForm } from "./Form";


export var WhichMedia = '';

const DisplayForm = () => {

    return (
        <Section className="flex flex-col items-baseline pb-6 items-center gap-4 direction-column w-40 h-full pl-4">
            {UpdateForm().map((project, index) => (
            <Form
                key={index}
                title={project.title}
                value={typeof project.value === 'function' ? project.value() : project.value}
            />
            ))}
            <p
                className={cn(buttonVariants({ size : "default"}), "size-10 w-full mt-20")}
            >
                Upload
            </p>
        </Section>
    )
}

export const UploadMusicVideo = () => {

    const [value, setValue] = useState('');

    const handleChange = (update: string) => {
        setValue(update)
        WhichMedia = update;
    }

    return (

        <Section className="w-full flex justify-center items-center flex-col">
            <h2 className="text-center text-2xl">Upload a media</h2>

            <Spacing size="sm"/>

            <div>
                <h3>Type of media</h3>
                <FormControl>
                    <RadioGroup
                        aria-labelledby="demo-controlled-radio-buttons-group"
                        name="controlled-radio-buttons-group"
                        value={value}
                        onChange={(event) => handleChange(event.target.value)}
                    >
                        <FormControlLabel value="Video" control={<Radio />} label="Video" />
                        <FormControlLabel value="Music" control={<Radio />} label="Music" />
                    </RadioGroup>
                </FormControl>
            </div>

            <Spacing size="sm"/>

           <DisplayForm/>

        </Section>
    )
}

