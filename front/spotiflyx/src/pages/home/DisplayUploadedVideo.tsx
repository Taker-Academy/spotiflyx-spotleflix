import { Section } from "@/components/Section"
import React from 'react';
import { UploadedVideo } from "./Home";

const SectionUploadedVideos = (props: UploadedVideo) => {
    return (
        <Section className="w-100 h-fit">
            <iframe
                src={props.videoUrl}>
            </iframe>
            <p>{props.title}</p>
      </Section>
    )
}

const UploadedVideoResult = ({ h_ARRAY }: { h_ARRAY: UploadedVideo[] }) => {

    if (h_ARRAY) {
        return (
            <Section className="w-100 grid grid-cols-2 grid-rows-4 gap-4">
                {h_ARRAY.map((project, index) => (
                    <div
                        key={index}
                        // className={`row-start-${Math.floor(index / 4) + 1}`}
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
