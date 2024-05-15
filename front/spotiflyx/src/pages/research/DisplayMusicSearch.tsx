import { Section } from "@/components/Section"
import React from 'react';
import { MusicArray, SearchArray } from "../home/SearchBar";
import Youtube from 'react-youtube';
import { useState, useEffect } from "react";

const DisplaySearchMusic = (props: MusicArray) => {

    if (!props.uri) {
        return (
            <p>Music not found</p>
        )
    }

    console.log("URIS = " + props.uri);
    const trackId = props.uri.split(':')[2];
    console.log("TRACK ID = " + trackId);
    const embeded_url = `https://open.spotify.com/embed/track/${trackId}?utm_source=generator`;

    console.log("embeded url = " + embeded_url);


    return (
        <div className="rounded-lg overflow-hidden">
            <iframe
                src={embeded_url}
                width="100%"
                height="152"
                frameBorder="0"
                allowFullScreen
                allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                loading="lazy"
                className="w-full h-152"
            ></iframe>
        </div>
    )
}

const SearchMusicResult = ({ mu_ARRAY }: { mu_ARRAY: MusicArray[] }) => {

    const [token, setToken] = useState<string>('');

    const CLIENT_ID = "08747758e9484e119c9997ef5ff73020";
    const CLIENT_SECRET = "8b5d22cb4c5140ed9d314b94b7aba7ef";

    async function getAccessToken() {
        const authString = Buffer.from(`${CLIENT_ID}:${CLIENT_SECRET}`).toString('base64');
        const response = await fetch('https://accounts.spotify.com/api/token', {
            method: 'POST',
            headers: {
                'Authorization': `Basic ${authString}`,
                'Content-Type': 'application/x-www-form-urlencoded'
            },
            body: 'grant_type=client_credentials'
        });
        const data = await response.json();
        return data.access_token;
    }

    useEffect(() => {
        const fetchToken = async () => {
            try {
                const SpotifyToken = await getAccessToken();
                setToken(SpotifyToken);
            } catch (error) {
                console.error('Error fetching token:', error);
            }
        };

        fetchToken();
    }, []); 

    if (mu_ARRAY) {
        return (
            <Section className="w-100 grid grid-cols-2 grid-rows-4 gap-4">
                {mu_ARRAY.map((project, index) => (
                    <div
                        key={index}
                        className={`row-start-${Math.floor(index / 4) + 1}`}
                    >
                        {token && <DisplaySearchMusic uri={project.uri}/>}
                    </div>
                ))}
            </Section>
        )
    }
}

export default SearchMusicResult;