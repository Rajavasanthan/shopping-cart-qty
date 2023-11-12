import "./App.css";
import Product from "./Product";
import CartItem from "./CartItem";
import { useEffect, useState } from "react";

function App() {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);
  const [total, setTotal] = useState(0);


  useEffect(() => {
    // Side Effects
    fetch("https://6461c1c2491f9402f4aa0565.mockapi.io/products")
      .then((data) => data.json())
      .then((res) => {

        setProducts(res);
      });
  }, []);

  const handleAddtoCart = (product) => {
    const existingItem = cart.find((item) => item.id === product.id);
  
    if (existingItem) {

      const updatedCart = cart.map((item) =>
        item.id === existingItem.id ? { ...item, quantity: item.quantity + 1 } : item
      );
      setCart(updatedCart);
    } else {
      setCart([...cart, { ...product, quantity: 1 }]);
    }
  
    setTotal(total + product.price);
  };
  

  const handleRemoveItem = (item) => {
    const newCart = cart.filter((cartItem) => cartItem.id !== item.id);
    setTotal(total - item.price * item.quantity);
    setCart(newCart);
  };

  const handleIncreaseQuantity = (price) => {
    setTotal(total + price);
  };

  const handleDecreaseQuantity = (price) => {
    setTotal(total - price);
  };
const isInCart = (pro) => cart.some(item=> item.id === pro.id )



  return (
    <div className="container">
      <div className="row">
        <div className="col-lg-8">
          <h2>Products</h2>
          <div className="row">
            {products.map((product, index) => (
              <Product
                key={index}
                product={product}
                handleAddtoCart={handleAddtoCart}
                handleRemoveItem={handleRemoveItem}
                isInCart={()=> isInCart(product)}
              />
            ))}
          </div>
        </div>
        <div className="col-lg-4">
          <h2>Cart ({cart.length})</h2>
          {cart.length > 0 ? (
            <ol className="list-group list-group-numbered">
              {cart.map((item, index) => (
                <CartItem
                  key={index}
                  item={item}
                  handleRemoveItem={handleRemoveItem}
                  handleIncreaseQuantity={handleIncreaseQuantity}
                  handleDecreaseQuantity={handleDecreaseQuantity}
                />
              ))}

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
