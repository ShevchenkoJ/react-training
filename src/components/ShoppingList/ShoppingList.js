import './ShoppingList.css';

const products = [
    { title: 'Cabbage', isFruit: false, id: 1 },
    { title: 'Garlic', isFruit: false, id: 2 },
    { title: 'Apple', isFruit: true, id: 3 },
];
  
function ShoppingList() {
    const listItems = products.map(product =>
      <li
        className='shopping-list_item'
        key={product.id}
        style={{
          background: product.isFruit ? '#000' : '#fff',
          color: product.isFruit ? '#fff' : '#000'
        }}
      >
        {product.title}
      </li>
    );
  
    return (
        <ul className='shopping-list'>{listItems}</ul>
    );
}
  
export default ShoppingList;