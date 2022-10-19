import reactLogo from './assets/react.svg'
import './App.css'
import Button from './components/Button'
import viteLogo from '../public/vite.svg'

function App() {

  return (
    <div className="App">
      <h1>REMOTE APP</h1>
      <div className='stack'>
        <h2>Stack: </h2>
        <img src={viteLogo} className="logo" alt="Vite logo" />
        <img src={reactLogo} className="logo react" alt="React logo" />
      </div>
      <div className="card">
        <Button />
      </div>
    </div>
  )
}

export default App
