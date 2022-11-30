import { useState, useEffect } from 'react';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import SearchIcon from '@mui/icons-material/Search';

const SearchForm = (props: any) => {

    const [value, setValue] = useState("");

    const handleSearchSubmit = () => {
        props.setSearchValue(value);
    }

    /***
     * Creating this useEffect just for the purpose of removing the `search-value` on App component when this component unmounts.
     */
    useEffect(() => {
        return () => props.setSearchValue("");
    }, []);

    return (
        <Grid container spacing={2} p={2}>
            <Grid item lg={9} md={12} xs={12}>
                <TextField 
                    label="Search task name" 
                    variant="standard" 
                    fullWidth 
                    onChange={(e) => setValue(e.currentTarget.value)}
                />
            </Grid>
            <Grid item lg={3} md={12} xs={12}>
                <Button 
                    variant="contained" 
                    fullWidth 
                    className="fullHeight" 
                    endIcon={<SearchIcon />}
                    onClick={() => handleSearchSubmit()}
                >Search Task</Button>
            </Grid>
        </Grid>
    )
}

export default SearchForm