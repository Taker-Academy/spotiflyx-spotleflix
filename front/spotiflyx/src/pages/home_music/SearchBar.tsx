import SearchIcon from '@mui/icons-material/Search';
import Paper from '@mui/material/Paper';
import InputBase from '@mui/material/InputBase';
import IconButton from '@mui/material/IconButton';

export const SearchBar = () => {
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
          />
          <IconButton type="button" sx={{ p: '10px', color: "#c6ccd7" }} aria-label="search">
            <SearchIcon />
          </IconButton>
        </Paper>
      </div>
  )
};
