import { Section } from "@/components/Section"
import { Spacing } from "@/components/Spacing";
import { FormControl, RadioGroup, FormLabel, FormControlLabel, Radio, responsiveFontSizes } from "@mui/material"
import { useState } from "react"
import { cn } from "@/lib/utils";
import { buttonVariants } from "@/components/ui/button";
import { FORMS, Form, title, link, UpdateForm } from "./Form";
import { useNavigate } from "react-router-dom";
import { CloseLogo } from "@/components/images/CloseLogo";
import SendUpload from './SendUpload';


export var WhichMedia = '';

interface ModalProps {
    onClose: () => void;
    Type: string;
}

const SuccessUpload: React.FC<ModalProps> = ({ onClose, Type }) => {
    return (
        <div className="fixed top-0 left-0 w-full h-full flex justify-center items-center bg-black bg-opacity-50">
        <div className="bg-zinc-800 p-6 rounded-lg">
            <button onClick={onClose}><CloseLogo size={32}/></button>
            <div className="mt-4">
                <p>Your {Type} has been uploaded successfully</p>
            </div>
        </div>
    </div>
    )
}

export const DisplayForm = () => {

    const navigate = useNavigate();
    const [IsSuccesChangeOpen, setIsSuccesChangeOpen] = useState(false);

    const openSuccess = () => {
        setIsSuccesChangeOpen(true);
    };

    const closeSuccess = () => {
        setIsSuccesChangeOpen(false);
    };

    const VideoUpload = async () => {
        if (!title || !link) {
            alert('Please enter a value');
            return 1;
        }
        try {
            const response = await SendUpload(title, link, WhichMedia);
            if (response === null || response === undefined) {
                alert("Error during the process of uploading a video");
                return;
            }
            if (response.status === 201) {
                await openSuccess();
                console.log("upload success !");
                navigate('/home');
                return (
                    <div>
                        {IsSuccesChangeOpen && <SuccessUpload onClose={closeSuccess} Type={WhichMedia}/>}
                    </div>
                )
            }
            if (response.status === 401) {
                navigate('/upload');
                alert("Error during the process of uploading a video");
                return 1;
            }
        } catch (error) {
            console.error(error);
            navigate('/upload');
            return 1;
        }
    }

    const MusicUpload = async () => {
        if (!title || !link) {
            alert('Please enter a value');
            return 1;
        }
        try {
            const response = await SendUpload(title, link, WhichMedia);
            if (response === null || response === undefined) {
                alert("Error during the process of uploading a video");
                return;
            }
            if (response.status === 201) {
                navigate('/home');
                openSuccess();
                return (
                    <div>
                        {IsSuccesChangeOpen && <SuccessUpload onClose={closeSuccess} Type={WhichMedia}/>}
                    </div>
                )
            }
            if (response.status === 401) {
                navigate('/upload');
                alert("Error during the process of uploading a video");
                return 1;
            }
        } catch (error) {
            console.error(error);
            navigate('/upload');
            return 1;
        }
    }

    const handleClick = () => {
        if (WhichMedia === "Video") {
            return VideoUpload();
        } else if (WhichMedia === "Music") {
            return MusicUpload();
        }
    }

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
                onClick={() => handleClick()}
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
