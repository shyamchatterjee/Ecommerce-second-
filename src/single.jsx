import { useContext, useEffect, useState } from "react";
import { Link, useParams } from "react-router";
import axios from "axios";
import { Context } from "./appcontext";
import Button from "./buttonadd";
import { CiShoppingCart } from "react-icons/ci";

let Single = () => {
  let allperams = useParams();
  console.log(allperams);
  let [array, setarray] = useState({});
  let counter = useContext(Context);
  useEffect(() => {
    let api = async () => {
      let responce = await axios.get(
        "https://dummyjson.com/products/" + allperams.elementid
      );
      console.log(responce.data)
      setarray(responce.data);
    };
    api();
  }, []);

  
  return (
   <> <div className="nav">
    <div className="website-name-container">
                          <img src="https://cdn-icons-png.flaticon.com/512/7835/7835563.png"  height={25} width={25} alt="" />
                             <p style={{fontSize:"15px"}}>ShopZone</p>
                     </div>
           <Link to="/"><p style={{fontSize:"20px"}}>Home</p></Link>
           <Link to="/product"><p style={{fontSize:"20px"}}>Product</p></Link>
          
           <Link to="/cart"> <div className="cart-length"><CiShoppingCart style={{fontSize:"30px"}}/>
                 <p className={counter.cart.length==0?"hide":""}  >{counter.cart.length}</p>
           </div></Link>
         </div>
      
      <div className="singlecontainer">
      
          <div className="product" style={{marginTop:"1rem"}}>
            <img src={array?.images} height={200} width={200} alt="" />
            <h3 style={{ color: "black" }}>{array?.category}</h3>
            <p>{array?.description}</p>
            <p style={{ color: "red" }}>{array?.title}</p>
            <h4 style={{ color: "black" }}>{array?.brand}</h4>
                
                  <p>{ "**** "  + array?.rating+  " rating"  }</p>
            <p style={{ color: "green" }}>{"Rs. " + array?.price}</p>
                <Button/>
          </div>
        
      </div>
      
    
    </>
  );
};
export default Single;
