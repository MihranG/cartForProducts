import {setLoading, setProducts} from "./store";

export const getItems = ()=>{
    return (dispatch, getState)=>{
        dispatch(setLoading(true));
        return ()=> fetch('https://private-3efa8-products123.apiary-mock.com/products').then(res=>
            res.json()
        ).then(data=>{
            dispatch(setProducts(data.products));
            return data
        }).catch(e =>{
            console.error(e)
        })
    }
}
