import axios from 'axios';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import {removeSelectedProduct, selectedProduct} from "../redux/actions/product_actions";

function ProductDetails(){

    const product=useSelector((state)=>state?.product?.product);
    const {id}=useParams();
    const dispatch=useDispatch();

    // const fetchSingleProduct=async()=>{
    //     try {
    //         const res=await axios.get(`https://fakestoreapi.com/products/${id}`);
    //         console.log(res.data);
    //         dispatch(selectedProduct(res.data));
    //     } catch (error) {
    //         console.log(error);
    //     }
    // }

    useEffect(()=>{
     //fetchSingleProduct();
     dispatch(selectedProduct(id));
       return ()=>{
        dispatch(removeSelectedProduct());
       }
    },[])

    return(
        <>
        {!product?<h1 style={{margin:"40px"}}>loading...</h1>:
        <div className='ui grid container' style={{marginTop:"30px"}}>
            <div className='ui placeholder segment'>
                <div className='ui two column stackable center aligned grid'>
                    <div className='ui vertical divider'>
                        AND
                    </div>
                    <div className='column lp'>
                        <img className='ui fluid image' src={product?.image}></img>
                    </div>
                    <div className='column rp'>
                        <h1>{product?.title}</h1>
                        <h2><a className='ui teal tag label'>${product?.price}</a></h2>
                        <h3 className='ui brown block header'>{product?.category}</h3>
                        <p>{product?.description}</p>
                        <div className='ui vertical animated button' tabIndex="0">
                            <div className='hidden content'>
                                <i className='shop icon'></i>
                            </div>
                            <div className='visible content'>Add To Cart</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        }
        </>
    )
}

export default ProductDetails;