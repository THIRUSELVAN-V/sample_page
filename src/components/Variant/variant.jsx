import React from 'react';
import cakeImage from '/src/assets/cake.jpeg'; 
import "./variant.css";


const Variant = ({item}) => {
  if (!item) return null;

  const getDescription = (itemName) => {
    switch (itemName) {
      case "Cake":
        return `Indulge in our decadent cake, baked to perfection and layered with rich, velvety cream icing. 
                Soft and moist, each bite melts in your mouth, delivering the ultimate sweet treat experience. 
                Ideal for any celebration or indulgence, this cake will leave you wanting more!`;
      case "Cajun Chicken":
        return `Our Cajun Chicken is a fiery delight, seasoned with bold Cajun spices that bring a burst of flavor. 
                Grilled to perfection, the juicy and tender chicken pairs beautifully with a smoky, slightly charred exterior. 
                Perfect for those who love a little heat with their meal!`;
      case "Fruit Salad":
        return `Refresh your palate with our vibrant and fresh fruit salad! 
                A colorful assortment of seasonal fruits, this salad is naturally sweet and packed with vitamins. 
                Whether you're looking for a light appetizer or a guilt-free dessert, this fruit medley is sure to satisfy.`;
      case "Macroni":
        return `Savor the comfort of our creamy macroni, smothered in a rich, cheesy sauce and seasoned with aromatic herbs. 
                The soft pasta perfectly complements the slight crunch of baked cheese on top, offering layers of flavor in every bite. 
                It's the ultimate indulgence for pasta lovers!`;
      case "Momos":
        return `Dive into our delicate and flavorful momos, hand-crafted with love. 
                These soft, steamed dumplings are filled with your choice of succulent chicken or fresh veggies, 
                and served with a tangy dipping sauce for a burst of flavor in every bite. A must-try for dumpling enthusiasts!`;
      case "Natchos":
        return `Crispy, cheesy, and downright irresistible, our nachos are a snack to remember! 
                Each bite offers perfectly crisp corn tortilla chips, loaded with a generous layer of melted cheese. 
                Served with sides of tangy salsa, creamy guacamole, and zesty sour cream for the ultimate flavor explosion!`;
      case "Hamburger":
        return `Sink your teeth into our classic hamburger, made with a juicy grilled patty of premium beef or chicken. 
                Nestled between soft buns, it's topped with fresh, crunchy lettuce, ripe tomatoes, and onions. 
                A drizzle of special sauce and a slice of melted cheese complete this irresistible masterpiece!`;
      default:
        return "No description available.";
    }
  };

  return (
    <div className='variant'>
      <img src={item.img} alt={item.name} className='image'/>
      <div className='column'>
      <div className='title'>{item.name}</div>
      <div className='description'>{getDescription(item.name)}</div>
      <div className='price'>$ {item.price}</div>
      <div className='bold'>We've been serving for over <span style={{border:'1px solid white',backgroundColor: 'rgba(0, 0, 255, 0.829)', color:'white'}}>5 years...</span></div>
      </div>
    </div>
  );
};

export default Variant;
