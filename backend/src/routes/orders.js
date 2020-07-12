import express from "express";


const orders = express.Router({});

orders.get("/", (req, res) => {
    res.send(["order 1"]);
  });

  export default orders
