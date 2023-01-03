import solidLogo from './assets/logo.svg';
import viteLogo from '/vite.svg'
import styles from './App.module.css';
import { createSignal, createEffect, onCleanup } from 'solid-js';
import { EventManager  } from 'remote_library/utils';

let sub
function App() {
  const [count, setCount] = createSignal(0)
  createEffect(() => {
    const eventUpdater = (value) => {
      setCount(value)
    }
    sub = EventManager.subscribe('state', eventUpdater)
    onCleanup(() => {
      sub()
    })
  })
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
        <button onClick={() => {
          EventManager.emit('state', 567)
        }}>Send Event</button>
        <button onClick={() => {
          sub()
        }}>Remove sub event</button>
      </main>
    </div>
  );
}

export default App;
