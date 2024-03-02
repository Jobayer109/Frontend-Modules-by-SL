import React, { useState } from "react";
import classes from "./cart.module.css";
import productList from "./data";

const CartItem = ({
  id,
  name,
  price,
  stock,
  quantity,
  total,
  increment,
  decrement,
}) => {
  return (
    <tr>
      <td>{id}</td>
      <td>{name}</td>
      <td>
        {quantity}/{stock}
      </td>
      <td>{price}</td>
      <td>{quantity}</td>
      <td>{total}</td>
      <td>
        <span>
          <button onClick={() => increment(id)} disabled={quantity === stock}>
            +
          </button>
        </span>
        <span>
          <button onClick={() => decrement(id)} disabled={quantity === 0}>
            -
          </button>
        </span>
      </td>
    </tr>
  );
};

const ShoppingCart = () => {
  const [products, setProducts] = useState(
    productList.map((item) => ({ ...item, quantity: 0, total: 0 }))
  );
  const increment = (id) => {
    setProducts(
      products.map((prod) => {
        if (prod.id === id) {
          prod.quantity++;
          prod.total = prod.quantity * prod.price;
        }
        return prod;
      })
    );
  };

  const decrement = (id) => {
    setProducts(
      products.map((prod) => {
        if (prod.id === id) {
          prod.quantity--;
          prod.total = prod.quantity * prod.price;
        }
        return prod;
      })
    );
  };

  const total = products.reduce((acc, cur) => acc + cur.total, 0);

  return (
    <div className={classes.container}>
      <h1>Shopping Cart</h1>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Stock</th>
            <th>Price</th>
            <th>Quantity</th>
            <th>Total</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {products.map((option) => (
            <CartItem
              key={option.id}
              {...option}
              increment={increment}
              decrement={decrement}
            />
          ))}
        </tbody>
      </table>

      <div style={{ marginTop: "2rem" }}>
        <strong>Total Amount: {total} TK.</strong>
      </div>
    </div>
  );
};

export default ShoppingCart;
