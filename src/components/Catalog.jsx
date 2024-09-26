import React, { useState } from 'react';
import './Catalog.css';
import cake from "../assets/cake.jpeg";
import cajunChicken from "../assets/cajun-Chicken.jpeg";
import fruitSalad from "../assets/fruit-Salad.jpg";
import macroni from "../assets/macroni.jpg";
import momos from "../assets/momos.jpg";
import natchos from "../assets/natchos.jpg";
import hamburger from "../assets/hamburger.jpeg";
import pizza from "../assets/pizza.jpeg";
import { FaStar } from "react-icons/fa";

const Catalog = () => {
  const [catalogItems, setCatalogItems] = useState([
    { img: cake, name: "Cake", price: "₹500", discription: "Sweet Cake", rating: "4.5" },
    { img: cajunChicken, name: "Cajun Chicken", price: "₹500", discription: "Delicious Chicken", rating: "4.5" },
    { img: fruitSalad, name: "Fruit Salad", price: "₹500", discription: "Fresh Fruits", rating: "4.5" },
    { img: macroni, name: "Macroni", price: "₹500", discription: "Cheesy Macroni", rating: "4.5" },
    { img: momos, name: "Momos", price: "₹500", discription: "Delicious Momos", rating: "4.5" },
    { img: natchos, name: "Natchos", price: "₹500", discription: "Spicy Natchos", rating: "4.5" },
    { img: hamburger, name: "Hamburger", price: "₹500", discription: "Tasty Hamburger", rating: "4.5" },
    { img: pizza, name: "Pizza", price: "₹500", discription: "Tasty Pizza", rating: "4.5" },
  ]);

  const [currentItems, setCurrentItems] = useState(catalogItems);

  const starters = [
    { img: cajunChicken, name: "Cajun Chicken", price: "₹500", discription: "Delicious Chicken", rating: "4.5" },
    { img: fruitSalad, name: "Fruit Salad", price: "₹500", discription: "Fresh Fruits", rating: "4.5" },
    { img: macroni, name: "Macroni", price: "₹500", discription: "Cheesy Macroni", rating: "4.5" },
    { img: momos, name: "Momos", price: "₹500", discription: "Delicious Momos", rating: "4.5" },
  ];

  const main = [
    { img: natchos, name: "Natchos", price: "₹500", discription: "Spicy Natchos", rating: "4.5" },
    { img: hamburger, name: "Hamburger", price: "₹500", discription: "Tasty Hamburger", rating: "4.5" },
    { img: pizza, name: "Pizza", price: "₹500", discription: "Tasty Pizza", rating: "4.5" },
  ];

  const desserts = [
    { img: cake, name: "Cake", price: "₹500", discription: "Sweet Cake", rating: "4.5" },
    { img: cajunChicken, name: "Cajun Chicken", price: "₹500", discription: "Delicious Chicken", rating: "4.5" },
    { img: fruitSalad, name: "Fruit Salad", price: "₹500", discription: "Fresh Fruits", rating: "4.5" },
  ];

  const soup = [
    { img: macroni, name: "Macroni", price: "₹500", discription: "Cheesy Macroni", rating: "4.5" },
    { img: momos, name: "Momos", price: "₹500", discription: "Delicious Momos", rating: "4.5" },
    { img: natchos, name: "Natchos", price: "₹500", discription: "Spicy Natchos", rating: "4.5" },
  ];

  const handleFilter = (category) => {
    switch (category) {
      case 'starters':
        setCurrentItems(starters);
        break;
      case 'main':
        setCurrentItems(main);
        break;
      case 'desserts':
        setCurrentItems(desserts);
        break;
      case 'soup':
        setCurrentItems(soup);
        break;
      default:
        setCurrentItems(catalogItems);
    }
  };

  const handleBuyNow = (img, name,price) => {
    console.log("Item bought:", { img, name,price });

  };

  return (
    <>
      <div style={{ display: "flex", alignItems: "center" }}>
        <h2>Checkout our menu</h2>
        <div className="filter"></div>
        <button className='btns' onClick={() => handleFilter('starters')}>Starters</button>
        <button className='btns' onClick={() => handleFilter('main')}>Main</button>
        <button className='btns' onClick={() => handleFilter('soup')}>Soup</button>
        <button className='btns' onClick={() => handleFilter('desserts')}>Desserts</button>
      </div>
      <div className="catalog">
        {currentItems.map((item) => (
          <div className="item" key={item.name}>
            <div className="image-container">
              <img src={item.img} alt={item.name} />
              <div className="overlay"></div>
            </div>
            <button className="btn" onClick={() => handleBuyNow(item.img, item.name,item.price)}>Buy Now</button>
            <div className="rating">
              <FaStar />
              <p className="rating-text">{item.rating}</p>
            </div>
            <p className="name">{item.name}</p>
            <p className='description'>{item.discription}</p>
            <p className="price">{item.price}</p>
          </div>
        ))}
      </div>
    </>
  );
};

export default Catalog;
