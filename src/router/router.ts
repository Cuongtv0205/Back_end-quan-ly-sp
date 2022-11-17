import {Router} from "express";
import productController from "../controller/product-controller";

export const router = Router();
router.get('/products',productController.getALL);
router.post('/products',productController.save);  //showALL
router.delete('/products/:id',productController.remove);
router.put('/products/:id',productController.editProduct);
