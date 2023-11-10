import { useEffect, useState } from "react";

function CartItem({ item, handleRemoveItem,setTotal,total}) {
  const [qty, setQty] = useState(1);
  const [price, setPrice] = useState(item.price);


  let incQty = () => {
    setQty(qty + 1);
    setPrice(parseInt(price) + parseInt(item.price));
    setTotal(parseInt(total) + parseInt(item.price))
  };

  let decQty = () => {
    setQty(qty - 1);
    setPrice(parseInt(price) - parseInt(item.price));
    setTotal(parseInt(total) - parseInt(item.price))
  };
  return (
    <li className="list-group-item d-flex justify-content-between align-items-start">
      <div className="ms-2 me-auto">
        <div className="fw-bold">{item.name}</div>
        Rs.{price}
      </div>
      <button className="btn" onClick={incQty}>
        +
      </button>
      {qty}
      <button
        disabled={qty === 1 ? true : false}
        className="btn"
        onClick={decQty}
      >
        -
      </button>
      <button
        onClick={() => handleRemoveItem(item,qty)}
        className="btn btn-sm btn-danger"
      >
        X
      </button>
    </li>
  );
}

export default CartItem;
