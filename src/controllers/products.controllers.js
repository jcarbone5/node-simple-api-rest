const ProductModel = require("../models/products.model");

const productsControllers = {};

productsControllers.getProducts = async (req, res) => {
    try {
        const products = await ProductModel.find({});

        res.json(products);
    } catch (error) {
        res.status(500).json({ message: error });
    }
}

productsControllers.getOneProduct = async (req, res) => {
    const { id } = req.params;
    
    try {
        const product = await ProductModel.findById(id);

        res.json(product);
    } catch (error) {
        res.status(500).json({ message: error });
    }
}

productsControllers.createProduct = async (req, res) => {
    const { name, description, price } = req.body;
    
    try {
        if(name === '' || description === '' || price === 0) {
            return res.status(401).json({ message: 'Data not found' });
        }

        const product = new ProductModel({ name, description, price });
        const newProduct = await product.save();

        res.json(newProduct);
    } catch (error) {
        res.status(500).json({ message: error });
    }
}

productsControllers.removeProduct = async (req, res) => {
    const { id } = req.params;
    
    try {
        const product = await ProductModel.findByIdAndRemove({ _id: id });

        res.json(product);
    } catch (error) {
        res.status(500).json({ message: error }); 
    }
}

productsControllers.updateProduct = async (req, res) => {
    const { id } = req.params;
    const { name, description, price } = req.body;

    try {
        if(name === '' || description === '' || price === 0) {
            return res.status(401).json({ message: 'Data not found' });
        }

        const product = await ProductModel.findByIdAndUpdate({ _id: id }, { name, description, price });

        res.json(product);
    } catch (error) {
        res.status(500).json({ message: error }); 
    }
}

module.exports = productsControllers;