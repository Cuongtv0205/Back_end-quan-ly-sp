"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const product_1 = require("../model/product");
class ProductController {
    constructor() {
        this.getALL = async (req, res) => {
            let products = await product_1.Product.find();
            return res.status(200).json(products);
        };
        this.save = async (req, res) => {
            let product = await product_1.Product.create(req.body);
            await product.save();
            return res.status(200).json(product);
        };
        this.remove = async (req, res) => {
            let id = req.params.id;
            let products = await product_1.Product.findById(id);
            if (products) {
                await product_1.Product.deleteOne({ _id: id });
                res.status(201).json({
                    message: 'Success'
                });
            }
            else {
                res.render('error');
            }
        };
        this.editProduct = async (req, res) => {
            let id = req.params.id;
            let newProduct = req.body;
            await product_1.Product.updateOne({ _id: id }, {
                $set: newProduct
            });
            return res.status(200).json({
                message: 'Edit Success'
            });
        };
    }
}
exports.default = new ProductController();
//# sourceMappingURL=product-controller.js.map