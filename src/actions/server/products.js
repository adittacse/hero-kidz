"use server";

import { collections, dbConnect } from "@/lib/dbConnect";
import { ObjectId } from "mongodb";

export const getProducts = async () => {
    const cursor = dbConnect(collections.PRODUCTS).find();
    const products = await cursor.toArray();
    return products;
}

export const getSingleProduct = async (id) => {
    if (id.length !== 24) {
        return {};
    }
    const query = { _id: new ObjectId(id) };

    const product = await dbConnect(collections.PRODUCTS).findOne(query);
    return { ...product, _id: product._id.toString() } || {};
}