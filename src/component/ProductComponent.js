import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import {Link} from "react-router-dom";

function ProductComponent(){

    const [list,setList]=useState([]);
    const products=useSelector((state)=>state.allProducts.products);

    useEffect(()=>{
      if(products)
      setList(products);
    },[products])

    return(
        <>
        {list?.map((ele)=>{
           return(
            <div className="four wide column" >
            <Link to={`/product/${ele?.id}`}>
            <div className="ui link cards">  
                <div className="card">
                   <div className="image">
                    <img src={ele?.image}></img>
                   </div>
                   <div className="content">
                       <div className="header">{ele?.title}</div>
                       <div className="meta price">${ele?.price}</div>
                       <div className="meta">{ele?.category}</div>
                   </div>
                </div>
            </div>
            </Link>
            </div>
           )
        })}
        </>        
    )
}

export default ProductComponent;