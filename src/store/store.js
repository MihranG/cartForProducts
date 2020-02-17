import { configureStore, createSlice } from "@reduxjs/toolkit";
import { combineReducers } from "redux";

const productsSlice = createSlice({
    name: 'products',
    initialState: {data:{}, isLoading: false},
    reducers: {
        setProducts(state, action){
            state.data = action.payload.reduce((acc,el)=>{
                acc[el.productID] = el;
                return acc
            },{})
        },
        editProduct(state, action){
            const {id, newFields} = action.payload;
            state.data[id] = {...state.data[id], ...newFields}
        },
        deleteProducts(state, action){
            state.data = []
        },
        setLoading(state, action){
            state.isLoading = action.payload
        }
    }
});


const cartSlice = createSlice({
    name: 'cart',
    initialState : {data:{}},
    reducers: {
        addProductToCart(state,action){
            const {id} = action.payload;
            if(state.data[id]){
                state.data[id]++
            }else{
                state.data[id] = 1
            }
        },
        removeProductFromCart(state,action){
            const {id} = action.payload;
            if(state.data[id] && state.data[id]>1){
                state.data[id]--
            }else if(state.data[id]){
                delete state.data[id]
            }else{
                console.error('there is no such item in cart ')
            }
        },
        editProduct(state, action){
            const {id, newQty} = action.payload;
            state.data[id] = newQty;
        },
        deleteProduct(state, action){
            delete state.data[action.payload]
        }
    }
});
//
// const loadingSlice = createSlice({
//     name: 'loading',
//     initialState: false,
//     reducers:{
//         setLoading(state, action) {
//             const {loadingState} = action.payload;
//             state.loadingState = loadingState
//         }
//     }
// })



const rootReducer = combineReducers({
    products: productsSlice.reducer,
    cart: cartSlice.reducer,
});

export const store = configureStore({reducer: rootReducer});

export const {
    actions: {setProducts, deleteProducts, setLoading, editProduct}
} = productsSlice;

export const {
    actions: {addProductToCart, deleteProduct,removeProductFromCart }
} = cartSlice;
