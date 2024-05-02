import { Section } from "@/components/Section"
import { DEFAULT_RUNTIME_WEBPACK } from "next/dist/shared/lib/constants";
import React from 'react';

const DisplaySearchVideo = ({data}: any) => {
    return (
        <Section>
            <img src={data.thumbnailUrl} alt="Thumbnail of the video"></img>
            <p>{data.title}</p>
            <p>{data.views} vues</p>
        </Section>
    )
}

export default DisplaySearchVideo;