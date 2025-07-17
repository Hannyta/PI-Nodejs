import fs from 'fs';
import path from 'path';

const __dirname = import.meta.dirname;

const jsonPath =  path.join(__dirname, './products.json');
const json = fs.readFileSync(jsonPath, 'utf-8');
const products = JSON.parse(json);

import {db} from './data.js';
import { collection, getDocs, doc, getDoc, addDoc, setDoc, deleteDoc} from 'firebase/firestore';

const productsCollection = collection(db, 'products');

export const getAllProducts = async() => {
    try {
        const snapshot = await getDocs(productsCollection);
        return snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
    } catch (error) {
        console.error(error)
    }
};

export const getProductById = (id) => {
    return products.find((item) => item.id == id);
};

export const createProduct = async (data) => {
    try {
        const docRef = await addDoc(productsCollection, data);
        return { id: docRef.id, ...data };
    } catch (error) {
        console.error(error);
    }
};

export async function updateProduct(id, productData) {
    try {
        const productRef = doc(productsCollection, id);
        const snapshot = await getDoc(productRef);

        if (!snapshot.exists()) {
            return false;
        }

        await setDoc(productRef, productData); //remplazo completo
        return { id, ...productData};
    } catch (error) {
        console.error(error);
    }
};

export const deleteProduct = async (id) => {
    try {
        const productRef = doc(productsCollection, id);
        const snapshot = await getDoc(productRef);

        if (!snapshot.exists()) {
            return false;
        }

        await deleteDoc(productRef);
        return true;
    } catch (error) {
        console.error(error);
    }
};
