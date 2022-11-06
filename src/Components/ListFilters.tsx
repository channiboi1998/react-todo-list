import React from 'react';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';

const ListFilters = (props:any) => {

    const handleFilterClick = (selectedFilter:any) => {
        props.handleFilterChange(selectedFilter);
    }

    return (
        <>
            <Grid className="box-filter grid-center" item lg={4} md={12} xs={12}>
                <Button variant={props.selectedFilter === "all" ? 'outlined' : 'text'} 
                    onClick={() => handleFilterClick("all")}>
                        All
                </Button>
                <Button variant={props.selectedFilter === "active" ? 'outlined' : 'text'} 
                    onClick={() => handleFilterClick("active")}>
                        Active
                </Button>
                <Button variant={props.selectedFilter === "completed" ? 'outlined' : 'text'} 
                    onClick={() => handleFilterClick("completed")}>
                        Completed
                </Button>
            </Grid>
        </>
    )
}

export default ListFilters