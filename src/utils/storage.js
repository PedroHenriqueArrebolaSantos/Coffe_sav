export const initialProducts = [
  {
    id: 1,
    name: 'Expresso',
    description: 'Café expresso premium',
    price: 13,
    image: '/expresso.jpg',
  },
  {
    id: 2,
    name: 'Capuccino',
    description: 'Café expresso, leite vaporizado e espuma de leite',
    price: 15,
    image: '/capuccino.jpg',
  },
  {
    id: 3,
    name: 'Latte',
    description: 'Café expresso, leite vaporizado e espuma de leite',
    price: 16,
    image: '/latte.jpg',
  },
  {
    id: 4,
    name: 'Flat White',
    description: 'Café expresso e leite vaporizado',
    price: 18,
    image: '/flatwhite.jpg',
  },
  {
    id: 5,
    name: 'Mocha',
    description: 'Café expresso e leite vaporizado',
    price: 16,
    image: '/mocha.png',
  },
  {
    id: 6,
    name: 'Frappe',
    description: 'Café expresso, leite e gelo',
    price: 20,
    image: '/frappe.jpg',
  },
  {
    id: 7,
    name: 'Macchiato',
    description: 'Café expresso e leite espumado',
    price: 18,
    image: '/macchiato.jpg',
  },
  {
    id: 8,
    name: 'Affogatto',
    description: 'Café expresso com sorvete de baunilha',
    price: 20,
    image: '/affogatto.jpg',
  },
  {
    id: 9,
    name: 'Chocolate Quente',
    description: 'Chocolate derretido no leite vaporizado com raspas de chocolate e mini marshmallows',
    price: 20,
    image: '/chocolate.jpeg',
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
