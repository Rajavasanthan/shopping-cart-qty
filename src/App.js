import logo from "./logo.svg";
import "./App.css";
import Product from "./Product";
import CartItem from "./CartItem";
import { useEffect, useState } from "react";

function App() {
  const [products, setProduct] = useState([]);
  const [cart, setCart] = useState([]);
  const [total, setTotal] = useState(0);

  useEffect(() => {
    // Side Effects
    fetch("https://6461c1c2491f9402f4aa0565.mockapi.io/products")
      .then((data) => {
        return data.json();
      })
      .then((res) => {
        console.log(res);
        setProduct(res);
      });
  }, []);

  let handleAddtoCart = (product) => {
    setCart([...cart, product]);
    setTotal(parseInt(total) + parseInt(product.price))
  };

  let handleRemoveItem = (item,qty) => {
    let itemIndex = cart.findIndex((obj) => parseInt(obj.id) == parseInt(item.id));
    console.log(itemIndex)
    let newCart = cart.splice(itemIndex, 1);
    console.log(newCart)
    setCart(newCart);
    // setTotal(parseInt(total) - (parseInt(item.price) * qty))
    // updateTotal(item.price,"dec")
  };

  // let updateTotal = (price,action) => { // inc   dec
  //   if(action === "inc"){
  //     setTotal(parseInt(total) + parseInt(price));
  //   }

  //   if(action === "dec"){
  //     setTotal(parseInt(total) - parseInt(price));
  //   }
  // }
  return (
    <div className="container">
      <div className="row">
        <div className="col-lg-8">
          <h2>Products</h2>
          <div className="row">
            {products.map((product, index) => {
              return (
                <Product
                  key={index}
                  product={product}
                  handleAddtoCart={handleAddtoCart}
                />
              );
            })}
          </div>
        </div>
        <div className="col-lg-4">
          <h2>Cart ({cart.length})</h2>
          {cart.length > 0 ? (
            <ol class="list-group list-group-numbered">
              {cart.map((item, index) => {
                return (
                  <CartItem
                    key={index}
                    item={item}
                    handleRemoveItem={handleRemoveItem}
                    setTotal={setTotal}
                    total={total}
                  />
                );
              })}
            </ol>
          ) : (
            <h3>No items in Cart</h3>
          )}

          <h2>Total : Rs.{total}</h2>
        </div>
      </div>
    </div>
  );
}

export default App;
