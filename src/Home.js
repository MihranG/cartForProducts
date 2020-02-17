import React from 'react';
import {connect} from 'react-redux';

import {GridList,GridListTile, ListSubheader, GridListTileBar, IconButton} from "@material-ui/core";
import {makeStyles} from "@material-ui/core/styles";
import AddCircleIcon from '@material-ui/icons/AddCircle';

import {addProductToCart, editProduct} from './store/store'

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
const Home = ({products, addToCart, editProduct}) =>{
    const classes = useStyles();

    const addToCardHandler = (product)=>{
        addToCart(product.productID);
        editProduct(product.productID,{unitsInStock: product.unitsInStock - 1})
    };
    return (
        <GridList cellHeight={180} className={classes.gridList} cols={3}>
            <GridListTile key="Subheader" cols={3} style={{ height: 'auto' }}>
                <ListSubheader component="div">Products</ListSubheader>
            </GridListTile>
            {products.map(tile => (
                <GridListTile key={tile.productID} cols={1}>
                    <img src={tile.image} alt={tile.name} />
                    <GridListTileBar
                        title={tile.name}
                        subtitle={<span>price: {tile.unitPrice}$ qty: {tile.unitsInStock}</span>}
                        actionIcon={
                            <IconButton color={"secondary"} disabled={tile.unitsInStock === 0} aria-label={`add to Cart ${tile.productID}`} className={classes.icon}
                                        onClick={()=> addToCardHandler(tile)}>
                                <AddCircleIcon/>
                            </IconButton>
                        }
                    />
                </GridListTile>
            ))}
        </GridList>
    )
};

const mapStateToProps = state =>({
    products: Object.values(state.products.data)
});

const mapDispatchToProps = dispatch =>({
    addToCart: (productID)=> dispatch(addProductToCart({id: productID})),
    editProduct: (productID, newFields) => {
        return dispatch(editProduct({id: productID, newFields}))}
});



export default connect(mapStateToProps, mapDispatchToProps)(Home)
