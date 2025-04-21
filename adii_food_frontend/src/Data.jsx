import cartImage1 from "./assets/Apple-cake.jpg"
import cartImage2 from "./assets/banana-cake.jpg"
import cartImage3 from "./assets/Battenberg-Cake.jpg"
import cartImage4 from "./assets/black-forest-cake.jpg"
import menuImage1 from "./assets/brownie-cake.jpg"
import menuImage2 from "./assets/bundt-cake.jpg"
import menuImage3 from "./assets/cake1.jpg"
import menuImage4 from "./assets/carrot-cake.jpg"
import menuImage5 from "./assets/Charlotte-Cake.jpg"
import menuImage6 from "./assets/chocolate-cake.jpg"
import productImage1 from "./assets/cupcake.jpg"
import productImage2 from "./assets/cake-torto desert.jpg"
import productImage3 from "./assets/red-velvet-cake.jpg"
import reviewImage1 from "./assets/review1.jpg"
import reviewImage2 from "./assets/review2.jpg"
import reviewImage3 from "./assets/review3.webp"






const cart = [
    {
        img:cartImage1,
    },
    {
        img:cartImage2,
    },
    {
        img:cartImage3,
    },
    {
        img:cartImage4,
    },
];

const menu = [
    { img: menuImage1, name: "Brownie Cake", price: 299.99, originalPrice: 499.99 },
    { img: menuImage2, name: "Bundt Cake", price: 349.99, originalPrice: 599.99 },
    { img: menuImage3, name: "Cute Cake", price: 259.99, originalPrice: 399.99 },
    { img: menuImage4, name: "Carrot Cake", price: 399.99, originalPrice: 599.99 },
    { img: menuImage5, name: "Charlotte Cake", price: 449.99, originalPrice: 699.99 },
    { img: menuImage6, name: "Chocolate Cake", price: 499.99, originalPrice: 799.99 }
  ];
  
  const product = [
    { img: productImage1, name: "Cup Cake", price: 120.99, originalPrice: 220.99 },
    { img: productImage2, name: "Torato Desert Cake", price: 199.99, originalPrice: 299.99 },
    { img: productImage3, name: "Red Velvet Cake", price: 180.99, originalPrice: 270.99 }
  ];
  

const review=[
    {img:reviewImage1,name:"Suresh Kumar",msg: 'Absolutely delicious! The chocolate cake was moist and rich-the best I have ever had.',},
    {img:reviewImage2,name:"Rajneesh Goenka",msg: 'The presentation was beautiful and the flavors were amazing. I ordered it for my mom birthday and everyone loved it!'},
    {img:reviewImage3,name:"Shalini Iqbal",msg: 'Incredible texture and just the right amount of sweetness. Will definitely order again!'}
]

export {cart,menu,product,review}
