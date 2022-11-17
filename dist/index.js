"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const mongoose_1 = __importDefault(require("mongoose"));
const cors_1 = __importDefault(require("cors"));
const router_1 = require("./src/router/router");
const DB_URL = 'mongodb://localhost:27017/product_demo';
mongoose_1.default.connect(DB_URL).then(() => {
    console.log('Db connected');
}).catch((err) => {
    console.log(err);
});
const app = (0, express_1.default)();
app.use(express_1.default.json());
app.use((0, cors_1.default)());
app.use('', router_1.router);
app.listen(3000, () => {
    console.log('---Server is running---');
});
//# sourceMappingURL=index.js.map