const products = [
  {
    id: 1,
    name: 'Top',
    isTrending: false,
    category: 'Sports',
    price: 250,
    for: 'Women',
    imgUrl: 'https://source.unsplash.com/random/90x60?sig='
  },
  {
    id: 2,
    name: 'Foot Ball',
    isTrending: false,
    category: 'Sports',
    price: 100,
    for: 'Men',
    imgUrl: 'https://source.unsplash.com/random/90x60?sig='
  },
  {
    id: 3,
    name: 'Kettle',
    isTrending: false,
    category: 'Electronics',
    price: 1000,
    for: 'Men',
    imgUrl: 'https://source.unsplash.com/random/90x60?sig='
  },
  {
    id: 4,
    name: 'Sofa',
    isTrending: false,
    category: 'HomeDecor',
    price: 1000,
    for: 'Teen',
    imgUrl: 'https://source.unsplash.com/random/90x60?sig='
  },
  {
    id: 5,
    name: 'Kettle',
    isTrending: false,
    category: 'Electronics',
    price: 1000,
    for: 'Men',
    imgUrl: 'https://source.unsplash.com/random/90x60?sig='
  },
  {
    id: 6,
    name: 'Kettle',
    isTrending: false,
    category: 'Electronics',
    price: 1000,
    for: 'Teen',
    imgUrl: 'https://source.unsplash.com/random/90x60?sig='
  },
  {
    id: 7,
    name: 'Kettle',
    isTrending: false,
    category: 'Electronics',
    price: 1000,
    for: 'Men',
    imgUrl: 'https://source.unsplash.com/random/90x60?sig='
  },
  {
    id: 8,
    name: 'Kettle',
    isTrending: false,
    category: 'Electronics',
    price: 1000,
    for: 'Teen',
    imgUrl: 'https://source.unsplash.com/random/90x60?sig='
  },
  {
    id: 9,
    name: 'Kettle',
    isTrending: false,
    category: 'Electronics',
    price: 1000,
    for: 'Teen',
    imgUrl: 'https://source.unsplash.com/random/90x60?sig='
  },
  {
    id: 10,
    name: 'Kettle',
    isTrending: false,
    category: 'Electronics',
    price: 1000,
    for: 'Teen',
    imgUrl: 'https://source.unsplash.com/random/90x60?sig='
  },
  {
    id: 11,
    name: 'Kettle',
    isTrending: false,
    category: 'Electronics',
    price: 1000,
    for: 'Teen',
    imgUrl: 'https://source.unsplash.com/random/90x60?sig='
  },
  {
    id: 12,
    name: 'Kettle',
    isTrending: false,
    category: 'Electronics',
    price: 1000,
    for: 'Teen',
    imgUrl: 'https://source.unsplash.com/random/90x60?sig='
  },
  {
    id: 13,
    name: 'Kettle',
    isTrending: false,
    category: 'Electronics',
    price: 1000,
    for: 'Men',
    imgUrl: 'https://source.unsplash.com/random/90x60?sig='
  },
  {
    id: 14,
    name: 'Kettle',
    isTrending: false,
    category: 'Electronics',
    price: 1000,
    for: 'Teen',
    imgUrl: 'https://source.unsplash.com/random/90x60?sig='
  },
  {
    id: 15,
    name: 'Kettle',
    isTrending: false,
    category: 'Electronics',
    price: 1000,
    for: 'Teen',
    imgUrl: 'https://source.unsplash.com/random/90x60?sig='
  },
  {
    id: 16,
    name: 'Cooker',
    isTrending: false,
    category: 'Appliances',
    price: 300,
    for: 'Women',
    imgUrl: 'https://source.unsplash.com/random/90x60?sig='
  },
  {
    id: 17,
    name: 'Cooker',
    isTrending: false,
    category: 'Appliances',
    price: 300,
    for: 'Women',
    imgUrl: 'https://source.unsplash.com/random/90x60?sig='
  },
  {
    id: 18,
    name: 'Cooker',
    isTrending: false,
    category: 'Appliances',
    price: 300,
    for: 'Women',
    imgUrl: 'https://source.unsplash.com/random/90x60?sig='
  },
  {
    id: 19,
    name: 'Cooker',
    isTrending: false,
    category: 'Appliances',
    price: 300,
    for: 'Women',
    imgUrl: 'https://source.unsplash.com/random/90x60?sig='
  },
  {
    id: 20,
    name: 'Cooker',
    isTrending: false,
    category: 'Appliances',
    price: 300,
    for: 'Women',
    imgUrl: 'https://source.unsplash.com/random/90x60?sig='
  },
  {
    id: 21,
    name: 'Cooker',
    isTrending: false,
    category: 'Appliances',
    price: 300,
    for: 'Women',
    imgUrl: 'https://source.unsplash.com/random/90x60?sig='
  },
  {
    id: 22,
    name: 'Cooker',
    isTrending: false,
    category: 'Appliances',
    price: 300,
    for: 'Women',
    imgUrl: 'https://source.unsplash.com/random/90x60?sig='
  },
  {
    id: 23,
    name: 'Cooker',
    isTrending: false,
    category: 'Appliances',
    price: 300,
    for: 'Men',
    imgUrl: 'https://source.unsplash.com/random/90x60?sig='
  },
  {
    id: 24,
    name: 'Cooker',
    isTrending: false,
    category: 'Appliances',
    price: 300,
    for: 'Men',
    imgUrl: 'https://source.unsplash.com/random/90x60?sig='
  },
  {
    id: 25,
    name: 'Cooker',
    isTrending: false,
    category: 'Appliances',
    price: 300,
    for: 'Women',
    imgUrl: 'https://source.unsplash.com/random/90x60?sig='
  },
  {
    id: 26,
    name: 'Cooker',
    isTrending: false,
    category: 'Appliances',
    price: 300,
    for: 'Men',
    imgUrl: 'https://source.unsplash.com/random/90x60?sig='
  },
  {
    id: 27,
    name: 'Cooker',
    isTrending: false,
    category: 'Appliances',
    price: 300,
    for: 'Women',
    imgUrl: 'https://source.unsplash.com/random/90x60?sig='
  },
  {
    id: 28,
    name: 'Cooker',
    isTrending: false,
    category: 'Appliances',
    price: 300,
    for: 'Men',
    imgUrl: 'https://source.unsplash.com/random/90x60?sig='
  },
  {
    id: 29,
    name: 'Cooker',
    isTrending: false,
    category: 'Appliances',
    price: 300,
    for: 'Women',
    imgUrl: 'https://source.unsplash.com/random/90x60?sig='
  },
  {
    id: 30,
    name: 'Cooker',
    isTrending: false,
    category: 'Appliances',
    price: 300,
    for: 'Women',
    imgUrl: 'https://source.unsplash.com/random/90x60?sig='
  },
  {
    id: 31,
    name: 'Cooker',
    isTrending: false,
    category: 'Appliances',
    price: 300,
    for: 'Women',
    imgUrl: 'https://source.unsplash.com/random/90x60?sig='
  },
  {
    id: 32,
    name: 'Jeans',
    isTrending: false,
    category: 'Sports',
    price: 300,
    for: 'Men',
    imgUrl: 'https://source.unsplash.com/random/90x60?sig='
  },
  {
    id: 33,
    name: 'Jeans',
    isTrending: false,
    category: 'Sports',
    price: 300,
    for: 'Men',
    imgUrl: 'https://source.unsplash.com/random/90x60?sig='
  },
  {
    id: 34,
    name: 'Jeans',
    isTrending: false,
    category: 'Sports',
    price: 300,
    for: 'Men',
    imgUrl: 'https://source.unsplash.com/random/90x60?sig='
  },
  {
    id: 35,
    name: 'Jeans',
    isTrending: false,
    category: 'Sports',
    price: 300,
    for: 'Men',
    imgUrl: 'https://source.unsplash.com/random/90x60?sig='
  },
  {
    id: 36,
    name: 'Jeans',
    isTrending: false,
    category: 'Sports',
    price: 300,
    for: 'Men',
    imgUrl: 'https://source.unsplash.com/random/90x60?sig='
  },
  {
    id: 37,
    name: 'Jeans',
    isTrending: false,
    category: 'Sports',
    price: 300,
    for: 'Men',
    imgUrl: 'https://source.unsplash.com/random/90x60?sig='
  },
  {
    id: 38,
    name: 'Jeans',
    isTrending: true,
    category: 'Sports',
    price: 300,
    for: 'Men',
    imgUrl: 'https://source.unsplash.com/random/90x60?sig='
  },
  {
    id: 39,
    name: 'Jeans',
    isTrending: true,
    category: 'Sports',
    price: 300,
    for: 'Men',
    imgUrl: 'https://source.unsplash.com/random/90x60?sig='
  },
  {
    id: 40,
    name: 'Jeans',
    isTrending: true,
    category: 'Sports',
    price: 300,
    for: 'Men',
    imgUrl: 'https://source.unsplash.com/random/90x60?sig='
  },
  {
    id: 41,
    name: 'Table',
    isTrending: true,
    category: 'HomeDecor',
    price: 300,
    for: 'Elderly',
    imgUrl: 'https://source.unsplash.com/random/90x60?sig='
  },
  {
    id: 42,
    name: 'Jeans',
    isTrending: true,
    category: 'HomeDecor',
    price: 25,
    for: 'Women',
    imgUrl: 'https://source.unsplash.com/random/90x60?sig='
  },
  {
    id: 43,
    name: 'Jeans',
    isTrending: true,
    category: 'HomeDecor',
    price: 25,
    for: 'Women',
    imgUrl: 'https://source.unsplash.com/random/90x60?sig='
  },
  {
    id: 44,
    name: 'Jeans',
    isTrending: true,
    category: 'HomeDecor',
    price: 25,
    for: 'Women',
    imgUrl: 'https://source.unsplash.com/random/90x60?sig='
  },
  {
    id: 45,
    name: 'Jeans',
    isTrending: true,
    category: 'HomeDecor',
    price: 25,
    for: 'Women',
    imgUrl: 'https://source.unsplash.com/random/90x60?sig='
  },
  {
    id: 46,
    name: 'Jeans',
    isTrending: true,
    category: 'HomeDecor',
    price: 25,
    for: 'Women',
    imgUrl: 'https://source.unsplash.com/random/90x60?sig='
  },
  {
    id: 47,
    name: 'Jeans',
    isTrending: true,
    category: 'HomeDecor',
    price: 25,
    for: 'Women',
    imgUrl: 'https://source.unsplash.com/random/90x60?sig='
  },
  {
    id: 48,
    name: 'Jeans',
    isTrending: true,
    category: 'HomeDecor',
    price: 25,
    for: 'Women',
    imgUrl: 'https://source.unsplash.com/random/90x60?sig='
  },
  {
    id: 49,
    name: 'Jeans',
    isTrending: true,
    category: 'HomeDecor',
    price: 25,
    for: 'Women',
    imgUrl: 'https://source.unsplash.com/random/90x60?sig='
  },
  {
    id: 50,
    name: 'Jeans',
    isTrending: true,
    category: 'HomeDecor',
    price: 25,
    for: 'Women',
    imgUrl: 'https://source.unsplash.com/random/90x60?sig='
  },
  {
    id: 51,
    name: 'Jeans',
    isTrending: true,
    category: 'HomeDecor',
    price: 25,
    for: 'Women',
    imgUrl: 'https://source.unsplash.com/random/90x60?sig='
  },
  {
    id: 53,
    name: 'Toy',
    isTrending: true,
    category: 'Sports',
    price: 1299,
    for: 'Kids',
    imgUrl: 'https://source.unsplash.com/random/90x60?sig='
  },
  {
    id: 54,
    name: 'Toy',
    isTrending: true,
    category: 'Sports',
    price: 1299,
    for: 'Kids',
    imgUrl: 'https://source.unsplash.com/random/90x60?sig='
  },
  {
    id: 55,
    name: 'Toy',
    isTrending: true,
    category: 'Sports',
    price: 1299,
    for: 'Kids',
    imgUrl: 'https://source.unsplash.com/random/90x60?sig='
  },
  {
    id: 56,
    name: 'Toy',
    isTrending: true,
    category: 'Sports',
    price: 1299,
    for: 'Kids',
    imgUrl: 'https://source.unsplash.com/random/90x60?sig='
  },
  {
    id: 57,
    name: 'Toy',
    isTrending: true,
    category: 'Sports',
    price: 1299,
    for: 'Kids',
    imgUrl: 'https://source.unsplash.com/random/90x60?sig='
  },
  {
    id: 58,
    name: 'Toy',
    isTrending: true,
    category: 'Sports',
    price: 1299,
    for: 'Kids',
    imgUrl: 'https://source.unsplash.com/random/90x60?sig='
  },
  {
    id: 59,
    name: 'Toy',
    isTrending: true,
    category: 'Sports',
    price: 1299,
    for: 'Kids',
    imgUrl: 'https://source.unsplash.com/random/90x60?sig='
  },
  {
    id: 60,
    name: 'Toy',
    isTrending: true,
    category: 'Sports',
    price: 1299,
    for: 'Kids',
    imgUrl: 'https://source.unsplash.com/random/90x60?sig='
  },
  {
    id: 61,
    name: 'Toy',
    isTrending: true,
    category: 'Sports',
    price: 1299,
    for: 'Kids',
    imgUrl: 'https://source.unsplash.com/random/90x60?sig='
  },
  {
    id: 62,
    name: 'Chair',
    isTrending: false,
    category: 'HomeDecor',
    price: 250,
    for: 'Elderly',
    imgUrl: 'https://source.unsplash.com/random/90x60?sig='
  },
  {
    id: 63,
    name: 'Chair',
    isTrending: false,
    category: 'HomeDecor',
    price: 250,
    for: 'Elderly',
    imgUrl: 'https://source.unsplash.com/random/90x60?sig='
  },
  {
    id: 64,
    name: 'Chair',
    isTrending: false,
    category: 'HomeDecor',
    price: 250,
    for: 'Elderly',
    imgUrl: 'https://source.unsplash.com/random/90x60?sig='
  },
  {
    id: 65,
    name: 'Chair',
    isTrending: false,
    category: 'HomeDecor',
    price: 250,
    for: 'Elderly',
    imgUrl: 'https://source.unsplash.com/random/90x60?sig='
  },
  {
    id: 66,
    name: 'Chair',
    isTrending: false,
    category: 'HomeDecor',
    price: 250,
    for: 'Elderly',
    imgUrl: 'https://source.unsplash.com/random/90x60?sig='
  },
  {
    id: 67,
    name: 'Chair',
    isTrending: false,
    category: 'HomeDecor',
    price: 250,
    for: 'Elderly',
    imgUrl: 'https://source.unsplash.com/random/90x60?sig='
  },
  {
    id: 68,
    name: 'Chair',
    isTrending: false,
    category: 'HomeDecor',
    price: 250,
    for: 'Elderly',
    imgUrl: 'https://source.unsplash.com/random/90x60?sig='
  },
  {
    id: 69,
    name: 'Chair',
    isTrending: false,
    category: 'HomeDecor',
    price: 250,
    for: 'Elderly',
    imgUrl: 'https://source.unsplash.com/random/90x60?sig='
  },
  {
    id: 70,
    name: 'Chair',
    isTrending: false,
    category: 'HomeDecor',
    price: 250,
    for: 'Elderly',
    imgUrl: 'https://source.unsplash.com/random/90x60?sig='
  },
  {
    id: 71,
    name: 'Chair',
    isTrending: false,
    category: 'HomeDecor',
    price: 250,
    for: 'Elderly',
    imgUrl: 'https://source.unsplash.com/random/90x60?sig='
  },
  {
    id: 72,
    name: 'Chair',
    isTrending: false,
    category: 'HomeDecor',
    price: 250,
    for: 'Elderly',
    imgUrl: 'https://source.unsplash.com/random/90x60?sig='
  },
  {
    id: 73,
    name: 'Friendship Band',
    isTrending: true,
    category: 'Sports',
    price: 25,
    for: 'Friends',
    imgUrl: 'https://source.unsplash.com/random/90x60?sig='
  },
  {
    id: 74,
    name: 'Friendship Band',
    isTrending: true,
    category: 'Lifestyle',
    price: 50,
    for: 'Friends',
    imgUrl: 'https://source.unsplash.com/random/90x60?sig='
  },
  {
    id: 75,
    name: 'Friendship Band',
    isTrending: true,
    category: 'Lifestyle',
    price: 25,
    for: 'Friends',
    imgUrl: 'https://source.unsplash.com/random/90x60?sig='
  },
  {
    id: 76,
    name: 'Friendship Band',
    isTrending: true,
    category: 'Lifestyle',
    price: 25,
    for: 'Friends',
    imgUrl: 'https://source.unsplash.com/random/90x60?sig='
  },
  {
    id: 77,
    name: 'Friendship Band',
    isTrending: false,
    category: 'Lifestyle',
    price: 50,
    for: 'Friends',
    imgUrl: 'https://source.unsplash.com/random/90x60?sig='
  },
  {
    id: 78,
    name: 'Friendship Band',
    isTrending: false,
    category: 'Lifestyle',
    price: 50,
    for: 'Friends',
    imgUrl: 'https://source.unsplash.com/random/90x60?sig='
  },
  {
    id: 79,
    name: 'Friendship Band',
    isTrending: false,
    category: 'Lifestyle',
    price: 50,
    for: 'Friends',
    imgUrl: 'https://source.unsplash.com/random/90x60?sig='
  },
  {
    id: 80,
    name: 'Friendship Band',
    isTrending: false,
    category: 'Lifestyle',
    price: 50,
    for: 'Friends',
    imgUrl: 'https://source.unsplash.com/random/90x60?sig='
  },
  {
    id: 81,
    name: 'Friendship Band',
    isTrending: false,
    category: 'Lifestyle',
    price: 50,
    for: 'Friends',
    imgUrl: 'https://source.unsplash.com/random/90x60?sig='
  },
  {
    id: 82,
    name: 'Friendship Band',
    isTrending: false,
    category: 'Lifestyle',
    price: 50,
    for: 'Friends',
    imgUrl: 'https://source.unsplash.com/random/90x60?sig='
  },
  {
    id: 83,
    name: 'Friendship Band',
    isTrending: false,
    category: 'Lifestyle',
    price: 50,
    for: 'Friends',
    imgUrl: 'https://source.unsplash.com/random/90x60?sig='
  },
  {
    id: 84,
    name: 'Friendship Band',
    isTrending: false,
    category: 'Lifestyle',
    price: 50,
    for: 'Friends',
    imgUrl: 'https://source.unsplash.com/random/90x60?sig='
  },
  {
    id: 85,
    name: 'Friendship Band',
    isTrending: false,
    category: 'Lifestyle',
    price: 50,
    for: 'Friends',
    imgUrl: 'https://source.unsplash.com/random/90x60?sig='
  },
  {
    id: 86,
    name: 'Friendship Band',
    isTrending: false,
    category: 'Lifestyle',
    price: 50,
    for: 'Friends',
    imgUrl: 'https://source.unsplash.com/random/90x60?sig='
  },
  {
    id: 87,
    name: 'Friendship Band',
    isTrending: false,
    category: 'Lifestyle',
    price: 50,
    for: 'Friends',
    imgUrl: 'https://source.unsplash.com/random/90x60?sig='
  },
  {
    id: 88,
    name: 'Friendship Band',
    isTrending: false,
    category: 'Lifestyle',
    price: 50,
    for: 'Friends',
    imgUrl: 'https://source.unsplash.com/random/90x60?sig='
  },
  {
    id: 89,
    name: 'Friendship Band',
    isTrending: false,
    category: 'Lifestyle',
    price: 50,
    for: 'Friends',
    imgUrl: 'https://source.unsplash.com/random/90x60?sig='
  },
  {
    id: 90,
    name: 'Friendship Band',
    isTrending: false,
    category: 'Sports',
    price: 100,
    for: 'Friends',
    imgUrl: 'https://source.unsplash.com/random/90x60?sig='
  }
];

export default products;
