import fs from "fs";

const filePath = "./data/products.json";

export function getProducts(req, res) {

    const data = JSON.parse(fs.readFileSync(filePath));
    res.json(data);
}

export function getProductById(req, res) {
    const data = JSON.parse(fs.readFileSync(filePath));
    const product = data.find(p => p.id === Number(req.params.id));

    if (!product) {
        return res.status(404).json({ message: "Product not found" });
    }

    res.json(product);
}

export function createProduct(req, res) {
    const data = JSON.parse(fs.readFileSync(filePath));
    const newProduct = {
        id: Date.now(),
        ...req.body
    };

    data.push(newProduct);
    fs.writeFileSync(filePath, JSON.stringify(data, null, 2));

    res.status(201).json(newProduct);
}
