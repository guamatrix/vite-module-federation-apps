<script>
  import svelteLogo from './assets/svelte.svg'
  import Counter from './lib/Counter.svelte'
  import viteLogo from '/vite.svg'
  
</script>

<main>
  <h1>REMOTE APP</h1>
  <div class="stack">
    <h2>Stack: </h2>
    <img src={viteLogo} class="logo" alt="Vite Logo" />
    <img src={svelteLogo} class="logo svelte" alt="Svelte Logo" />
  </div>
  <div class="card">
    <Counter />
  </div>

</main>

<style>
  .logo {
    height: 1.5rem;
    padding: 0;
    will-change: filter;
  }
  .logo:hover {
    filter: drop-shadow(0 0 2em #646cffaa);
  }
  .logo.svelte:hover {
    filter: drop-shadow(0 0 2em #ff3e00aa);
  }
  main {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    height: 100%;
    justify-content: center;
  }
  .stack {
    display: flex;
    align-items: center;
  }
</style>
