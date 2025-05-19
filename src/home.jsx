import { useContext, useState } from "react";
import { Link, useSearchParams } from "react-router";
import { Context } from "./appcontext";
import AddProduct from "./addproduct";
import { FaRegWindowRestore } from "react-icons/fa";

let Home = () => {
 

  let counter = useContext(Context);

  return <> {counter.mode=="light"? <> 
         
      <div className="light-container-home">

     <div  className="container">
                 <div className="mini-container">
                 
                    <div className="second-part">
                    <div className="website-name-container">
                          <img src="https://cdn-icons-png.flaticon.com/512/7835/7835563.png"  height={25} width={25} alt="" />
                             <p style={{fontSize:"15px"}}>ShopZone</p>
                     </div>
                    <div className="frist-part">
                    <p>Shop Now</p>
                    <p>Multi Products</p>
                    </div>
                    <Link to="/product"><button className="shoop-now-button"> <FaRegWindowRestore/> Visit Store</button></Link>
                    </div>
                    <img className="home-img" src="https://images-na.ssl-images-amazon.com/images/I/91siwFKSq8L.jpg" width="400px" height="400px"     alt="" />
                           
                  
                 </div>
      </div> </div>
    </> : <>  <div className="dark-container-home">

       <div className="container">
                 <div className="mini-container" style={{backgroundColor:"#0F1A20"}}>
                 
                    <div className="second-part">
                    <div className="website-name-container">
                          <img src="https://cdn-icons-png.flaticon.com/512/7835/7835563.png"  height={25} width={25} alt="" />
                             <p style={{fontSize:"15px" , color:"white"}}>ShopZone</p>
                     </div>
                    <div className="frist-part">
                    <p style={{color:"white"}} >Shop Now</p>
                    <p  style={{color:"white"}} >Multi Products</p>
                    </div>
                    <Link to="/product"><button className="shoop-now-button"> <FaRegWindowRestore/> Visit Store</button></Link>
                    </div>
                    <img className="home-img" src="https://images-na.ssl-images-amazon.com/images/I/91siwFKSq8L.jpg" width="400px" height="400px"     alt="" />
                           
                  
                 </div>
      </div> </div>
    </>
  
  }</>
   
};
export default Home;
