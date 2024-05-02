import { useState } from "react";
import { LatestUploadMusic } from "../latest_music_and_video_upload/LatestUploadMusic";
import { Section } from "@/components/Section";
import { LatestUploadVideo } from "../latest_music_and_video_upload/LatestUploadVideo";

export const HomeMusic = () => {
    const [value, setValue] = useState(false);

    const HandleCategory = (catego: boolean) => {
        if (catego === true)
            setValue(true);
        else {
            setValue(false);
        }
    };

    if (value === false) {
        return (
            <Section className="flex f-row w-full">
                <LatestUploadVideo/>
                <div 
                className="w-70 flex f-row justify-around h-fit pl-10 pr-10"
                >
                    <p
                        className="w-50 border-b-4 border-gray-600 text-center"
                        onClick={() => HandleCategory(true)}
                    >
                        Video
                    </p>
                    <p
                        className="w-50 border-b-4 border-blue-300 text-center"
                        onClick={() => HandleCategory(false)}
                    >
                        Music
                    </p>
                </div>
                <LatestUploadMusic/>
            </Section>
        );
    } else {
        return (
            <Section className="flex f-row w-full">
                <LatestUploadVideo/>
                <div 
                    className="w-70 flex f-row justify-around h-fit pl-10 pr-10"
                >
                    <p
                        className="w-50 border-b-4 border-blue-300 text-center"
                        onClick={() => HandleCategory(true)}
                    >
                        Video
                    </p>
                    <p
                        className="w-50 border-b-4 border-gray-600 text-center"
                        onClick={() => HandleCategory(false)}
                    >
                        Music
                    </p>
                </div>
                <LatestUploadMusic/>
            </Section>
        );
    }
};
