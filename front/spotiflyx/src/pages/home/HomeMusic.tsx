import { useEffect, useState } from "react";
import GetHomeMusic from "./GetHomeMusic";
import HomeVideoResult from "./DisplayHomeVideo";
import { Section } from "@/components/Section";
import { useNavigate } from "react-router-dom";
import HomeMusicResult from "./DisplayHomeMusic";

export type Artists = {
    "MainArtist" : string
    "SecondArtist" : string
}

export type MusicArray = {
    "title": string
    "artists": Artists
    "album": string
    "trackUrl": string
    "previewUrl": string
    "uri" : string
}

export var h_ARRAY: MusicArray[] = [];

export const FetchMusicHome = () => {

    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);
    const navigate = useNavigate();

    useEffect(() => {
        let ignore = false;

        const fetchMusicHome = async () => {
            try {
                const response = await GetHomeMusic();
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

        fetchMusicHome();

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
                <p className="text-center text-gray-600">Cannot find any Home Video</p>
            </div>
        );
    }

    return (
        <Section>
            <HomeMusicResult h_ARRAY={h_ARRAY} />
        </Section>
    )
};
