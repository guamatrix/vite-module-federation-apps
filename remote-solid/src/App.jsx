import solidLogo from './assets/logo.svg';
import viteLogo from '/vite.svg'
import styles from './App.module.css';
import { createSignal } from 'solid-js';

function App() {
  const [count, setCount] = createSignal(0)
  return (
    <div class={styles.App}>
      <h1>REMOTE APP</h1>
      <div className={styles.stack}>
        <h2>Stack: </h2>
        <img src={viteLogo} class={styles.logo} alt="vite logo" />
        <img src={solidLogo} class={styles.logo} alt="solid logo" />
      </div>
      <main>
        <button onClick={() => {
          setCount(count() + 1)
        }}>count is {count()}</button>
      </main>
    </div>
  );
}

export default App;
