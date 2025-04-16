import { useContext, useState } from "react";
import { Link } from "react-router";
import AddProduct from "./addproduct";
import { Context } from "./appcontext";
import { CiShoppingCart } from "react-icons/ci";
import Search from "./searchcomponent";

let Product = () => {
  let [style, setstyle] = useState("none");
  let buttons = () => {
    setstyle("");
    if (style == "") {
      setstyle("none");
    }
  };
  let counter = useContext(Context);
  return (
   <>
    <div className="nav">
    <div className="website-name-container">
                          <img src="https://cdn-icons-png.flaticon.com/512/7835/7835563.png"  height={25} width={25} alt="" />
                             <p style={{fontSize:"15px"}}>ShopZone</p>
                     </div>
           <Link to="/"><p style={{fontSize:"20px"}}>Home</p></Link>
           <Link to="/product"><p style={{fontSize:"20px"}}>Product</p></Link>
           <Search/>
           <Link to="/cart"> <div className="cart-length"><CiShoppingCart style={{fontSize:"30px"}}/>
                 <p className={counter.cart.length==0?"hide":""}  >{counter.cart.length}</p>
           </div></Link>
         </div>
         <div className="heading-image">
         
                 <p style={{fontSize:"50px" , color : "palevioletred" }}>Shop Now!!</p>
                 
              
              <img style={{width:"500px" , height:"300px"}} src="https://www.tasteofhome.com/wp-content/uploads/2018/09/woman-buying-produce.jpg"  alt="" />
         </div>
      <div className="productcontener">
        <AddProduct />
      </div>
    </>
  );
};
export default Product;
