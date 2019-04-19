import React, { Component } from 'react';
import './App.css';
import NavBar from './components/NavBar/NavBar';
import Cards from './components/Cards/Cards';
import products from './productsData';
class App extends Component {
  state = {
    products: [],
    filteredProducts: [],
    category: 'All',
    priceRange: 10000,
    sliderValue: 125,
    giftFor: 'All'
  };

  onCategoryChange = event => {
    const category = event.target.value;

    // this.setState({
    //   ...this.state,
    //   filteredProducts: productsByCategory,
    //   category: category
    // });
    this.applyFilters(
      category,
      this.state.giftFor,
      this.state.priceRange,
      this.state.sliderValue
    );
  };

  onGiftForChange = giftfor => {
    let giftValue;
    if (giftfor === this.state.giftFor) {
      giftValue = 'All';
    } else {
      giftValue = giftfor;
    }
    // this.setState({
    //   ...this.state,
    //   filteredProducts: filteredProducts,
    //   giftFor: giftValue
    // });
    this.applyFilters(
      this.state.category,
      giftValue,
      this.state.priceRange,
      this.state.sliderValue
    );
  };

  onSliderChange = event => {
    event.preventDefault();
    const value = event.target.value;
    let priceRange = this.state.priceRange;
    if (+value === 25) {
      priceRange = 25;
    } else if (+value === 50) {
      priceRange = 50;
    } else if (+value === 75) {
      priceRange = 100;
    } else if (+value === 100) {
      priceRange = 1000;
    } else if (+value === 125) {
      priceRange = 10000;
    } else {
      priceRange = 25;
    }

    // this.setState({
    //   ...this.state,
    //   sliderValue: +value
    // });
    this.applyFilters(
      this.state.category,
      this.state.giftFor,
      priceRange,
      value
    );
  };

  applyFilters = (category, giftValue, priceRange, sliderValue) => {
    let productsByCategory;
    if (category === 'All') {
      productsByCategory = this.state.products;
    } else if (category === 'Trending') {
      productsByCategory = this.state.products.filter(p => {
        return p.isTrending;
      });
    } else {
      productsByCategory = this.state.products.filter(p => {
        return p.category === category;
      });
    }
    let filteredProductsByGift;
    if (giftValue === 'All') {
      filteredProductsByGift = productsByCategory;
    } else {
      filteredProductsByGift = productsByCategory.filter(p => {
        return p.for === giftValue;
      });
    }
    let filteredProductsByPrice = filteredProductsByGift.filter(p => {
      return p.price <= priceRange;
    });

    const filteredProductList = filteredProductsByPrice;
    this.setState({
      ...this.state,
      filteredProducts: filteredProductList,
      category: category,
      giftFor: giftValue,
      priceRange: priceRange,
      sliderValue: sliderValue
    });
  };
  componentDidMount = () => {
    // let response = await fetch('./products.json');
    // let data = await response.text();
    // console.log(data);

    this.setState({
      ...this.state,
      products: products,
      filteredProducts: products
    });
  };

  render() {
    return (
      <>
        <NavBar
          className="Stickey"
          onCategoryChange={this.onCategoryChange}
          onGiftForChange={this.onGiftForChange}
          activeType={this.state.giftFor}
          onSliderChange={this.onSliderChange}
          sliderValue={this.state.sliderValue}
        />
        <div className="Products">
          <Cards products={this.state.filteredProducts} />
        </div>
      </>
    );
  }
}

export default App;
