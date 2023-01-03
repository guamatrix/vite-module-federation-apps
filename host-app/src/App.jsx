import React from 'react'
import reactLogo from './assets/react-host.svg'
import viteLogo from '/vite-host.svg'
import styles from  './App.module.css'
import { RemoteWrapperSvelte, RemoteWrapperVue, RemoteWrapperSolid }  from './components/Remotes'
import { EventManager } from 'remote_library/utils' 

const RemoteApp = React.lazy(() => import('remote_app/RemoteApp'))

function App() {
  const [count, setCount] = React.useState(0)
  return (
    <div className={styles.app}>
      <h1>HOST APP</h1>
      <div className={styles.stack}>
        <h2>Stack: </h2>
        <img src={viteLogo} className={styles.logo} alt="Vite logo" />
        <img src={reactLogo} className={`${styles.logo} ${styles.react}`} alt="React logo" />
      </div>
      <div className={styles.card}>
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <button onClick={() => EventManager.emit('state', 999)}>
          Update Remote Apps
        </button>
      </div>
    <div className={styles['remote-apps']}>
      <React.Suspense fallback={<h1>Loading Remote React ...</h1>}>
        <div className={styles.app}>
          <RemoteApp />
        </div>
      </React.Suspense>
      <RemoteWrapperSvelte name='Remote Svelte' path='remote_svelte/RemoteWrapper' />
      <RemoteWrapperVue name='Remote Vue' path='remote_vue/RemoteWrapper' />
      <RemoteWrapperSolid name='Remote Solid' path='remote_solid/RemoteWrapper' />
    </div>
  </div>)
}

export default App
