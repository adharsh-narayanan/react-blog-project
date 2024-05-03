
import { Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './pages/Home'
import Dashboard from './pages/Dashboard'
import AllBlogs from './pages/AllBlogs'
import Header from './components/Header'

function App() {


  return (
    <>
     <Header/>
     <Routes>
      <Route path='/' element={<Home/>} />
      <Route path='/dashboard' element={<Dashboard/>} />
      <Route path='/Allblogs' element={<AllBlogs/>} />
     </Routes>


    </>
  )
}

export default App
