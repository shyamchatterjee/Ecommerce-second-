import { useContext, useState } from "react";
import "./App.css";
import { Context } from "./appcontext";
import { Link } from "react-router";
import { CiShoppingCart } from "react-icons/ci";
import { CiCircleRemove } from "react-icons/ci";
let Cart = () => {
  let counter = useContext(Context);
  let [totals, settotal] = useState();
  let [styles, setstyle] = useState("none");
  let total = () => {
    let sum = 0;
    counter.cart.map((element) => {
      sum = sum + Math.floor(element.q * element.price);
    });
    settotal("   Rs. " + Math.floor(sum));
  };
  let stylefuntion = () => {
    setstyle("");
    if (styles == "") {
      setstyle("none");
    }
  };
    let [page,setpage] = useState("")
    let removed  = (item)=>{
        let removeitem = counter.cart.filter((element)=>{
              if (element.id!==item.id) {
                  return element
              }
        })
        counter.setcart(removeitem)
    }
  return <> {counter.mode=="light"?   // <div className="uppercontener">
      <div className="conteners">
      <div className="nav">
      <div className="website-name-container">
                          <img src="https://cdn-icons-png.flaticon.com/512/7835/7835563.png"  height={25} width={25} alt="" />
                             <p style={{fontSize:"15px"}}>ShopZone</p>
                     </div>
           <Link to="/"  onClick={()=>{setpage("home")}} className={page=="home"?"active":""} ><p style={{fontSize:"20px"}}>Home</p></Link>
           <Link to="/product" onClick={()=>{setpage("product")}} className={page=="product"?"active":""}  ><p style={{fontSize:"20px"}}>Product</p></Link>
           {counter.boolen==true? <img src="https://cdn.iconscout.com/icon/premium/png-256-thumb/half-moon-3884653-3224295.png" height={30} width={30}    onClick={()=>{counter.setMode("dark"),counter.setBoolen(false)}}  style={{cursor:"pointer"}}  alt="" />: <img src="https://cdn4.iconfinder.com/data/icons/multimedia-flat-30px/30/sun_light_mode_day-512.png" height={30} width={30} alt=""  onClick={()=>{counter.setMode("light"),counter.setBoolen(true)}} style={{cursor:"pointer"}} />}
          
         </div>

        <div className="totaldiv">
          <button
            style={{ backgroundColor: "black", color: "white" }}
            className="total"
            onClick={() => {
              total(), stylefuntion();
            }}
          >
            Grand price
          </button>
          <div style={{ display: styles }} className="totalcontener">
            <p style={{ fontSize: "20px", color: "blue" }}>Grand total</p>
            <h3>{totals}</h3>
          </div>
        </div>
        <div className="uppersingle">
          <div className="singleproduct">
            {counter.cart.map((element) => {
              if (element.q==0) {
                     return (
                <div className="pro">
                  <img src={element.images} height={100} width={100} alt="" />
                  <h3>{element.category}</h3>
                  <p>{element.title}</p>
                  <button  className="plush-button" onClick={()=> counter.plushFuntion(element)}>+</button>
                  <p  >{"Qunatity: "  +  element.q}</p>
                  <button className="nagitive-button"   onClick={()=>{ removed(element), counter.nagitiveFuntion(element)}}>-</button>
                  <p>
                    {"Rs." +
                      element.price +
                      " x " +
                      element.q +
                      " = " +
                      "" +
                      "Rs. " +
                      Math.floor(element.price * element.q)}
                  </p>
                 
                 

< CiCircleRemove  onClick={() => counter.remove(element)} style={{color:"green" ,fontSize:"22px" , cursor:"pointer"}} />
                </div>
              );
            
              }else{
              return (
                <div className="pro">
                  <img src={element.images} height={100} width={100} alt="" />
                  <h3>{element.category}</h3>
                  <p>{element.title}</p>
                  <button  className="plush-button" onClick={()=> counter.plushFuntion(element)}>+</button>
                  <p>{"Qunatity: "  +  element.q}</p>
                  <button className="nagitive-button"   onClick={()=> counter.nagitiveFuntion(element)}>-</button>
                  <p>
                    {"Rs." +
                      element.price +
                      " x " +
                      element.q +
                      " = " +
                      "" +
                      "Rs. " +
                      Math.floor(element.price * element.q)}
                  </p>
                 
                 

< CiCircleRemove  onClick={() => counter.remove(element)} style={{color:"green" ,fontSize:"22px" , cursor:"pointer"}} />
                </div>
              );
            }
            })}
          </div>
        </div>
      </div>  : // <div className="uppercontener">
      <div className="conteners"  style={{backgroundColor:"black"}}>
      <div className="nav" style={{backgroundColor:"#0F1A20"}}>
      <div className="website-name-container">
                          <img src="https://cdn-icons-png.flaticon.com/512/7835/7835563.png"  height={25} width={25} alt="" />
                             <p style={{fontSize:"15px",color:"white"}}>ShopZone</p>
                     </div>
           <Link to="/"  style={{color:"white"}} onClick={()=>{setpage("home")}} className={page=="home"?"active":""} ><p style={{fontSize:"20px"}}>Home</p></Link>
           <Link to="/product"   onClick={()=>{setpage("product")}} className={page=="product"?"active":""}  ><p style={{fontSize:"20px",color:"white"}}>Product</p></Link>
          {counter.boolen==true? <img src="https://cdn.iconscout.com/icon/premium/png-256-thumb/half-moon-3884653-3224295.png" height={30} width={30}    onClick={()=>{counter.setMode("dark"),counter.setBoolen(false)}}  style={{cursor:"pointer"}}  alt="" />: <img src="https://cdn4.iconfinder.com/data/icons/multimedia-flat-30px/30/sun_light_mode_day-512.png" height={30} width={30} alt=""  onClick={()=>{counter.setMode("light"),counter.setBoolen(true)}} style={{cursor:"pointer"}} />}
         </div>

        <div className="totaldiv" style={{backgroundColor:"#0F1A20"}}>
          <button
            style={{ backgroundColor: "#0F1A20", color: "white" }}
            className="total"
            onClick={() => {
              total(), stylefuntion();
            }}
          >
            Grand price
          </button>
          <div style={{ display: styles,backgroundColor:"#0F1A20" }} className="totalcontener">
            <p style={{ fontSize: "20px", color: "green" }}>Grand total</p>
            <h3 style={{color:"white"}}>{totals}</h3>
          </div>
        </div>
        <div className="uppersingle">
          <div className="singleproduct">
            {counter.cart.map((element) => {
              if (element.q==0) {
                     return (
                <div className={counter.mode=="light"? "pro":"pro-dark"}>
                  <img src={element.images} height={100} width={100} alt="" />
                  <h3>{element.category}</h3>
                  <p>{element.title}</p>
                  <button  className="plush-button" onClick={()=> counter.plushFuntion(element)}>+</button>
                  <p  >{"Qunatity: "  +  element.q}</p>
                  <button className="nagitive-button"   onClick={()=>{ removed(element), counter.nagitiveFuntion(element)}}>-</button>
                  <p>
                    {"Rs." +
                      element.price +
                      " x " +
                      element.q +
                      " = " +
                      "" +
                      "Rs. " +
                      Math.floor(element.price * element.q)}
                  </p>
                 
                 

< CiCircleRemove  onClick={() => counter.remove(element)} style={{color:"green" ,fontSize:"22px" , cursor:"pointer"}} />
                </div>
              );
            
              }else{
              return (
                <div  className={counter.mode=="light"? "pro":"pro-dark" } style={{color:"white"}}>
                  <img src={element.images} height={100} width={100} alt="" />
                  <h3>{element.category}</h3>
                  <p>{element.title}</p>
                  <button  className="plush-button" onClick={()=> counter.plushFuntion(element)}>+</button>
                  <p>{"Qunatity: "  +  element.q}</p>
                  <button className="nagitive-button"   onClick={()=> counter.nagitiveFuntion(element)}>-</button>
                  <p>
                    {"Rs." +
                      element.price +
                      " x " +
                      element.q +
                      " = " +
                      "" +
                      "Rs. " +
                      Math.floor(element.price * element.q)}
                  </p>
                 
                 

< CiCircleRemove  onClick={() => counter.remove(element)} style={{color:"green" ,fontSize:"25px" , cursor:"pointer"}} />
                </div>
              );
            }
            })}
          </div>
        </div>
      </div>}</>
   
    // </div>
  
};
export default Cart;
