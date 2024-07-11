import React from 'react';
import { Provider } from 'react-redux';
import { Link, Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import styled from 'styled-components';
import Cart from './components/Cart';
import ProductList from './components/ProductList';
import store from './store';

const App: React.FC = () => {
  return (
    <Provider store={store}>
      <Router>
        <Nav>
          <Link to="/">Products</Link>
          <Link to="/cart">Cart</Link>
        </Nav>
        <Routes>
          <Route path="/" element={<ProductList />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
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
`;
