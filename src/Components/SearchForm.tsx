import React, { useState } from 'react';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import SearchIcon from '@mui/icons-material/Search';

const SearchForm = (props:any) => {

    const [searchValue, setSearchValue] = useState("");

    const handleSearchValueChange = (event:any) => {
        setSearchValue(event.target.value);
        props.handleSearchFormSubmit(event.target.value);
    }

    const searchFormSubmit = () => {
        props.handleSearchFormSubmit(searchValue);
    }

    return (
        <>
            <Grid container spacing={2}>
                <Grid item lg={9} md={12} xs={12}>
                    <TextField label="Search task name" variant="standard" fullWidth onChange={(event) => handleSearchValueChange(event)}/>
                </Grid>
                <Grid item lg={3} md={12} xs={12}>
                    <Button variant="contained" fullWidth className="fullHeight" endIcon={<SearchIcon />} onClick={() => searchFormSubmit()}>Search Task</Button>
                </Grid>
            </Grid>
        </>
    )
}

export default SearchForm