<script lang="ts">
  // Props
  export let active = ''
  ///- Props

  // LocalState
  const SIDEBAR_ITEMS = [
    {
      name: 'Dashboard',
      href: '/dashboard',
    },
    {
      name: 'Favorites',
      href: '/dashboard/favorites',
    },
  ]
  ///- LocalState
</script>

<aside>
  <ul>
    {#each SIDEBAR_ITEMS as item}
      <li class:active={active === item.href}>
        <a href={item.href}>{item.name}</a>
      </li>
    {/each}
  </ul>
</aside>

<style>
  aside {
    position: sticky;
    align-self: start;
    top: 55px;
    z-index: 50;
    padding: 1rem;
  }

  li {
    padding: 0.5rem 1rem;
    font-size: 0.9rem;
  }

  li.active {
    border-left: 2px solid var(--primary);
  }

  @media (max-width: 768px) {
    aside {
      position: static;
    }

    ul {
      display: flex;
    }

    li.active {
      border-left: 0;
      border-bottom: 2px solid var(--primary);
    }
  }
</style>
