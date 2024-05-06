import { useEffect, useState } from "react";
import GetHomeVideo from "./GetHomeVideo";
import { SearchArray } from "./SearchBar";
import HomeVideoResult from "./DisplayHomeVideo";
import { Section } from "@/components/Section";
import { useNavigate } from "react-router-dom";

export var h_ARRAY: SearchArray[] = [];


export const DisplayHomeVideo = () => {
    // Display HomeVideoResult component with fetched data
    return (
        <Section>
            <p>This is a test</p>
            <HomeVideoResult h_ARRAY={h_ARRAY} />
        </Section>
    );
};

export const FetchVideoHome = () => {

    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);
    const navigate = useNavigate();

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
            <HomeVideoResult h_ARRAY={h_ARRAY} />
        </Section>
    )
};
