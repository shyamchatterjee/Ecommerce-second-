import { useContext, useState } from "react";
import { Link } from "react-router";
import AddProduct from "./addproduct";
import { Context } from "./appcontext";
import { CiShoppingCart } from "react-icons/ci";
import Search from "./searchcomponent";

let Product = () => {
  let [style, setstyle] = useState("none");
  let [page,setpage] = useState("product")
  let buttons = () => {
    setstyle("");
    if (style == "") {
      setstyle("none");
    }
  };
  let counter = useContext(Context);
  return (
   <>{ counter.mode=="light"?<>  <div className="lightmode-container"><div className="nav">
    <div className="website-name-container">
                          <img src="https://cdn-icons-png.flaticon.com/512/7835/7835563.png"  height={25} width={25} alt="" />
                             <p style={{fontSize:"15px"}}>ShopZone</p>
                     </div>
           <Link to="/"  onClick={()=>{setpage("home")}} className={page=="home"?"active":""} ><p style={{fontSize:"20px"}}>Home</p></Link>
           <Link to="/product"   onClick={()=>{setpage("product")}} className={page=="product"?"active":""}><p style={{fontSize:"20px"}}>Product</p></Link>
           <Search/>
           <Link to="/cart" onClick={()=>{setpage("cart")}} className={page=="cart"?"active":""}  > <div className="cart-length"   ><CiShoppingCart style={{fontSize:"30px"}}/>
                 <p className={counter.cart.length==0?"hide":""}  >{counter.cart.length}</p>
           </div></Link>
               {counter.boolen==true? <img src="https://cdn.iconscout.com/icon/premium/png-256-thumb/half-moon-3884653-3224295.png" height={30} width={30}    onClick={()=>{counter.setMode("dark"),counter.setBoolen(false)}}  style={{cursor:"pointer"}}  alt="" />: <img src="https://cdn4.iconfinder.com/data/icons/multimedia-flat-30px/30/sun_light_mode_day-512.png" height={30} width={30} alt=""  onClick={()=>{counter.setMode("light"),counter.setBoolen(true)}} style={{cursor:"pointer"}} />}
         </div>
         <div className="heading-image">
         
                 <p style={{fontSize:"50px" , color : "palevioletred" }}>Shop Now!!</p>
                 
              
              <img style={{width:"500px" , height:"300px"}} src="https://www.tasteofhome.com/wp-content/uploads/2018/09/woman-buying-produce.jpg"  alt="" />
         </div>
      <div className="productcontener">
        <AddProduct />
      </div> </div></>:<> <div className="darkmode-container"><div className="nav" style={{backgroundColor:"#0F1A20"}}>
    <div className="website-name-container">
                          <img src="https://cdn-icons-png.flaticon.com/512/7835/7835563.png"  height={25} width={25} alt="" />
                             <p style={{fontSize:"15px",color:"white"}}>ShopZone</p>
                     </div>
           <Link to="/"  onClick={()=>{setpage("home")}} className={page=="home"?"active":""} ><p style={{fontSize:"20px",color:"white"}}>Home</p></Link>
           <Link to="/product"   onClick={()=>{setpage("product")}} className={page=="product"?"active":""}><p style={{fontSize:"20px",color:"white"}}>Product</p></Link>
           <Search/>
           <Link to="/cart" onClick={()=>{setpage("cart")}} className={page=="cart"?"active":""}  > <div className="cart-length"   ><CiShoppingCart style={{fontSize:"30px",color:"white"}}/>
                 <p className={counter.cart.length==0?"hide":""} style={{color:"red",fontSize:"10px"}}  >{counter.cart.length}</p>
           </div></Link>
               {counter.boolen==true? <img src="https://cdn.iconscout.com/icon/premium/png-256-thumb/half-moon-3884653-3224295.png" height={30} width={30}    onClick={()=>{counter.setMode("dark"),counter.setBoolen(false)}}  style={{cursor:"pointer"}}  alt="" />: <img src="https://cdn4.iconfinder.com/data/icons/multimedia-flat-30px/30/sun_light_mode_day-512.png" height={30} width={30} alt=""  onClick={()=>{counter.setMode("light"),counter.setBoolen(true)}} style={{cursor:"pointer"}} />}
         </div>
         <div className="heading-image">
         
                 <p style={{fontSize:"50px" , color : "palevioletred" }}>Shop Now!!</p>
                 
              
              <img style={{width:"500px" , height:"300px"}} src="https://www.tasteofhome.com/wp-content/uploads/2018/09/woman-buying-produce.jpg"  alt="" />
         </div>
      <div className="productcontener">
        <AddProduct />
      </div> </div></>
}
    </>
  );
};
export default Product;
