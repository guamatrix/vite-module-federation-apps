import React from 'react'
import reactLogo from './assets/react-host.svg'
import viteLogo from '/vite-host.svg'
import styles from  './App.module.css'
import RemoteWrapper from './components/RemoteWrapper'
import RemoteWrapperVue from './components/RemoteWrapperVue'

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
      </div>
    <div className={styles['remote-apps']}>
      <React.Suspense fallback={<h1>Loading Remote React ...</h1>}>
        <div className={styles.app}>
          <RemoteApp />
        </div>
      </React.Suspense>
      <RemoteWrapper name='Remote Svelte' path='remote_svelte/RemoteWrapper' />
      <RemoteWrapperVue name='Remote Vue' path='remote_vue/RemoteWrapper' />
    </div>
  </div>)
}

export default App
