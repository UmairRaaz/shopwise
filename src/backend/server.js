import { createServer } from "miragejs";
const imagePaths = [
    require('../products/f1.jpg'),
    require('../products/f2.jpg'),
    require('../products/f3.jpg'),
    require('../products/f4.jpg'),
    require('../products/f5.jpg'),
    require('../products/f6.jpg'),
    require('../products/n1.jpg'),
    require('../products/n2.jpg'),
    require('../products/n3.jpg'),
    require('../products/n4.jpg'),
];
const ratings = [];

for (let i = 0; i < 10; i++) {
  const rating = Math.floor(Math.random() * 5) + 1; 
  const decimal = Math.floor(Math.random() * 9) + 1;
  const ratingWithDecimal = parseFloat(`${rating}.${decimal}`);
  ratings.push(ratingWithDecimal);
}

const productsDetails = [
  { name: "Cozy Classic", price: 29.99, discPrice: 24.99, gender: "Men", category: "Casualwear" },
  { name: "Relaxed Elegance", price: 19.99, discPrice: 14.99, gender: "Women", category: "Luxury" },
  { name: "Shirt C", price: 39.99, discPrice: 34.99, gender: "Men", category: "Formalwear" },
  { name: "Timeless Comfort", price: 27.99, discPrice: 22.99, gender: "Women", category: "Casualwear" },
  { name: "Soft Serenity", price: 32.99, discPrice: 27.99, gender: "Men", category: "Luxury" },
  { name: "Gentle Sophistication", price: 21.99, discPrice: 16.99, gender: "Women", category: "Formalwear" },
  { name: "Easygoing Charm", price: 34.99, discPrice: 29.99, gender: "Men", category: "Casualwear" },
  { name: "Effortless Style", price: 25.99, discPrice: 20.99, gender: "Women", category: "Luxury" },
  { name: "Tranquil Luxury", price: 29.99, discPrice: 24.99, gender: "Men", category: "Formalwear" },
  { name: "Classic Casual", price: 19.99, discPrice: 14.99, gender: "Women", category: "Casualwear" }
];
createServer({
  routes() {
    this.namespace = "api"

    this.get("/products", () => {
      const products = imagePaths.map((imagePath, index) => ({
        id: index + 1,
        name: productsDetails[index].name,
        discPrice: productsDetails[index].discPrice ,
        price : productsDetails[index].price,
        img: imagePath,
        rating : ratings[index],
        gender : productsDetails[index].gender,
        category : productsDetails[index].category
      }));

      return {
        products,
      };
    });
  },
});
