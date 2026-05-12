import React, { useState, useEffect } from "react";
import products from "./product.js";
import "./style.css";

export default function App() {
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState("");
  const [sort, setSort] = useState("");
  const [filterProduct, setFilterProduct] = useState(products);

  const Filtercategories = [
    ...new Set(products.map((item) => item.category)),
  ];

  useEffect(() => {
    let updatedData = [...products];

    // Category Filter
    if (category) {
      updatedData = updatedData.filter((item) => {
        return item.category === category;
      });
    }

    // Search Filter
    if (query) {
      updatedData = updatedData.filter((item) => {
        return item.productName
          .toLowerCase()
          .includes(query.toLowerCase());
      });
    }

    // Sort
    if (sort) {
      updatedData.sort((a, b) => {
        return sort === "low_to_high"
          ? a.price - b.price
          : b.price - a.price;
      });
    }

    setFilterProduct(updatedData);
  }, [category, sort, query]);

  return (
    <>
      <div>
        {/* Search */}
        <input
          type="text"
          placeholder="Search Product"
          onChange={(e) => setQuery(e.target.value)}
        />

        {/* Sort */}
        <select onChange={(e) => setSort(e.target.value)}>
          <option value="">Select by price</option>
          <option value="low_to_high">Low to High</option>
          <option value="high_to_low">High to Low</option>
        </select>

        {/* Category */}
        <select onChange={(e) => setCategory(e.target.value)}>
          <option value="">All Categories</option>

          {Filtercategories.map((item) => (
            <option key={item.id} value={item}>
              {item}
            </option>
          ))}
        </select>

        <hr />
        <div className='card-container'>
        {/* Products */}
        {filterProduct.map((item) => (
          <div key={item.id} className="card">
            <h3>{item.productName}</h3>
            <p>₹ {item.price}</p>
            <p>{item.category}</p>
          </div>
        ))}
           </div>
      </div>
    </>
  );
}


const products = [
  {
    id: 1,
    productName: "Wireless Mouse",
    price: 799,
    category: "Electronics"
  },
  {
    id: 2,
    productName: "Bluetooth Speaker",
    price: 999,
    category: "Electronics"
  },
  {
    id: 3,
    productName: "Smart Watch",
    price: 1000,
    category: "Electronics"
  },


  {
    id: 4,
    productName: "Casual T-Shirt",
    price: 499,
    category: "Clothing"
  },
  {
    id: 5,
    productName: "Jeans",
    price: 950,
    category: "Clothing"
  },
  {
    id: 6,
    productName: "Hoodie",
    price: 850,
    category: "Clothing"
  },
  {
    id: 7,
    productName: "Jacket",
    price: 1000,
    category: "Clothing"
  },
  {
    id: 8,
    productName: "Shorts",
    price: 400,
    category: "Clothing"
  },


  {
    id: 9,
    productName: "Water Bottle",
    price: 199,
    category: "Home"
  },
  {
    id: 10,
    productName: "Coffee Mug",
    price: 249,
    category: "Home"
  },
  {
    id: 11,
    productName: "Table Lamp",
    price: 699,
    category: "Home"
  },
  {
    id: 12,
    productName: "Wall Clock",
    price: 550,
    category: "Home"
  },
  {
    id: 13,
    productName: "Bedsheet",
    price: 899,
    category: "Home"
  },
  {
    id: 14,
    productName: "Pillow",
    price: 350,
    category: "Home"
  },
  {
    id: 15,
    productName: "Curtains",
    price: 750,
    category: "Home"
  }
];

export default products;

//style.css
.card {
  font-size: 10px;
  background: white;
  padding: 5px;
  margin-bottom: 3px;
  border-radius: 8px;
  width: 100px;
  box-shadow: 0 2px 5px rgba(0,0,0,0.1);
}
.card-container{
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  text-align: center;
  justify-content: center;
  gap: 20px;
}
