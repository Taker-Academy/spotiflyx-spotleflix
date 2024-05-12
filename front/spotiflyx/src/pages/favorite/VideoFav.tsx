import { Section } from "@/components/Section"
import FavVideoResult from "./DiplayFavVideo";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import GetVideoFav from './GetVideoFav';

export type VideofavH = {
    "id_video": string
}

export var h_ARRAY: VideofavH[] = [];

export const FetchVideoFav = () => {

    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);
    const navigate = useNavigate();

    useEffect(() => {
        let ignore = false;

        const fetchFavVideo = async () => {
            try {
                const response = await GetVideoFav();
                if (!ignore) {
                    if (!response || !response.data) {
                        setError(true);
                    } else {
                        h_ARRAY = response.data;
                    }
                }
            } catch (error) {
                console.error("An error occurred during the call of SearchButton function", error);
                setError(true);
            } finally {
                setLoading(false);
            }
        };

        fetchFavVideo();

        return () => {
            ignore = false;
        };
    }, []);

    if (loading) {
        // Display loading indicator
        return (
            <div className="flex-grow flex flex-col justify-center">
                <p className="text-center text-gray-600">Loading...</p>
            </div>
        )
    }

    if (error) {
        // Display error message
        navigate('/login');
        return (
            <div className="flex-grow flex flex-col justify-center">
                <p className="text-center text-gray-600">An error occurred. Please try again later.</p>
            </div>
        );
    }

    if (!h_ARRAY.length) {
        // Display message if h_ARRAY is empty
        return (
            <div className="flex-grow flex flex-col justify-center">
                <p className="text-center text-gray-600">Cannot find any Fav Video</p>
            </div>
        );
    }

    return (
        <Section>
            <FavVideoResult h_ARRAY={h_ARRAY} />
        </Section>
    )
};


export const VideoFav = () => {
    return (
        <Section className="w-50">
            <h3 className="text-center">Videos</h3>
            <FetchVideoFav/>
        </Section>
    )
}
