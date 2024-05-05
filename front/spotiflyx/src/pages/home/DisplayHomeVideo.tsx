import { Section } from "@/components/Section"
import React from 'react';
import { SearchArray } from "./SearchBar";

const DisplayView = (views: number) => {
    return views.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");
}  

const SectionHomeVideo = (props: SearchArray) => {
    return (
        <Section className="w-100 h-fit">
            <img
                src={props.thumbnailUrl}
                alt="Thumbnail of the video"
                className="object-cover h-60 w-120 pb-3"
            ></img>
            <p>{props.title}</p>
            <p>{DisplayView(props.views)} vues</p>
      </Section>
    )
}

const HomeVideoResult = ({ h_ARRAY }: { h_ARRAY: SearchArray[] }) => {

    if (h_ARRAY) {
        return (
            <Section className="w-100 grid grid-cols-2 grid-rows-4 gap-4">
                {h_ARRAY.map((project, index) => (
                    <div
                        key={index}
                        className={`row-start-${Math.floor(index / 4) + 1}`}
                    >
                        <SectionHomeVideo
                            views={project.views}
                            videoUrl={project.videoUrl}
                            title={project.title}
                            thumbnailUrl={project.thumbnailUrl}
                            description={project.description}
                        />
                    </div>
                ))}
            </Section>
        )
    }
}

export default HomeVideoResult;
