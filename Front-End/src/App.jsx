import './App.css'
import { Routes, Route } from 'react-router-dom'
import HomePage from './Pages/HomePage'
import DetailPage from './Pages/DetailPage'
import NavBar from './Pages/NavBar'

function App() {


  return (
    <div className="App">
      <NavBar/>
      <Routes>
        <Route path='/' element={<HomePage/>}/>
        <Route path='/:phoneId' element={<DetailPage/>}/>
      </Routes>
      
    </div>
  )
}

export default App
