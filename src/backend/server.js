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
    require('../products/t1.jpg'),
    require('../products/t2.jpg'),
    require('../products/t3.jpg')
];
const ratings = [];

for (let i = 0; i < 13; i++) {
  const rating = Math.floor(Math.random() * 4) + 1; 
  const decimal = Math.floor(Math.random() * 9) + 1;
  const ratingWithDecimal = parseFloat(`${rating}.${decimal}`);
  ratings.push(ratingWithDecimal);
}

const productsDetails = [
  { name: "Cozy Classic", price: 30, discPrice: 25, gender: "Men", category: "Casualwear" },
  { name: "Relaxed Elegance", price: 20, discPrice: 15, gender: "Women", category: "Luxury" },
  { name: "Shirt C", price: 40, discPrice: 35, gender: "Men", category: "Formalwear" },
  { name: "Timeless Comfort", price: 30, discPrice: 25, gender: "Women", category: "Casualwear" },
  { name: "Soft Serenity", price: 33, discPrice: 28, gender: "Men", category: "Luxury" },
  { name: "Gentle Sophistication", price: 22, discPrice: 17, gender: "Women", category: "Formalwear" },
  { name: "Easygoing Charm", price: 35, discPrice: 30, gender: "Men", category: "Casualwear" },
  { name: "Effortless Style", price: 25, discPrice: 20, gender: "Women", category: "Luxury" },
  { name: "Tranquil Luxury", price: 30, discPrice: 25, gender: "Men", category: "Formalwear" },
  { name: "Classic Casual", price: 20, discPrice: 15, gender: "Women", category: "Casualwear" },
  { name: "Classic Casual", price: 34, discPrice: 30, gender: "Men", category: "Casualwear" },
  { name: "Classic Casual", price: 35, discPrice: 30, gender: "Men", category: "Casualwear" },
  { name: "Classic Casual", price: 35, discPrice: 30, gender: "Men", category: "Casualwear" }
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
