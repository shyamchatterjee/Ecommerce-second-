import { createContext, useEffect, useState } from "react";

// import App from "./App.jsx";
// import { Data } from "./axion";
import { useSearchParams } from "react-router";
import axios from "axios";

export let Context = createContext(null);
export let Contextfuntion = ({ children }) => {
  let [deta, setdeta] = useState([]);

  let [cart, setcart] = useState([]);
  let [mode, setMode] = useState("light");
  let [boolen, setBoolen] = useState(true);
  // let api = async () => {
  // let responce = await axios.get(
  // "https://dummyjson.com/products?limit=" + limit
  // );
  // setdeta(responce.data.products);
  // };
  useEffect(() => {
    let api = async () => {
      let responce = await axios.get("https://dummyjson.com/products");
      setdeta(responce.data.products);
      console.log(responce.data.products);
    };
    api();
  }, []);

  let click = (element) => {
    let finditem = cart.find((item) => {
      if (item.id === element.id) {
        return item;
      }
    });
    if (finditem) {
      let filteritem = cart.filter((item) => {
        if (item.id !== element.id) {
          return item;
        }
      });
      setcart([...filteritem, { ...finditem, q: finditem.q + 1 }]);
    } else {
      setcart([...cart, { ...element, q: 1 }]);
    }
  };

  let remove = (element) => {
    let p = cart.filter((item) => {
      if (item.id !== element.id) {
        return item;
      }
    });
    setcart(p);
  };
  let plushFuntion = (element) => {
    let finditem = cart.find((item) => {
      if (item.id === element.id) {
        return item;
      }
    });
    if (finditem) {
      let filteritem = cart.filter((item) => {
        if (item.id !== element.id) {
          return item;
        }
      });
      setcart([...filteritem, { ...finditem, q: finditem.q + 1 }]);
    } else {
      setcart([...cart, { ...element, q: 1 }]);
    }
  };
  let nagitiveFuntion = (element) => {
    if (element.q <= 0) {
      ("");
    } else {
      let finditem = cart.find((item) => {
        if (item.id === element.id) {
          return item;
        }
      });
      if (finditem) {
        let filteritem = cart.filter((item) => {
          if (item.id !== element.id) {
            return item;
          }
        });
        setcart([...filteritem, { ...finditem, q: finditem.q - 1 }]);
      } else {
        setcart([...cart, { ...element, q: 1 }]);
      }
    }
  };
  return (
    <Context.Provider
      value={{
        setdeta,
        deta,
        click,
        cart,
        mode,
        remove,
        plushFuntion,
        nagitiveFuntion,
        setcart,
        setMode,
        boolen,
        setBoolen,
      }}
    >
      {children}
    </Context.Provider>
  );
};
