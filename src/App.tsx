import Home from './pages/Home.tsx'
import NavBar from './components/NavBar.tsx'
import { Route, Routes } from 'react-router-dom'
import './App.css'

function App() {

  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </>
    
  )
}

export default App
