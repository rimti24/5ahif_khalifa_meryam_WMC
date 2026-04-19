import { useEffect, useState } from "react";
import { View, Text, ScrollView, TouchableOpacity } from "react-native";

import { getProducts, getCart, addToCart, removeFromCart } from "@/src/api";
import { StyleSheet } from "react-native";

export default function Index() {
    type Product = {
        id: string;
        name: string;
        price: number;
    };

    type CartItem = {
        id: string;
        name: string;
        quantity: number;
    };

    const [products, setProducts] = useState<Product[]>([]);
    const [cart, setCart] = useState<CartItem[]>([]);

    useEffect(() => {
        loadProducts();
        loadCart();
    }, []);

    const loadProducts = async () => {
        try {
            const data = await getProducts();
            console.log("PRODUCTS:", data);
            setProducts(data);
        } catch (err) {
            console.error("ERROR PRODUCTS:", err);
        }
    };

    const loadCart = async () => {
        const data = await getCart();
        setCart(data);
    };

    const handleAdd = async (product: Product) => {
        const updatedCart = await addToCart(product);
        setCart(updatedCart);
    };

    const handleRemove = async (id: string) => {
        const updatedCart = await removeFromCart(id);
        setCart(updatedCart);
    };

    return (
        <ScrollView contentContainerStyle={styles.container}>
            <Text style={styles.title}>Lego Shop Mobile</Text>

            <Text style={styles.sectionTitle}>Products:</Text>

            {products.map((p) => (
                <View key={p.id} style={styles.card}>
                    <Text style={styles.text}>{p.name}</Text>
                    <Text style={styles.price}>{p.price} €</Text>

                    <TouchableOpacity
                        onPress={() => handleAdd(p)}
                        style={styles.buttonAdd}
                    >
                        <Text style={styles.buttonTextAdd}>Add to cart</Text>
                    </TouchableOpacity>
                </View>
            ))}

            <Text style={styles.sectionTitle}>Cart:</Text>

            {cart.map((item) => (
                <View key={item.id} style={styles.card}>
                    <Text style={styles.text}>
                        {item.name} x {item.quantity}
                    </Text>

                    <TouchableOpacity onPress={() => handleRemove(item.id)}>
                        <Text style={styles.buttonRemoveText}>Remove</Text>
                    </TouchableOpacity>
                </View>
            ))}
        </ScrollView>

    );
}

const styles = StyleSheet.create({
    container: {
        padding: 20,
        backgroundColor: "#f5f6fa",
        flexGrow: 1,
    },

    title: {
        fontSize: 28,
        fontWeight: "bold",
        marginBottom: 20,
        color: "#2c3e50",
    },

    sectionTitle: {
        fontSize: 18,
        fontWeight: "600",
        marginTop: 20,
        marginBottom: 10,
        color: "#34495e",
    },

    card: {
        backgroundColor: "#ffffff",
        padding: 15,
        borderRadius: 12,
        marginBottom: 12,

        // shadow (iOS)
        shadowColor: "#000",
        shadowOpacity: 0.1,
        shadowRadius: 6,
        shadowOffset: { width: 0, height: 3 },

        // shadow (Android)
        elevation: 3,
    },

    text: {
        fontSize: 16,
        color: "#2c3e50",
    },

    price: {
        fontSize: 14,
        color: "#27ae60",
        marginTop: 4,
    },

    buttonAdd: {
        marginTop: 10,
    },

    buttonTextAdd: {
        color: "#3498db",
        fontWeight: "600",
    },

    buttonRemoveText: {
        color: "#e74c3c",
        fontWeight: "600",
        marginTop: 5,
    },
});