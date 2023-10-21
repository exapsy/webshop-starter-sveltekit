import { writable } from 'svelte/store';
import type {CartItem} from "$types/cartItem";

function createCart() {
    const { subscribe, set, update } = writable(loadCart());

    return {
        subscribe,
        addItem: (item: CartItem) => update(cart => {
            for (let i = 0; i < cart.length; i++) {
                if (cart[i].sku === item.sku) {
                    cart[i].quantity++;
                    saveCart(cart);
                    return cart;
                }
            }
            cart.push(item);
            saveCart(cart);
            return cart;
        }),
        removeItem: (index: number) => update(cart => {
            for (let i = 0; i < cart.length; i++) {
                if (i !== index) {
                    continue
                }

                cart[i].quantity--;
                if (cart[i].quantity === 0) {
                    cart.splice(i, 1);
                }

                saveCart(cart);
                return cart;
            }
            return cart
        }),
        loadCart: () => set(loadCart()),
    }

    function saveCart(cart: CartItem[]) {
        if (typeof window !== 'undefined') {
            localStorage.setItem('cart', JSON.stringify(cart));
        }
    }

    function loadCart() {
        if (typeof window !== 'undefined') {
            const storageCart = localStorage.getItem('cart')
            if (storageCart === null) {
                return [];
            }

            return JSON.parse(storageCart) || [];
        }
    }
}

export const cart = createCart();
