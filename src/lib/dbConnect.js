const { MongoClient, ServerApiVersion } = require("mongodb");

const uri = `mongodb+srv://${process.env.DB_USERNAME}:${process.env.DB_PASSWORD}@cluster0.gkaujxr.mongodb.net/?appName=Cluster0`;
const dbName = process.env.DB_USERNAME;

export const collections = {
    PRODUCTS: "products",
    USERS: "users",
    CART: "cart",
    ORDER: "order",
}
const client = new MongoClient(uri, {
    serverApi: {
        version: ServerApiVersion.v1,
        strict: true,
        deprecationErrors: true,
    }
});

export const dbConnect = (cName) => {
    return client.db(dbName).collection(cName);
}
