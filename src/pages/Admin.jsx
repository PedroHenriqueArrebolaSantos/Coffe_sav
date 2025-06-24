import React, { useState } from 'react';
import {
  getProductsFromStorage,
  saveProductsToStorage,
} from '../utils/storage';

const Admin = () => {
  const [products, setProducts] = useState(getProductsFromStorage());
  const [form, setForm] = useState({
    name: '',
    description: '',
    price: 0,
    image: '',
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    const newProduct = {
      id: Date.now(),
      ...form,
      price: Number(form.price),
    };
    const updatedProducts = [...products, newProduct];
    setProducts(updatedProducts);
    saveProductsToStorage(updatedProducts);
    setForm({ name: '', description: '', price: 0, image: '' });
  };

  const deleteProduct = (id) => {
    const updated = products.filter((p) => p.id !== id);
    setProducts(updated);
    saveProductsToStorage(updated);
  };

  return (
    <div id="divAdm">
      <h2>Administração</h2>
      <form onSubmit={handleSubmit}>
        <input
          placeholder="Nome"
          value={form.name}
          onChange={(e) => setForm({ ...form, name: e.target.value })}
          required
        />
        <input
          placeholder="Descrição"
          value={form.description}
          onChange={(e) => setForm({ ...form, description: e.target.value })}
          required
        />
        <input
          placeholder="Preço"
          type="text"
          value={form.price}
          onChange={(e) => setForm({ ...form, price: Number(e.target.value) })}
          required
        />
        <input
          type="file"
          accept="image/*"
          onChange={(e) => {
            const file = e.target.files?.[0];
            if (file) {
              const reader = new FileReader();
              reader.onloadend = () => {
                setForm({ ...form, image: reader.result });
              };
              reader.readAsDataURL(file);
            }
          }}
        />

        <button type="submit">Adicionar Produto</button>
      </form>

      <h3>Produtos Cadastrados</h3>
      {products.map((p) => (
        <div key={p.id}>
          {p.name} - R${p.price}{' '}
          <button onClick={() => deleteProduct(p.id)}>Excluir</button>
        </div>
      ))}
    </div>
  );
};

export default Admin;
