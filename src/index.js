const express = require("express");
const morgan = require("morgan");

//Initializations
const app = express();
require("./database");

//Settings
app.set("port", process.env.PORT || 3000);

//Middlewares
app.use(morgan('dev'));
app.use(express.json());

//Routes
app.use("/products", require("./routes/products.routes"));

//Server listen
const start = async () => {
    try {
        await app.listen(app.get("port"));
        console.log("Server on port", app.get("port"));
    } catch (error) {
        console.log(error);
    }
}

start();