import React from "react";
import { Provider } from "react-redux";
import {
  NavLink,
  Route,
  BrowserRouter as Router,
  Routes,
} from "react-router-dom";
import styled from "styled-components";
import Cart from "./components/Cart";
import ProductList from "./components/ProductList";
import store from "./store";

const App: React.FC = () => {
  return (
    <Provider store={store}>
      <Router>
        <Nav>
          <NavLink
            className={({ isActive }) => (isActive ? "active" : "")}
            to="/"
          >
            Products
          </NavLink>
          <NavLink
            className={({ isActive }) => (isActive ? "active" : "")}
            to="/cart"
          >
            Cart
          </NavLink>
        </Nav>
        <Main>
          <Routes>
            <Route path="/" element={<ProductList />} />
            <Route path="/cart" element={<Cart />} />
          </Routes>
        </Main>
      </Router>
    </Provider>
  );
};

export default App;

const Nav = styled.nav`
  display: flex;
  gap: 20px;
  padding: 16px;
  background-color: #f8f9fa;
  a {
    text-decoration: none;
    color: #007bff;
  }
  a.active {
    font-weight: bold;
  }
`;

const Main = styled.main`
  padding: 1em;
`;
