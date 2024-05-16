import './App.css'
import Contador from './pages/contador/Contador'
import Home from './pages/home/Home'
import Tarefa from './pages/tarefa/Tarefa'

function App() {

  return (
    <>
        <Home 
        titulo="Componente"
        texto='Este é um componente que recebe props'
        />

        <Contador />  

        <Tarefa/ >
        
    </>
  )
}

export default App
