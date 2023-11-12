import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import AdminDashboard from './pages/AdminDashboard'

function App() {


  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<AdminDashboard/>}/>
    </Routes>
    </BrowserRouter>
    
    </>
  )
}

export default App
