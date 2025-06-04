const products = [
    { title: 'Капуста', isFruit: false, id: 1 },
    { title: 'Чеснок', isFruit: false, id: 2 },
    { title: 'Яблоко', isFruit: true, id: 3 },
  ];
  
export default function ShoppingList() {
  const listItems = products.map(product =>
    <li key={product.id}>
      {product.title} : {product.id}
    </li>
  );

  return (
    <ul>{listItems}</ul>
  );
}