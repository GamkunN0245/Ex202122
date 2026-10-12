import React from 'react';
import { Link } from 'react-router-dom';

export default function NavigationMenu() {
  return (
    <nav style={{ display: 'flex', gap: '15px', padding: '10px', background: '#f8f9fa', borderBottom: '1px solid #dee2e6' }}>
      <Link to="/">Home</Link>
      <Link to="/products">Products</Link>
      <Link to="/about">About</Link>
      <Link to="/contact">Contact</Link>
      <Link to="/users/123">User Profile</Link>
    </nav>
  );
}