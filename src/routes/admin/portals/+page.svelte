<script lang="ts">
  import { fetchGraphQL } from '$lib/graphql';
  import { onMount } from 'svelte';
  import { gql } from "graphql-request";

  const PRODUCTS_QUERY = gql`
    query {
      products {
        data {
          attributes {
            name
            description
          }
        }
      }
    }
  `;

  type product = {
    name: string;
    description: string;
  };
  let products: product[] = [];

  onMount(async () => {
    const query: string = PRODUCTS_QUERY;

    const response = await fetchGraphQL(query, {});

    if (!response) {
      console.log('no response');
      return;
    } else if (response.errors) {
      console.log('errors', response.errors);
      return;
    }

    const newProducts: product[] = [];
    for (const product of response.products.data) {
      newProducts.push({
        name: product.attributes.name,
        description: product.attributes.description,
      });
    }
    console.log('products', products)
    products = newProducts;
    // products = response.data.products;
  });
</script>

<!--{#each products as product}-->
<!--  <div class="product card">-->
<!--    <h2>{product.name}</h2>-->
<!--    <img src={product.media.url} alt={product.name} />-->
<!--    <p>{product.description}</p>-->
<!--  </div>-->
<!--{/each}-->
