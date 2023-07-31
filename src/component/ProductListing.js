import {useDispatch, useSelector} from "react-redux";
import ProductComponent from "./ProductComponent";
import axios from 'axios';
import { useEffect } from "react";
import {FetchProducts, setProducts} from "../redux/actions/product_actions";

function ProductListing(){
    const dispatch=useDispatch();
    const products=useSelector((state)=>state.allProducts.products);
    console.log(products);

    // const fetchProduct=async()=>{
    //     try {
    //         const res=await axios.get("https://fakestoreapi.com/products");
    //         console.log(res.data);
    //         dispatch(setProducts(res.data));
    //     } catch (error) {
    //         console.log(error);
    //     }
    // }

    useEffect(()=>{
        // fetchProduct();
        dispatch(FetchProducts());
    },[])

    return(
        <>
        <div className="ui grid container" style={{marginTop:"30px"}}>
           <ProductComponent/>
        </div>
        </>
    )
}

export default ProductListing;