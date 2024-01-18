
import { Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './pages/Home'
import EditTask from './components/EditTask'






function App() {
  

  return (
    <Routes>
      <Route path='/' element={<Home/>}></Route>
      <Route path='/task/:id' element={<EditTask/>}></Route>
    </Routes >
  )
}

export default App
