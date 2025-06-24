import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const Cart = () => {
  const navigate = useNavigate();
  const [cart, setCart] = useState([]);

  useEffect(() => {
    const savedCart = JSON.parse(localStorage.getItem('cart') || '[]');
    setCart(savedCart);
  }, []);

  const handleRemoveItem = (indexToRemove) => {
    const updatedCart = cart.filter((_, index) => index !== indexToRemove);
    setCart(updatedCart);
    localStorage.setItem('cart', JSON.stringify(updatedCart));
  };

  const handleClearCart = () => {
    localStorage.removeItem('cart');
    setCart([]);
  };

  const handleGoBackToStore = () => {
    navigate('/');
  };

  const handleCheckout = () => {
    alert('Compra finalizada!');
  };

  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold mb-4">Carrinho</h2>

      {cart.length === 0 ? (
        <p>O carrinho está vazio.</p>
      ) : (
        <ul>
          {cart.map((item, index) => (
            <li key={index} className="mb-4 border-b pb-2">
              <div>
                <strong>{item.name}</strong> - R${item.price}
                {item.image && (
                  <div className="mt-2">
                    <img
                      id={'imgCarr'}
                      src={item.image}
                      alt={item.name}
                      width={100}
                    />
                  </div>
                )}
              </div>
              <button
                onClick={() => handleRemoveItem(index)}
                className="mt-2 bg-red-500 text-white px-2 py-1 rounded hover:bg-red-600"
              >
                Remover este item
              </button>
            </li>
          ))}
        </ul>
      )}

      {cart.length > 0 && (
        <div id="botoesCarr" className="flex flex-col sm:flex-row gap-4 mt-6">
          <button
            onClick={handleCheckout}
            className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700"
          >
            Finalizar Compra
          </button>

          <button
            onClick={handleClearCart}
            className="bg-red-700 text-white px-4 py-2 rounded hover:bg-red-800"
          >
            Limpar Carrinho
          </button>

          <button
            onClick={handleGoBackToStore}
            className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
          >
            Voltar para a Loja
          </button>
        </div>
      )}
    </div>
  );
};

export default Cart;
