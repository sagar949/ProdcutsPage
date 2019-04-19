import React from 'react';
import { Card } from 'react-bootstrap';
import classes from './ProductCard.module.css';

const ProductCard = props => {
  const { name, price, imgUrl, id } = props;
  return (
    <Card
      className={classes.Card}
      onClick={() => window.open('https://www.amazon.com', '_blank')}
    >
      <Card.Img variant="top" src={`${imgUrl}${id}`} className={classes.Img} />
      <Card.Body>
        <div className={classes.Details}>
          <p style={{ fontWeight: 'bold', fontSize: '0.7rem' }}>{name}</p>
          <p style={{ textDecoration: 'line-through' }}>{`$${price + 120}`}</p>
          <p>{`$${price}`}</p>
          <p className={classes.Owner}>Sam's</p>
        </div>
        <div className={classes.BasicInfo}>
          <Card.Text>Amazon</Card.Text>
          <Card.Text>$ {price}</Card.Text>
        </div>
      </Card.Body>
      <Card.Footer
        className={`text-muted ${classes.Details} ${classes.BgDark}`}
      >
        <a
          href="https://www.amazon.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          Go To Website <i className="fas fa-chevron-right" />
        </a>
      </Card.Footer>
    </Card>
  );
};

export default ProductCard;
