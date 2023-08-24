const express = require("express");
const cors = require("cors");
const { Sequelize } = require("sequelize");
const server = express(); //=> {}.get .post
const port = 3001; // en mi pc lo corro en el localhost:

const bodyParser = require("body-parser");
server.use(bodyParser.urlencoded({ extended: true, limit: "50mb" }));
server.use(bodyParser.json({ limit: "50mb" }));
server.use(cors());

/*-------------SEQUELIZE--------------------------------------------------------*/
/* VARIABLES DE ENTORNO */
const USER_DB = "postgres";
const PASS_DB = "1234";
const HOST_DB = "localhost";
const PORT_DB = "5432";
const NAME_DB = "BlackQueen";
/* ------------------- */

// const sequelize = new Sequelize('postgres://user:pass@example.com:5432/dbname')
// const sequelize = new Sequelize('postgres://postgres:1234@localhost:5432/carStore')
const sequelize = new Sequelize(
  `postgres://${USER_DB}:${PASS_DB}@${HOST_DB}:${PORT_DB}/${NAME_DB}`
);
async function testConnection() {
  try {
    await sequelize.authenticate();
    console.log("Estas conectado a la base de datos");
  } catch (error) {
    console.error("No es posible conectarse a la base de datos:", error);
  }
}

testConnection();

//middleware para que se pueda hacer peticiones a la api desde otros dominios
let marketProducts = [
    {
        id:1,
        name: "Ferrari 4 puertas",
        color:"red",
        price:150,
        stock:25
    },
    {
        id:2,
        name: "Lamborgini",
        color:"yellow",
        price: 100,
        stock: 5
    },
    {
        id:3,
        name: "chevrolet Camaro",
        color:"yellow",
        price: 200,
        stock: 10
    }
  ]
// filtrado por query
server.get("/product", (req, res) => {

    try {
        let color = req.query.color;
    let maxPrice = req.query.price;
    let stock = req.query.stock;

    if(color){
        let productFound = marketProducts.filter((car) => car.color === color);
        res.status(200).json(productFound);  
    }else if(maxPrice){
        let productFound = marketProducts.f((car) => car.price <= maxPrice);
        res.status(200).json(productFound);  
    }else if(stock){
        let productFound = marketProducts.filter((car) => car.stock >= stock);
        res.status(200).json(productFound);  
    }else{
        res.status(200).json(marketProducts); 
    }
        
    } catch (error) {
        res.status(400).json("Error en el try por /products");
    }
    
     
});

//filtrado por params

server.get("/product/:id", (req, res) => {

    try {
       let id = Number(req.params.id);
    let productFound = marketProducts.find((car) => car.id ===  id);
    res.status(200).json(productFound); 
    } catch (error) {
        console.log(error);
        res.status(400).json("Error en el try por el id");        
    }
    
});

//crear un producto con datos por BODY

server.post("/product", (req, res) => {
    try {
        let newProduct = req.body;
        res.status(200).json(newProduct);
        console.log(newProduct);
    } catch (error) {
        res.status(400).send("Error en la ruta de post");
    }
    
});


/* Escucha del servidor */
server.listen(port, () => {
  console.log(`Esta corriendo el servidor correctamente en el puerto: ${port}`);
});

console.log("Hellos")