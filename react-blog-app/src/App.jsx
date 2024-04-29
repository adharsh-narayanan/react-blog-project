
import { Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './pages/Home'
import Dashboard from './pages/Dashboard'
import AllBlogs from './pages/AllBlogs'
import Login from './components/Login'
import Register from './components/Register'


function App() {


  return (
    <>
     <h1>blog</h1>
     <Routes>
      <Route path='/' element={<Home/>} />
      <Route path='/dashboard' element={<Dashboard/>} />
      <Route path='/Allblogs' element={<AllBlogs/>} />
      <Route path="/login" element={<Login/>}/>
      <Route path="/registration" element={<Register/>}/>
     </Routes>


    </>
  )
}

export default App
