<script lang="ts">
    import type {Product} from "$types/product";
    import BuyProduct from "$components/buyProduct/+BuyProduct.svelte";
    import { goto } from '$app/navigation';

    export let product: Product;

    const navigateToProduct = () => {
        goto(`/app/product/${product.id}`);
    }

    if (!product.media?.length) {
        product.media = [
            {
                name: "placeholder",
                mime: "image/jpeg",
                url: "https://via.placeholder.com/300x300",
                formats: {
                    thumbnail: {
                        url: "https://via.placeholder.com/150x150"
                    }
                }
            }
        ]
    }
</script>

{#if product !== null}
    <div
            class="p-4 bg-white rounded transition-shadow hover:shadow-lg hover:cursor-pointer"
            on:click={navigateToProduct}
            on:keyup={null}
            on:keydown={null}
            role="button"
            tabindex={product.id}
    >
        {#if product.media && product.media.length > 0}
            <img src={product.media[0].url} alt={product.name} class="w-full h-48 object-cover mb-4 rounded" />
        {/if}
        <h3 class="text-xl font-semibold mb-2">{product.name}</h3>
        <p class="text-gray-700 mb-2">{product.description}</p>
        <p class="text-lg font-bold">{product.retail_price_eur}{'€'}</p>
        <BuyProduct {product} />
    </div>
{/if}
