import SearchIcon from '@mui/icons-material/Search';
import Paper from '@mui/material/Paper';
import InputBase from '@mui/material/InputBase';
import IconButton from '@mui/material/IconButton';
import ResearchVideo from "@/pages/home/ResearchVideo";
import { useState } from 'react';
import DisplaySearchVideo from './DisplayVideoSearch';

export type SearchArray = {
  "token": string
  "title": string
  "description": string
  "thumbnailUrl": string
  "videoUrl": string
  "views": number
}

export const SearchBar = () => {

  const [value_str, setValue] = useState('');
  const [returnSearch, setReturnSearch] = useState([]);

  const handleSearchChange = (event: any, values: string) => {
      setValue(values)
  }

  const handleSearchButton = async (search_str: string) => {
      try {
        const response = await ResearchVideo(search_str);
        if (!response) {
          console.error("An error occure during the call of SearchButton function");
          setReturnSearch([]);
          return -1;
        }
        setReturnSearch(response);
        return 0;
      } catch (error) {
        console.error("An error occure during the call of SearchButton function");
        setReturnSearch([]);
        return -1;
      }
  }
  console.log(returnSearch);

  if (returnSearch.length !== 0) {
    return (
      <DisplaySearchVideo data={returnSearch}/>
    );
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
          onClick={() => handleSearchButton(value_str)}
        >
          <SearchIcon />
        </IconButton>
      </Paper>
    </div>
  )
};
