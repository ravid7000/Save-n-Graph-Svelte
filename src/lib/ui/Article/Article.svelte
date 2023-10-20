<script lang="ts">
  // Imports
  import { ButtonLike } from '../Button'
  ///- Imports

  // Props
  export let image = ''
  export let name = ''
  export let link = ''
  ///- Props
</script>

<article>
  <div class="heading">
    <a href={link}>
      <h3>{name}</h3>
    </a>
  </div>
  {#if image}
    <a href={link}>
      <div class="image">
        <img class="inline-block" src={image} alt={name} />
      </div>
    </a>
  {/if}

  <div class="control">
    <ButtonLike />
  </div>
</article>

<style>
  article {
    border: 1px solid var(--cod-gray-100);
    margin-bottom: 1rem;
  }

  .heading {
    padding: 1rem;
    border-bottom: 1px solid var(--cod-gray-100);
  }

  .control {
    padding: 0.5rem;
    border-top: 1px solid var(--cod-gray-100);
  }

  .heading h3 {
    text-transform: capitalize;
    font-weight: 600;
  }

  .image {
    padding: 2rem;
    text-align: center;
  }

  .image img {
    height: 200px;
  }
</style>
