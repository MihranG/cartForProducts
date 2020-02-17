import { configureStore, createSlice } from "@reduxjs/toolkit";
import { combineReducers } from "redux";

const productsSlice = createSlice({
    name: 'products',
    initialState: {data:[], isLoading: false},
    reducers: {
        setProducts(state, action){
            state.data = action.payload
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
    initialState : {},
    reducers: {
        addProductToCart(state,action){
            const {id, product} = action.payload;
            state[id] = product
        },
        editProduct(state, action){
            const {id, productFields} = action.payload;
            state[id] = {...state[id], productFields};
        },
        deleteProduct(state, action){
            const {id} = action.payload;
            delete state[id]
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
console.log('rootReducer', rootReducer, configureStore({reducer: rootReducer}))

export const store = configureStore({reducer: rootReducer});

export const {
    actions: {setProducts, deleteProducts, setLoading}
} = productsSlice;

export const {
    actions: {addProductToCart, editProduct, deleteProduct}
} = cartSlice;
