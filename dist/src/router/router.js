"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.router = void 0;
const express_1 = require("express");
const product_controller_1 = __importDefault(require("../controller/product-controller"));
exports.router = (0, express_1.Router)();
exports.router.get('/products', product_controller_1.default.getALL);
exports.router.post('/products', product_controller_1.default.save);
exports.router.delete('/products/:id', product_controller_1.default.remove);
exports.router.put('/products/:id', product_controller_1.default.editProduct);
//# sourceMappingURL=router.js.map