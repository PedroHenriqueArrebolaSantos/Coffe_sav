import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { getProductsFromStorage } from '../utils/storage';
import SearchBar from '../components/Searchbar';

const Home = () => {
  const [products] = useState(getProductsFromStorage());
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearch = (query) => {
    setSearchQuery(query);
  };

  const filteredProducts = products.filter((product) =>
    product.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="home-container">
      <SearchBar onSearch={handleSearch} />
      <h2>Produtos</h2>
      <div className="product-list">
        {filteredProducts.length > 0 ? (
          filteredProducts.map((p) => (
            <div key={p.id} className="product-card">
              <img src={p.image} alt={p.name} />
              <div>
                <Link to={`/product/${p.id}`}>{p.name}</Link> - R${p.price}
              </div>
            </div>
          ))
        ) : (
          <p>Nenhum produto encontrado.</p>
        )}
      </div>
    </div>
  );
};

export default Home;
