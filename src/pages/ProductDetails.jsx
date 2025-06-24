import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { getProductsFromStorage } from '../utils/storage';

const ProductDetails = () => {
  const { id } = useParams();
  const products = getProductsFromStorage();
  const product = products.find((p) => p.id === parseInt(id || ''));
  const navigate = useNavigate();

  const addToCart = () => {
    const cart = JSON.parse(localStorage.getItem('cart') || '[]');
    if (product) {
      const cleanProduct = {
        ...product,
        image: typeof product.image === 'string' ? product.image : '',
      };

      cart.push(cleanProduct);
      localStorage.setItem('cart', JSON.stringify(cart));
      navigate('/cart');
    }
  };

  const handleGoBackToStore = () => {
    navigate('/');
  };

  if (!product) return <div>Produto não encontrado.</div>;

  return (
    <div id="divProdutos">
      <img
        id="imgProdutos"
        src={product.image}
        alt={product.name}
        style={{ width: '300px', height: '300px', objectFit: 'cover' }}
      />
      <div id="info-produto">
        <h2>{product.name}</h2>
        <p>{product.description}</p>
        <p>Preço: R${product.price}</p>
      </div>
      <div id="botoes">
        <button onClick={addToCart}>Adicionar ao Carrinho</button>
        <button
          onClick={handleGoBackToStore}
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
        >
          Voltar para a Loja
        </button>
      </div>
    </div>
  );
};

export default ProductDetails;
