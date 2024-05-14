import { Section } from "@/components/Section"
import React, { useState } from 'react';
import { SearchArray } from "./SearchBar";
import Youtube from 'react-youtube';
import { LikeLogo } from "@/components/images/LikeLogo";
import addToFav from './AddToFav';
import delToFav from './DelToFav';
import { FavToPage } from "@/components/images/FavToPage";

const DisplayView = (views: number) => {
    return views.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");
}  

const SectionHomeVideo = (props: SearchArray) => {
    
    const opts = {
        width: '498',
        height: '280',
    };

    const [clicked, setClicked] = useState(false);
    const [fav, setfav] = useState(false);

    const AddToFav = async (url: string) => {
        try {
            const response = await addToFav(url);

            if (response.status === 201) {
                console.log("Succefully added to fav");
                alert("Video successfully added to fav");
                return;
            } else {
                console.error("An error occured during the process of adding to fav");
                alert("Error: video not added, retry");
                setClicked(false);
                return;
            }
        } catch (error) {
            console.error(error);
            return;
        }
    }

    const DelToFav = async (url: string) => {
        try {
            const response = await delToFav(url);

            if (response.status === 201) {
                console.log("Succefully delete from fav");
                alert("Video successfully deleted from fav");
                return;
            } else {
                console.error("An error occured during the process of deleting to fav");
                alert("Error: video not deleted, retry");
                setClicked(true);
                return;
            }
        } catch (error) {
            console.error(error);
            return;
        }
    }

    const handleClick = () => {
        setClicked(!clicked);
    };

    const SetFavColor = () => {
        if (!fav) {
            AddToFav(props.videoUrl)
        } else {
            DelToFav(props.videoUrl)
        }
        setfav(!fav);
    }

    return (
        <Section className="w-100 h-fit">
            <Youtube videoId={props.id_video} opts={opts}/>
            <p className="pt-3">{props.title}</p>
            <div className="flex justify-between">
                <p>{DisplayView(props.views)} vues</p>
                <div className="flex flex-row">
                    <div className="flex items-center">
                        <p className="flex flex-row">
                            {DisplayView(props.like)}
                        </p>
                        <LikeLogo 
                            size={30}
                            fill={clicked ? "blue" : "white"}
                            onClick={handleClick}
                            className="mb-2"
                        />
                    </div>
                    <FavToPage
                        size={30}
                        fill={fav ? "#c6ccd7" : "none"}
                        onClick={SetFavColor}
                    />
                </div>
            </div>
            <p>{props.author}</p>
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
                            like={project.like}
                            author={project.author}
                        />
                    </div>
                ))}
            </Section>
        )
    }
}

export default HomeVideoResult;
