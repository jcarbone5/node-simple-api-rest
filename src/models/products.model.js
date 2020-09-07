const { Schema, model } = require("mongoose");

const productSchema = new Schema({
    name: { type: String, trim: true },
    description: { type: String, trim: true },
    price: { type: Number }
});

module.exports = model("product", productSchema);