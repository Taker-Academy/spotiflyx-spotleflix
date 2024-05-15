import { Section } from "@/components/Section"
import React from 'react';
import { UploadedVideo } from "./Home";
import Youtube from 'react-youtube';

const SectionUploadedVideos = (props: UploadedVideo) => {

    const opts = {
        width: '267',
        height: '150',
    };

    return (
        <Section className="w-100 h-fit">
            <Youtube videoId={props.videoUrl} opts={opts}/>
            <p>{props.title}</p>
      </Section>
    )
}

const UploadedVideoResult = ({ h_ARRAY }: { h_ARRAY: UploadedVideo[] }) => {

    if (h_ARRAY) {
        const reversedArray = h_ARRAY.slice().reverse().slice(0, 3);

        return (
            <Section className="w-fit h-full flex flex-col justify-around">
                {reversedArray.map((project, index) => (
                    <div
                        key={index}
                        className="flex flex-col"
                    >
                        <SectionUploadedVideos
                            videoUrl={project.videoUrl}
                            title={project.title}
                        />
                    </div>
                ))}
            </Section>
        )
    }
}

export default UploadedVideoResult;
