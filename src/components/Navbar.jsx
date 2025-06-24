import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="navbar">
      <h1 className="navbar-title">Coffe_sav</h1>
      <div className="navbar-links">
        <Link to="/">Home</Link>
        <Link to="/cart">Carrinho</Link>
        <Link to="/admin">Administração</Link>
      </div>
    </nav>
  );
};

export default Navbar;
