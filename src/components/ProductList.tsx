import React from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { RootState } from "../store";
import { addToCart } from "../store/productsSlice";

const ProductList: React.FC = () => {
  const products = useSelector((state: RootState) => state.products.products);
  const dispatch = useDispatch();

  return (
    <Container>
      {products.map((product) => (
        <ProductCard key={product.id}>
          <h2>{product.name}</h2>
          <p>£{product.price}</p>
          <button onClick={() => dispatch(addToCart(product.id))}>
            Add to Cart
          </button>
        </ProductCard>
      ))}
    </Container>
  );
};

export default ProductList;

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

const ProductCard = styled.div`
  border: 1px solid #ccc;
  padding: 16px;
  width: 100%;
  text-align: center;
  button {
    margin-top: 10px;
    padding: 8px 12px;
    background-color: #007bff;
    color: white;
    border: none;
    cursor: pointer;
  }
`;
