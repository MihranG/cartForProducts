import React from 'react';
import {connect} from 'react-redux';
import {TableContainer, Paper, Table, TableHead,
    TableRow, TableCell, TableBody, IconButton,
    Button, ButtonGroup, Typography
} from "@material-ui/core";
import {makeStyles} from "@material-ui/core/styles";
import DeleteIcon from '@material-ui/icons/Delete';


import {deleteProduct, addProductToCart, editProduct, removeProductFromCart} from "./store/store";


const useStyles = makeStyles({
    table: {
        minWidth: 650,
    },
    tableRow: {
        width: '100%'
    },
    tableBody: {
        width: '100%'
    },
    quantity :{
        padding: 0
    }

});

const Cart = ({cartData, products, deleteItemFromCart, addToCart, editProduct, removeProductFromCart})=>{
    const classes = useStyles();

    const onIncrement = (product, isIncrement) =>{
        const {productID, unitsInStock} = product;
       if(isIncrement){
            addToCart(productID);
            editProduct(productID, {unitsInStock: unitsInStock - 1})
        }else{
            removeProductFromCart(productID);
            editProduct(productID, {unitsInStock: unitsInStock + 1})
        }
    };
    return (
        <>
            <TableContainer component={Paper}>
                <Table className={classes.table} aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <TableCell>Id</TableCell>
                            <TableCell align="left">Name</TableCell>
                            <TableCell align="left">Price</TableCell>
                            <TableCell align="left">Quantity</TableCell>
                            <TableCell align="right">delete</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody className={classes.tableBody}>
                        {Object.keys(cartData).map(id => {
                            const row = products[id];
                            return(
                                <TableRow key={row.productID} className={classes.tableRow}>
                                    <TableCell component="th" scope="row">
                                        {row.productID}
                                    </TableCell>
                                    <TableCell align="left">{row.name} left: {row.unitsInStock}</TableCell>
                                    <TableCell align="left">{row.unitPrice}$</TableCell>

                                    <TableCell align="left">
                                        <ButtonGroup>
                                            <Button
                                                disabled={row.unitsInStock === 0}
                                                onClick={()=>onIncrement(row, true)}
                                            >+</Button>
                                            <Button disabled>
                                                <Typography component='h6'>
                                                    {cartData[id]}
                                                </Typography>
                                            </Button>
                                            <Button disabled={cartData[id]< 2} onClick={()=>onIncrement(row, false)}
                                            >-</Button>
                                        </ButtonGroup>
                                    </TableCell>
                                    <TableCell align="right">
                                        <IconButton  onClick={()=>deleteItemFromCart(id)}>
                                            <DeleteIcon/>
                                        </IconButton>
                                    </TableCell>
                                </TableRow>
                            )})}
                    </TableBody>
                </Table>
            </TableContainer>
        </>
    )
}

const mapStateToProps = (state) =>({
    products: state.products.data,
    cartData: state.cart.data
});

const mapDispatchToProps = (dispatch)=>({
    deleteItemFromCart: (id)=>dispatch(deleteProduct(id)),
    removeProductFromCart: (productID)=> dispatch(removeProductFromCart({id: productID})),
    addToCart: (productID)=> dispatch(addProductToCart({id: productID})),
    editProduct: (productID, newFields) => {
        return dispatch(editProduct({id: productID, newFields}))}

});

export default connect(mapStateToProps, mapDispatchToProps)(Cart)
