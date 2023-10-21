<script lang="ts">
    // import products from "$fake_data/products"
    import UnderConstruction from "$components/underConstruction/UnderConstruction.svelte";
    import type { Product as ProductType } from "$types/product";
    import Product from "$components/gridProduct/Product.svelte";
    export let products: ProductType[] = [];
    export let underConstruction: boolean = false;
</script>

{#if underConstruction}
    <UnderConstruction />
{/if}

{#if !underConstruction}
    <div class="product-grid grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-6 2xl:grid-cols-8 3xl:grid-cols-10 gap-6">
        {#each products as product (product.sku)}
            <Product {product} />
        {/each}
    </div>
{/if}
