import { Section } from "@/components/Section"
import React from 'react';
import { SearchArray } from "./SearchBar";
import Youtube from 'react-youtube';

const DisplayView = (views: number) => {
    return views.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");
}  

const SectionHomeVideo = (props: SearchArray) => {
    
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
                            id_video={project.id_video}
                            description={project.description}
                        />
                    </div>
                ))}
            </Section>
        )
    }
}

export default HomeVideoResult;
