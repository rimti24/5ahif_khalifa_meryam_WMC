import fs from "fs";

const filePath = "./data/carts.json";

export function clearCarts(req, res) {
    fs.writeFileSync(filePath, JSON.stringify([], null, 2));
    res.status(200).json({ message: "Carts cleared" });
}

export function getCart(req, res) {
    const cart = JSON.parse(fs.readFileSync(filePath));
    res.json(cart);
}

export function addToCart(req, res) {
    const cart = JSON.parse(fs.readFileSync(filePath));
    const item = req.body;

    const existing = cart.find(p => p.id === item.id);

    if (existing) {
        existing.quantity += 1;
    } else {
        cart.push({ ...item, quantity: 1 });
    }

    fs.writeFileSync(filePath, JSON.stringify(cart, null, 2));
    res.status(201).json(cart);
}

export function removeFromCart(req, res) {
    let cart = JSON.parse(fs.readFileSync(filePath));
    cart = cart.filter(p => p.id !== Number(req.params.id));

    fs.writeFileSync(filePath, JSON.stringify(cart, null, 2));
    res.json(cart);
}
