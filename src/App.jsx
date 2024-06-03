import './App.css'
import Board from './componets/Board'
import Keyboard from './componets/Keyboard'

function App() {


  return (
    <div className='app'>
      <nav>
        <h1>Wordle</h1>
      </nav>
      <Board />
      <Keyboard />
      
    </div>
  )
}

export default App
