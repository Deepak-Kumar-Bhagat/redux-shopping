import { ActionTypes } from "../contants/action-type"


const initialState={
    products:[]
}

export const productReducer=(state=initialState,{type,payload})=>{

    switch(type){
        case ActionTypes.SET_PRODUCTS:
            return {...state,products:payload};
        case ActionTypes.FETCH_PRODUCT:
            return {...state,products:payload};
        default:
            return state; 
    }
}

export const selectProductReducer=(state={},{type,payload})=>{
    switch(type){
        case ActionTypes.FETCH_SINGLE_PRODUCT:
            return {...state,product:payload};
        case ActionTypes.REMOVE_SELECTED_PRODUCT:
            return {}
        default:
           return state;
    }
}

