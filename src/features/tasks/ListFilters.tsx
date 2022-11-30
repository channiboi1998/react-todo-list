import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';

const ListFilters = (props: any) => {

    return (
        <Grid className="box-filter grid-center" item lg={4} md={12} xs={12}>
            <Button 
                variant={props.selectedFilter === "all" ? "outlined" : "text"}
                onClick={() => props.setSelectedFilter("all")}
            >All</Button>
            <Button 
                variant={props.selectedFilter === "active" ? "outlined" : "text"}
                onClick={() => props.setSelectedFilter("active")}
            >Active</Button>
            <Button 
                variant={props.selectedFilter === "completed" ? "outlined" : "text"}
                onClick={() => props.setSelectedFilter("completed")}
            >Completed</Button>
        </Grid>
    )
}

export default ListFilters