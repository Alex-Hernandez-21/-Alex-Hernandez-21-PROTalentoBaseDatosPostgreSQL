const express = require("express");
const server = express(); //=> {}.get .post
const port = 3000; // en mi pc lo corro en el localhost:

//RUTAS Y ENDPOINTS //
//http://localhost:3000
//req => request => pedido
//res => response => respuesta
//server.get("/endpoint", (req,res)=>{ res.send("respuesta que quiero")})



server.get("/product", (req, res) => {
  let order = req.query.order;
  if(order==="asc"){
    console.log("envio de resultados ordenados ascendentes")
  }else if(order==="desc"){
    console.log("envio de resultados ordenados descendentes")
  }else{
    console.log("envio de resultados desordenados")
  }

 
  res.send("Hello GET");
});


// peticion req.param
server.get("/products/:id", (req, res) => {
  //con destructuryng
  //let {id, categoria} = req.params;
  let id = Number(req.params.id);
  console.log("Esta ruta me traeria el producto especificado", req.params);
  res.send("Coca-Cola Ligth");
});

// peticion req.param ejemplo con varios parametros
server.get("/productss/:categoria/:producto", (req, res) => {
  let categoria = req.params.categoria;
  let producto= req.params.producto;
  console.log("Esta ruta me traeria el producto categoria", categoria);
  console.log("Esta ruta me traeria el producto ", producto);
  res.send("Hello GET");
});


server.get("/product", (req, res) => {
  console.log("entrada a la ruta GET");
  res.send("Hello GET");
});

server.post("/product", (req, res) => {
  console.log("entrada a la ruta post"); //se va a la consola
  res.send("Hello POST!"); //al body de nuestro cliente
});

server.patch("/product", (req, res) => {
  console.log("entrada a la ruta patch"); //se va a la consola
  res.send("Hello PATCH!"); //al body de nuestro cliente
});

server.delete("/product", (req, res) => {
  console.log("entrada a la ruta delete"); //se va a la consola
  res.send("Hello DELETE!"); //al body de nuestro cliente
});

/* Escucha del servidor */
server.listen(port, () => {
  console.log(`Esta corriendo el servidor correctamente en el puerto: ${port}`);
});

console.log("resresta")