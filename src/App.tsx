import Home from './pages/Home.tsx'
import Activities from './pages/Activities.tsx'
import Statistics from './pages/Statistics.tsx'
import About from "./pages/About.tsx"
import NavBar from './components/NavBar.tsx'
import { Route, Routes } from 'react-router-dom'
import './App.css'

function App() {

  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/activities" element={<Activities />} />
        <Route path="/stats" element={<Statistics />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </>
    
  )
}

export default App
