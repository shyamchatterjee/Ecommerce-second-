import { useContext, useState } from "react";
import { Link, useSearchParams } from "react-router";
import { Context } from "./appcontext";
import AddProduct from "./addproduct";
import { FaRegWindowRestore } from "react-icons/fa";
let Home = () => {
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
        <div  className="container">
                 <div className="mini-container">
                 
                    <div className="second-part">
                    <div className="website-name-container">
                          <img src="https://cdn-icons-png.flaticon.com/512/7835/7835563.png"  height={25} width={25} alt="" />
                             <p style={{fontSize:"15px"}}>ShopZone</p>
                     </div>
                    <div className="frist-part">
                    <p>Men's and Women's</p>
                    <p>Shoe's Collection</p>
                    </div>
                    <Link to="/product"><button className="shoop-now-button"> <FaRegWindowRestore/> Visit Store</button></Link>
                    </div>
                    <img src="https://images-na.ssl-images-amazon.com/images/I/91siwFKSq8L.jpg" width="400px" height="400px"     alt="" />
                           
                  
                 </div>
      </div>
    </>
  );
};
export default Home;
