import { useState } from "react";
import { LatestUploadMusic } from "../latest_music_and_video_upload/LatestUploadMusic";
import { Section } from "@/components/Section";
import { LatestUploadVideo } from "../latest_music_and_video_upload/LatestUploadVideo";
import { Spacing } from "@/components/Spacing";
import { FetchVideoHome } from "./HomeVideo";
import { FetchMusicHome } from "./HomeMusic";

export type UploadedVideo = {
    "title": string
    "videoUrl": string
}

export var HomeValue: boolean = false;

export const HomeMusic = () => {
    const [value, setValue] = useState(false);

    const HandleCategory = (catego: boolean) => {
        if (catego === true) {
            setValue(true);
            HomeValue = true;
        } else {
            setValue(false);
            HomeValue = false;
        }
    };

    if (value === false) {
        return (
            <Section className="flex f-row w-full relative">
                <LatestUploadVideo/>
                <div className="w-70">
                    <div 
                    className="w-100 flex f-row justify-around h-fit pl-10 pr-10"
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

                    <Spacing size="sm"/>

                    <FetchMusicHome/>
                </div>
                <LatestUploadMusic/>
            </Section>
        );
    } else {
        return (
            <Section className="flex f-row w-full relative">
                <LatestUploadVideo/>
                <div className="w-70">
                    <div 
                        className="w-100 flex f-row justify-around h-fit pl-10 pr-10"
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

                    <Spacing size="sm"/>

                    <FetchVideoHome/>
                </div>
                <LatestUploadMusic/>
            </Section>
        );
    }
};
