import SearchIcon from '@mui/icons-material/Search';
import Paper from '@mui/material/Paper';
import InputBase from '@mui/material/InputBase';
import IconButton from '@mui/material/IconButton';
import ResearchVideo from "@/pages/home/ResearchVideo";
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

export type SearchArray = {
    "views": number
    "videoUrl": string
    "title": string
    "thumbnailUrl": string
    "description": string
}

export var s_ARRAY: SearchArray[] = [];

export const SearchBar = () => {

    const [value_str, setValue] = useState('');
    const navigate = useNavigate();
    const handleSearchChange = (event: any, values: string) => {
        setValue(values)
    }

    const HandleClick = async () => {
        try {
            const response = await ResearchVideo(value_str);
            if (!response || !response.data) {
                console.error("An error occure during the call of SearchButton function");
                return (
                    <div className="flex-grow flex flex-col justify-center">
                        <p className="text-center text-gray-600">Cannot find any Home Video. Try to Refresh</p>
                    </div>
                )
            }
            s_ARRAY = response.data;
            console.log(s_ARRAY);
            return (
                // Redirect to /home/search/video automatically when
                // the program arrive here
                navigate('/home/search/video')
            )
        } catch (error) {
            console.error("An error occure during the call of SearchButton function");
            return (
                <div className="flex-grow flex flex-col justify-center">
                    <p className="text-center text-gray-600">Cannot find any Home Video. Try to Refresh</p>
                </div>
            )
        }
    }
    
    return (
        <div className="search w-100 pl-20 pr-20">
            <Paper
                component="form"
                sx={{
                    p: '2px 4px',
                    display: 'flex',
                    alignItems: 'center',
                    border: 1,
                    borderColor: '#c6ccd7',
                    borderRadius: 4,
                }}
                style={{ backgroundColor: '#21252B'}}
            >
            <InputBase
                sx={{ ml: 1, flex: 1 }}
                placeholder="Search"
                inputProps={{ 'aria-label': 'search' }}
                style={{ color: '#c6ccd7', backgroundColor: "#21252B" }}
                value={value_str}
                onChange={(event) => handleSearchChange(event, event.target.value)}
            />
            <IconButton
                type="button"
                sx={{ p: '10px', color: "#c6ccd7" }}
                aria-label="search"
                onClick={() => HandleClick()}
            >
                <SearchIcon />
            </IconButton>
        </Paper>
        </div>
    )
};

export const value_str = '';
