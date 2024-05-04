import { Section } from "@/components/Section"
import React from 'react';
import { SearchArray } from "../home/SearchBar";

const DisplayView = (views: number) => {
    return views.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");
}  

const DisplaySearchVideo = (props: SearchArray) => {
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

const SearchVideoResult = ({ s_ARRAY }: { s_ARRAY: SearchArray[] }) => {

    if (s_ARRAY) {
        return (
            <Section className="w-100 grid grid-cols-2 grid-rows-4 gap-4">
                {s_ARRAY.map((project, index) => (
                    <div
                        key={index}
                        className={`row-start-${Math.floor(index / 4) + 1}`}
                    >
                        <DisplaySearchVideo
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

export default SearchVideoResult;