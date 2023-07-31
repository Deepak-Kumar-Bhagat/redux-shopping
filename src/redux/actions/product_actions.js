import fakeApi from "../apis/fakeApi";
import { ActionTypes } from "../contants/action-type"

export const FetchProducts =() =>{

    return async(dispatch)=>{
        const res=await fakeApi.get("/products");
        console.log(res);
        dispatch({type:ActionTypes.FETCH_PRODUCT,payload:res.data});
    };
};

export const selectedProduct =(id) =>{

    return async(dispatch)=>{
        const res=await fakeApi.get(`/products/${id}`);
        console.log(res);
        dispatch({type:ActionTypes.FETCH_SINGLE_PRODUCT,payload:res.data});
    };
};

export const removeSelectedProduct =() =>{
    return{
        type:ActionTypes.REMOVE_SELECTED_PRODUCT
    }
};