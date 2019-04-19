import React from 'react';
import classes from './NavBar.module.css';
import Category from '../Category/Category';
import GiftFor from './../GiftFor/GiftFor';
import Slider from './../Slider/Slider';
const NavBar = ({
  onCategoryChange,
  onGiftForChange,
  activeType,
  onSliderChange,
  priceRange,
  sliderValue
}) => {
  return (
    // <Navbar bg="light" expand="sm" className={classes.NavBar}>
    <>
      <div className={classes.NavBar}>
        <span className={classes.Title}>Christmas Gifts</span>
        <Category onCategoryChange={onCategoryChange} />
        <GiftFor onGiftForChange={onGiftForChange} activeType={activeType} />
        <Slider onSliderChange={onSliderChange} sliderValue={sliderValue} />
      </div>

      {/* <Form className={classes.Category}>
        <Form.Group>
          <Form.Label>Select Cetegory</Form.Label>
          <Form.Control
            as="select"
            className={classes.Option}
            onChange={onCategoryChange}
          >
            <option value="Trending">Trending</option>
            <option value="Electronics">Electronics</option>
            <option value="HomeDecor">Home Decor</option>
            <option value="Sports">Sports</option>
            <option value="Appliances">Appliances</option>
            <option value="LifeStyle">Life Style</option>
          </Form.Control>
        </Form.Group>
      </Form> */}
    </>
  );
};

export default NavBar;
