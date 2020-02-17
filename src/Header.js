import React, {useEffect} from 'react';
import {connect} from 'react-redux';
import {AppBar, Button, IconButton, Toolbar, Typography, Badge} from "@material-ui/core";
import {Link} from "react-router-dom";
import {makeStyles} from "@material-ui/core/styles";
import {getItems} from "./store/thunks";

const useStyles = makeStyles(theme=>({
    root:{
        flexGrow: 1
    },
    homeButton: {
        marginRight: theme.spacing(2)
    },
    top5:{
        textAlign: 'center',
        flexGrow: 1
    }
}));


const Header = ({cartItemsQty, getProducts, history}) =>{
    const classes = useStyles();
    useEffect(()=>{
        getProducts();
    },[])

    return( <div className={classes.root}>
        <AppBar position="static">
            <Toolbar>
                <Button edge="start" className={classes.homeButton} color="inherit" aria-label="menu">
                    <Link to={'/'}>
                        Home
                    </Link>
                </Button>
                <Typography variant="h6" className={classes.top5}>
                    Top 5
                </Typography>
                <IconButton aria-label="show 4 new mails" color="inherit">
                    <Badge badgeContent={cartItemsQty} color="secondary">
                        <Link to={'/cart'} style={{textDecoration: 'none'}}>
                            <Typography variant='h6' color="inherit">
                                Cart
                            </Typography>
                        </Link>
                    </Badge>
                </IconButton>

            </Toolbar>
        </AppBar>
    </div>)
};

const mapStateToProps = (state)=> ({
    cartItemsQty: Object.values(state.cart.data).reduce((acc,el)=>acc+el,0)
});

const mapDispatchToProps = dispatch =>({
    getProducts: dispatch(getItems())
})

export default connect(mapStateToProps, mapDispatchToProps)(Header)
