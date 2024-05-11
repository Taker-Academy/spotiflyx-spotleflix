import { Section } from "@/components/Section"
import React from 'react';
import { SearchArray } from "../home/SearchBar";
import Youtube from 'react-youtube';

const DisplayView = (views: number) => {
    return views.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");
}  

const DisplaySearchVideo = (props: SearchArray) => {

    const opts = {
        width: '498',
        height: '280',
    };

    return (
        <Section className="w-100 h-fit">
            <Youtube videoId={props.id_video} opts={opts}/>
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
                            id_video={project.id_video}
                            description={project.description}
                        />
                    </div>
                ))}
            </Section>
        )
    }
}

export default SearchVideoResult;