import { Section } from "@/components/Section"
import React, { useState } from 'react';
import Youtube from 'react-youtube';
import { VideofavH } from "./VideoFav";

const SectionFavVideo = (props: VideofavH) => {
    
    const opts = {
        width: '498',
        height: '280',
    };

    return (
        <Section className="w-100 h-fit">
            <Youtube videoId={props.id_video} opts={opts}/>
      </Section>
    )
}

const FavVideoResult = ({ h_ARRAY }: { h_ARRAY: VideofavH[] }) => {

    if (h_ARRAY) {
        return (
            <Section className="w-100 grid grid-cols-2 grid-rows-4 gap-4">
                {h_ARRAY.map((project, index) => (
                    <div
                        key={index}
                    >
                        <SectionFavVideo
                            id_video={project.id_video}
                        />
                    </div>
                ))}
            </Section>
        )
    }
}

export default FavVideoResult;
