import { useEffect, useState } from "react";
import GetHomeVideo from "./GetHomeVideo";
import { s_ARRAY, SearchArray } from "./SearchBar";
import HomeVideoResult from "./DisplayHomeVideo";
import { Section } from "@/components/Section";

export var h_ARRAY: SearchArray[] = [];


export const DisplayHomeVideo = () => {
    // Display HomeVideoResult component with fetched data
    return (
        <Section>
            <HomeVideoResult h_ARRAY={h_ARRAY} />
        </Section>
    );
};

export const FetchVideoHome = () => {

    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);

    useEffect(() => {
        let ignore = false;

        const fetchHomeVideo = async () => {
            try {
                const response = await GetHomeVideo();
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

        fetchHomeVideo();

        return () => {
            DisplayHomeVideo();
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
};
