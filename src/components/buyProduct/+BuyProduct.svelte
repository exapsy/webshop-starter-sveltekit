<script lang="ts">
    import type { Product } from "$types/product.ts";
    import type {CartItem} from "$types/cartItem.ts";
    import {cart} from "$stores/cart.js";
    import {tweened} from "svelte/motion";
    import {sineInOut} from "svelte/easing";
    import PlusIcon from "$assets/svg/plus_white.svg"

    const addProductCardOpacity = tweened(10, {
        duration: 3500,
        easing: sineInOut
    })

    export let product: Product;

    const addToCart = () => {
        if (!product) return;
        let imgUrl = ''

        if (product.media) {
            if (product.media?.length > 1) {
                imgUrl = product.media[1].url  // 2K webp image
            } else if (product.media?.length > 0) {
                imgUrl = product.media[0].url // small image
            }
        }
        if (!imgUrl) {
            imgUrl = 'https://via.placeholder.com/300x300.png?text=No+Image'
        }

        const newCartItem: CartItem = {
            currency: "euro",
            currency_symbol: "€",
            quantity: 1,
            imgUrl: imgUrl,
            name: product.name,
            price: product.retail_price_eur,
            sku: product.sku,
            id: product.id,
        }

        cart.addItem(newCartItem);

        const icon = document.getElementById('cart-icon');

        icon?.classList.add('jump');
        setTimeout(() => icon?.classList.remove('jump'), 300);

        const productAddedContainer = document.getElementById('product-added-container')
        if (!productAddedContainer) {
            return
        }
        productAddedContainer.style.display = 'block'
        addProductCardOpacity.set(1)

        setTimeout(() => {
                productAddedContainer.style.display = 'none';
                addProductCardOpacity.set(0)
            },
            3500
        );
    }
</script>
<div
     id="buy-bag-container"
     class="flex flex-row flex-nowrap justify-center items-center max-w-max">
    <div
            id="buy-small"
            class="m-8 flex flex-col justify-center items-center p-6"
    >
        <h2>Small package 150g</h2>
        <p class="text-center text-lg font-bold mb-4">{((product.retail_price_eur / 6)).toPrecision(2)}{'€'}</p>
        <img src="https://strapi.mandorle.gr/uploads/mandorle_sakoulaki_c53d90a758.webp"
             alt="cart icon"
             class="inline-block w-4 mr-2"
        />
        <button
                class="bg-blue-500 m-8 text-white px-4 py-2 rounded hover:bg-blue-400"
                on:click={addToCart}
        >
            <img src={PlusIcon}
                 alt="add to cart icon"
            />
        </button>
    </div>


    <div
            id="buy-large"
            class="flex flex-col justify-center items-center p-6"
    >
        <h2>Large package 600g</h2>
        <p class="text-center text-lg font-bold mb-4">{((product.retail_price_eur / 6) * 3).toPrecision(2)}{'€'}</p>
        <img src="https://strapi.mandorle.gr/uploads/mandorle_sakoulaki_c53d90a758.webp"
             alt="cart icon"
             class="inline-block w-4 mr-2"
        />
        <button
                class="bg-blue-500 m-8 text-white px-4 py-2 rounded hover:bg-blue-400"
                on:click={addToCart}
        >
            <img src={PlusIcon}
                 alt="add to cart icon"
            />
        </button>
    </div>

    <div
            id="buy-medium"
            class="m-8 flex flex-col justify-center items-center p-6"
    >
        <h2 class="text-center">
            <p class="text-green-300 font-bold text-sm">(recommended)</p>
            <p>Medium package 300g</p>
        </h2>
        <p class="text-center text-lg font-bold mb-4">{((product.retail_price_eur / 6) * 2).toPrecision(2)}{'€'}</p>
        <img src="https://strapi.mandorle.gr/uploads/mandorle_sakoulaki_c53d90a758.webp"
             alt="cart icon"
             class="inline-block w-4 mr-2"
        />
        <button
                class="bg-blue-500 m-8 text-white px-4 py-2 rounded hover:bg-blue-400"
                on:click={addToCart}
        >
            <img src={PlusIcon}
                 alt="add to cart icon"
            />
        </button>
    </div>

</div>

<div
        class="card bg-green-50 p-4 m-4"
        id="product-added-container"
        style="opacity: addProductCardOpacity;"
>
    <p>{product.name} added!</p>
    {#if product.media && product.media.length > 0}
        <img src={product.media[0].url} alt="product added to cart"/>
    {/if}
</div>

<style>
    #product-added-container {
        display: none;
        position: fixed;
        max-height: 180px;
        top: 80px;
        right: 10px;
        float: right;
        border-radius: 6px;
    }

    #product-added-container img {
        max-height: 80px;
    }
</style>