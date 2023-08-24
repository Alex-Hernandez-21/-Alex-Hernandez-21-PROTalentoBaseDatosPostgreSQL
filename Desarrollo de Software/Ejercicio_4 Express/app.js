console.log("Hello people")

// import express from 'express';
const express = require('express');
const server = express();
const port = 3002


let marketProducts = [
  {
    id: 1,
    name: "Honda CB500",
    color:"redblack",
    price: 45000,
    stock: 35
  },
  {
    id: 2,
    name: "Yamaha MT09",
    color:"black",
    price: 90000,
    stock: 20
  },
  {
    id: 3,
    name: "Suzuki Vestrom 650",
    color:"yellow",
    price: 50000,
    stock: 40
  },
  {
    id: 4,
    name: "BMW F850",
    color:"withblue",
    price: 80000,
    stock: 15
  },
  {
    id: 5,
    name: "Ducati Diablo",
    color:"black",
    price: 100000,
    stock: 18
  },
  {
    id: 6,
    name: "Auteco Dominar 400",
    color:"grey",
    price: 20000,
    stock: 55
  },
  {
    id: 7,
    name: "Royal Enfield Himalaya",
    color:"grey",
    price: 22000,
    stock: 30
  },
  {
    id: 8,
    name: "Harley Davison PanAmerican 1250",
    color:"greyyelow",
    price: 120000,
    stock: 15
  },
  {
    id: 9,
    name: "Yamaha Tenere 1200",
    color:"green",
    price: 110000,
    stock: 10
  },
  {
    id: 10,
    name: "Kawazaki Z1000",
    color:"green",
    price: 130000,
    stock: 20
  }
];


server.get("/product", (req, res) => {
  //1- Filtrar por query los colores
  //2- Filtrar por query los precios / maxPrice
  //3- Filtrar por query los stock
  try {
    let color = req.query.color;
    let maxPrice = req.query.price;
    let stock = req.query.stock;

    if (color) {
      let productFound = marketProducts.filter((car) => car.color === color);
      res.status(202).json(productFound);
    } else if (maxPrice) {
      let productFound = marketProducts.filter((car) => car.price <= maxPrice);
      res.status(202).json(productFound);
    } else if (stock) {
      let productFound = marketProducts.filter((car) => car.stock >= stock);
      res.status(202).json(productFound);
    } else {
      res.status(202).json(marketProducts);
    }
  } catch (error) {
    console.log("ESTE ES EL ERROR QUE OCASIONA TODO=====> ", error);
    res.status(404).json("ERROR 404");
  }
});

server.get("/product/:name", (req, res) => {
  try {
    let name = req.params.name;
    let productFound = marketProducts.find((car) => car.name ===  name);
    res.status(200).json(productFound); 
    } catch (error) {
        console.log(error);
        res.status(400).json("Error en el try por el name");        
    }
});

server.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

