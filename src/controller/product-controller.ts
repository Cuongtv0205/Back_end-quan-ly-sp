import {Request, Response} from "express";
import {Product} from "../model/product";

class ProductController {
    getALL = async (req: Request, res: Response) => {
        let products = await Product.find();
        return res.status(200).json(products)
    }
    save = async (req: Request, res: Response) => {
        let product = await Product.create(req.body);
        await product.save();
        return res.status(200).json(product);
    }

    remove = async (req: Request, res: Response) => {
        let id = req.params.id
        let products = await Product.findById(id);
        if (products) {
            await Product.deleteOne({_id: id})
            res.status(201).json({
                message: 'Success'
            })
        } else {
            res.render('error');
        }
    }

    editProduct = async (req: Request, res: Response) => {
        let id = req.params.id;
        let newProduct = req.body;
        await Product.updateOne(
            {_id: id},
            {
                $set: newProduct
            }
        )
        return res.status(200).json({
            message: 'Edit Success'
        })
    }
}


export default new ProductController();