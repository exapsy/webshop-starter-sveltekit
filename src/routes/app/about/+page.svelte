<script lang="ts">
import UnderConstruction from "$components/underConstruction/UnderConstruction.svelte";
import {gql} from "graphql-request";
import {fetchGraphQL} from "$lib/graphql/index.js";
import {onMount} from "svelte";
import type { Story } from "$types/story";
import {marked} from "marked";

const STORY_QUERY = gql`
query {
  story {
    data {
      attributes {
        title
        content
      }
    }
  }
}
`;

let title = "";
let content = ""

onMount(async () => {
    let storyRes = await fetchGraphQL(STORY_QUERY);
    const { attributes } = storyRes.story.data;
    title = attributes.title
    content = attributes.content
    if (content) {
        content = marked(content);
    }
});

const under_construction = false;
</script>

<head>
    <title>Example - About</title>
</head>

{#if under_construction}
<div class="m-8">
    <UnderConstruction />
</div>
{:else}
    <div>
        <header class="text-center">
            <h1 class="text-4xl font-bold">About</h1>
        </header>

        <div class="m-8">
            <div class="text-justify">
                <h2 class="mb-4">
                    {title}
                </h2>
                <p>
                    {@html content}
                </p>
            </div>
    </div>
</div>
{/if}

<style>
    .text-justify {
        text-align: justify;
    }

    h1 {
        font-size: 2.5rem;
    }

    h2 {
        font-size: 2rem;
    }

    h1, h2 {
        color: #444;
    }

    p {
        font-size: 0.9rem;
        padding: 0 20px;
        line-height: 32px;
    }

    h1 {
        border-bottom: 2px solid #e5e7eb;
        padding-bottom: 10px;
        margin-bottom: 20px;
    }

    h2 {
        border-bottom: 1px solid #e5e7eb;
        padding-bottom: 10px;
        margin-bottom: 20px;
    }

    p {
        text-align: justify;
        margin-bottom: 20px;
    }
</style>
