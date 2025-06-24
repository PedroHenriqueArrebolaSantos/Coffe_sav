export const initialProducts = [
  {
    id: 1,
    name: 'Produto A',
    description: 'Descrição do Produto A',
    price: 100,
    image: 'https://via.placeholder.com/150',
  },
  {
    id: 2,
    name: 'Produto B',
    description: 'Descrição do Produto B',
    price: 200,
    image: 'https://via.placeholder.com/150',
  },
];

export const getProductsFromStorage = () => {
  return (
    JSON.parse(localStorage.getItem('products') || 'null') || initialProducts
  );
};

export const saveProductsToStorage = (products) => {
  localStorage.setItem('products', JSON.stringify(products));
};
