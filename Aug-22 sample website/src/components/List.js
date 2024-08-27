import React from 'react';
import './List.css'; // Optional: Add specific styles for the list

const items = [
  { id: 1, name: 'Product 1', description: 'Description of Product 1', image: 'product1.jpg' },
  { id: 2, name: 'Product 2', description: 'Description of Product 2', image: 'product2.jpg' },
  // Add more items as needed
];

function List() {
  return (
    <section>
      <h2>Our Products/Services</h2>
      <ul>
        {items.map(item => (
          <li key={item.id}>
            <img src={item.image} alt={item.name} />
            <h3>{item.name}</h3>
            <p>{item.description}</p>
          </li>
        ))}
      </ul>
    </section>
  );
}

export default List;
