const { Router } = require("express");
const router = Router();

const {
    getProducts,
    getOneProduct,
    createProduct,
    removeProduct,
    updateProduct
} = require("../controllers/products.controllers");

router.get("/", getProducts);
router.get("/:id", getOneProduct);
router.post("/", createProduct);
router.delete("/:id", removeProduct);
router.put("/:id", updateProduct);

module.exports = router;