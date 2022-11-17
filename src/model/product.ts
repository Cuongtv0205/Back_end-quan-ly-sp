import {Schema,model} from 'mongoose'
interface IProduct {
    name?: string,
    price?: number,
    quantity?: number,
    image?: string
}

let ProductSchema = new Schema<IProduct>({
    name: String,
    price: Number,
    quantity: Number,
    image: String
})

let Product = model<IProduct>('Product',ProductSchema);

export {Product}