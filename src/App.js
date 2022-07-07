import './App.css'
import NavBar from './components/NavBar/NavBar';
import { Routes, Route } from "react-router-dom"
import StarshipList from './pages/StarshipList/StarshipList';
import StarshipDetails from "./pages/StarshipDetails/StarshipDetail"


function App() {
  return (
    <>
    <NavBar />
    <Routes>
      <Route path="/" element={<StarshipList />}/>
    
    </Routes>
    <Routes>
      <Route path="/starships" element={<StarshipDetails />}/>
    
    </Routes>
    </>
  )
  }

export default App;
