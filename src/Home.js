import React from 'react';

import {Grid,Paper} from "@material-ui/core";
import {makeStyles} from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
    root: {
        flexGrow: 1,
    },
    paper: {
        padding: theme.spacing(2),
        textAlign: 'center',
        color: theme.palette.text.secondary,
    },
}));
const Home = () =>{

    const classes = useStyles();
    return (
        <>
    <Grid container spacing={3}>
        <Grid item xs>
            <Paper className={classes.paper} xs={4}>xs</Paper>
        </Grid>
        <Grid item xs>
            <Paper className={classes.paper} xs={4}>xs</Paper>
        </Grid>
        <Grid item xs>
            <Paper className={classes.paper} xs={4} >xs</Paper>
        </Grid>
        <Grid item xs>
            <Paper className={classes.paper} xs={4}>xs</Paper>
        </Grid>
        <Grid item xs>
            <Paper className={classes.paper} xs={4} >xs</Paper>
        </Grid>
    </Grid>
        <Grid container spacing={3}>
            <Grid item xs>
                <Paper className={classes.paper} xs={4}>xs</Paper>
            </Grid>
            <Grid item xs>
                <Paper className={classes.paper} xs={4} >xs</Paper>
            </Grid>
        </Grid>
            </>
    )
}


export default Home
