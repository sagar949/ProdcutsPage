import React from 'react';
import ProductCard from './../ProductCard/ProductCard';
import classes from './Cards.module.css';

const Cards = ({ products }) => {
  const productCards = products.map(p => {
    return (
      <ProductCard
        key={p.id}
        //   imgUrl="https://source.unsplash.com/random/90x60"
        {...p}
      />
    );
  });
  return <div className={classes.Cards}>{productCards}</div>;
};

export default Cards;
