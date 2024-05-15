import { Section } from "@/components/Section"
import React, { useState, useEffect } from 'react';
import { MusicArray } from "./HomeMusic";
import { LikeLogo } from "@/components/images/LikeLogo";
import { FavToPage } from "@/components/images/FavToPage";
import SpotifyPlayer from 'react-spotify-web-playback';
import dotenv from 'dotenv';

dotenv.config();

interface SpotifyPlayerProps {
    token: string;
    uris: string;
}

const SpotifyPlayerComponent: React.FC<SpotifyPlayerProps> = ({ token, uris }) => {
    console.log("TOKEN = " + token);
    console.log("URIS = " + uris);

    return (
        <SpotifyPlayer
            token={token}
            uris={uris}
            styles={{
                activeColor: '#1DB954',
                bgColor: '#121212',
                color: '#FFFFFF',
                loaderColor: '#1DB954',
                sliderColor: '#1DB954',
                trackArtistColor: '#FFFFFF',
                trackNameColor: '#FFFFFF',
            }}
        ></SpotifyPlayer>
    )
}

const SectionHomeMusic = (props: MusicArray) => {
    
    const opts = {
        width: '498',
        height: '280',
    };

    const [clicked, setClicked] = useState(false);
    const [fav, setfav] = useState(false);
    const [token, setToken] = useState<string>('');

    const CLIENT_ID = "08747758e9484e119c9997ef5ff73020";
    const CLIENT_SECRET = "8b5d22cb4c5140ed9d314b94b7aba7ef";

    const handleClick = () => {
        setClicked(!clicked);
    };

    const SetFavColor = () => {
        setfav(!fav);
    }

    async function getAccessToken() {
        console.log("HEREEE: " + CLIENT_ID);
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

    return (
        <Section className="w-100 h-fit">
            {token && <SpotifyPlayerComponent token={token} uris={props.trackUrl} />}
            <div className="flex justify-between">
                <div className="flex flex-row">
                    <div className="flex items-center">
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
      </Section>
    )
}

const HomeMusicResult = ({ h_ARRAY }: { h_ARRAY: MusicArray[] }) => {

    if (h_ARRAY) {
        return (
            <Section className="w-100 grid grid-cols-2 grid-rows-4 gap-4">
                {h_ARRAY.map((project, index) => (
                    <div
                        key={index}
                    >
                        <SectionHomeMusic
                            title={project.title}
                            artists={project.artists}
                            album={project.album}
                            trackUrl={project.trackUrl}
                            previewUrl={project.previewUrl}
                        />
                    </div>
                ))}
            </Section>
        )
    }
}

export default HomeMusicResult;
