import React from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { RootState } from "../store";
import { removeFromCart } from "../store/productsSlice";

const Cart: React.FC = () => {
  const cart = useSelector((state: RootState) => state.products.cart);
  const dispatch = useDispatch();

  return (
    <Container>
      {cart.map((product) => (
        <CartItem key={product.id}>
          <h2>{product.name}</h2>
          <p>£{product.price}</p>
          <button onClick={() => dispatch(removeFromCart(product.id))}>
            Remove
          </button>
        </CartItem>
      ))}
      {cart.length === 0 && <p>Your cart is empty.</p>}
    </Container>
  );
};

export default Cart;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  div {
    margin-bottom: 1em;
  }
  div:last-of-type {
    margin-bottom: 0;
  }
`;

const CartItem = styled.div`
  border: 1px solid #ccc;
  padding: 16px;
  width: 100%;
  text-align: center;
  button {
    margin-top: 10px;
    padding: 8px 12px;
    background-color: #dc3545;
    color: white;
    border: none;
    cursor: pointer;
  }
`;
