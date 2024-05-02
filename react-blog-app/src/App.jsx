import { Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './pages/Home'
import Dashboard from './pages/Dashboard'
import AllBlogs from './pages/AllBlogs'
import AddBlog from './components/AddBlog'
import EditBlog from './components/EditBlog'
import Login from './components/Login'
import Register from './components/Register'


function App() {


  return (
    <>     
     <Routes>
      <Route path='/' element={<Home/>} />
      <Route path='/dashboard' element={<Dashboard/>} />
      <Route path='/Add' element={<AddBlog/>} />    
      <Route path='/editblog/:id' element={<EditBlog/>}></Route>   {/* The :id in the path indicates a dynamic parameter that can be accessed in the component rendered by this route. In this example, the Route component is using the path prop to match the URL path pattern '/edit/:id'. The :id in the path indicates a dynamic parameter that can be accessed in the component rendered by this route. When the URL matches this pattern, the element prop is used to render the EditBlog component.

To access the id parameter inside the EditBlog component, you can use the useParams hook from react-router-dom.  */}
      <Route path='/Allblogs' element={<AllBlogs/>} />
      <Route path="/login" element={<Login/>}/>
      <Route path="/registration" element={<Register/>}/>
     </Routes>


    </>
  )
}

export default App
