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
const productNames = [
    "Cozy Classic",
    "Relaxed Elegance",
    "Shirt C",
    "Timeless Comfort",
    "Soft Serenity",
    "Gentle Sophistication",
    "Easygoing Charm",
    "Effortless Style",
    "Tranquil Luxury",
    "Classic Casual",
    "Serene Simplicity"
];


createServer({
  routes() {
    this.namespace = "api"

    this.get("/products", () => {
      const products = imagePaths.map((imagePath, index) => ({
        id: index + 1,
        name: productNames[index],
        discPrice: 70 ,
        price : 100,
        img: imagePath,
      }));

      return {
        products,
      };
    });
  },
});
