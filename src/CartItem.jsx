import { useState } from "react";

function CartItem({ item, handleRemoveItem, handleIncreaseQuantity, handleDecreaseQuantity }) {
  const [qty, setQty] = useState(1);

  const increaseQuantity = () => {
    setQty(qty + 1);
    handleIncreaseQuantity(item.price);
  };

  const decreaseQuantity = () => {
    if (qty > 1) {
      setQty(qty - 1);
      handleDecreaseQuantity(item.price);
    }
  };

  return (
    <li className="list-group-item d-flex justify-content-between align-items-start">
      <div className="ms-2 me-auto">
        <div className="fw-bold">{item.name}</div>
        Rs.{item.price}
      </div>
      <button className="btn" onClick={increaseQuantity}>
        +
      </button>
      {qty}
      <button disabled={qty === 1} className="btn" onClick={decreaseQuantity}>
        -
      </button>
      <button onClick={() => handleRemoveItem(item)} className="btn btn-sm btn-danger">
        X
      </button>
      <div>Total: Rs. {qty * item.price}</div>
    </li>
  );
}

export default CartItem;
