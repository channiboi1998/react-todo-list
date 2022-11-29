import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';

const ListFilters = () => {
    return (
        <Grid className="box-filter grid-center" item lg={4} md={12} xs={12}>
            <Button variant='outlined'>All</Button>
            <Button variant='text'>Active</Button>
            <Button variant='text'>Completed</Button>
        </Grid>
    )
}

export default ListFilters