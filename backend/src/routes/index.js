import express from "express";
import orders from './orders.js';
import cart from "./cart.js";
<<<<<<< HEAD
import products from './products.js';
import users from './users.js';
=======
import users from "./users.js";
import products from './products.js'
>>>>>>> ee582dd22334b6b1437cdbd455cf30cfde009569
import wishlist from "./wishlist.js";

const routes = express.Router({});

routes.get("/", (req, res) => {
  res.send("Hello API!");
});

routes.use('/orders', orders)
routes.use("/cart", cart);
routes.use('/products', products)
routes.use("/wishlist", wishlist);
routes.use("/users", users);

export default routes;