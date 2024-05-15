import { useEffect, useState } from "react";
import GetUploadedVideo from "./GetUploadedVideo";
import { Section } from "@/components/Section";
import { useNavigate } from "react-router-dom";
import { UploadedVideo } from "./Home";
import UploadedVideoResult from "./DisplayUploadedVideo";

export var h_ARRAY: UploadedVideo[] = [];

export const FetchUploadedVideo = () => {

    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);
    const navigate = useNavigate();

    useEffect(() => {
        let ignore = false;

        const fetchUploadedVideo = async () => {
            try {
                const response = await GetUploadedVideo();
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

        fetchUploadedVideo();

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
                <p className="text-center text-gray-600">Cannot find any Uploaded Video</p>
            </div>
        );
    }

    return (
        <Section className="h-full w-fit p-0 flex justify-between">
            <UploadedVideoResult h_ARRAY={h_ARRAY} />
        </Section>
    )
};
