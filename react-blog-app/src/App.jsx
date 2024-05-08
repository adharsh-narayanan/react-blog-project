
import { Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './pages/Home'
import Dashboard from './pages/Dashboard'
import AllBlogs from './pages/AllBlogs'
import AddBlog from './components/AddBlog'
import EditBlog from './components/EditBlog'
import Login from './components/Login'
import Register from './components/Register'
import Footer from './components/Footer'


function App() {


  return (
    <>     
     <Routes>
      <Route path='/' element={<Home/>} />
      <Route path='/dashboard' element={<Dashboard/>} />
      <Route path='/Add' element={<AddBlog/>} />    
      <Route path='/editblog' element={<EditBlog/>}></Route>  
      <Route path='/Allblogs' element={<AllBlogs/>} />
      <Route path="/login" element={<Login/>}/>
      <Route path="/registration" element={<Register/>}/>
     </Routes>
        <Footer/>

    </>
  )
}

export default App
