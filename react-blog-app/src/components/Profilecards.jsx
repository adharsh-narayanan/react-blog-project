import { faEdit, faTrash } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useEffect, useState} from 'react'
import { Col, Row } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';
import { getBlogApi } from '../services/allAPI';
import { sendtoEdit } from '../redux/slices/editslice';
import { useDispatch } from 'react-redux';



function Profilecards() {
    //usedispatch to call functions 
  const dispatch = useDispatch()


  const [blogs, setBlogs] = useState()


  //to get blogs
  const getallBlogs = async () => {

    const result = await getBlogApi()

    if(result.status===200){
      setBlogs(result.data)
    }else{
      alert('request failed')
    }

   // console.log(result);
  }

//to call getallblogs and to display when screen loads
  useEffect(()=>{
    getallBlogs()
  },[])



  return (
    <>
      <Row className='p-5' style={{ marginTop: '100px' }} >
       {blogs?.length>0? blogs.map((item,index)=>(<Col sm={12} md={4} className='mb-4'>


  <Card className=' p-0 mb-2  rounded shadow' key={index} style={{ border: 'none', width: '100%' }}>
  <Link style={{textDecoration:"none",color:"black"}} >
    <Card.Img variant="top" className='rounded' src={item.blogImage} width={'100%'} height={'250px'} />
    <Card.Body>
      <h6 className='mb-2'>{item.category}</h6>
      <h3>{item.title}</h3>
      <Card.Text>
      {(item?.description).slice(0, 160)}... <span className='text-primary'>read more</span>
      </Card.Text>
    </Card.Body>
    </Link>
  
    <Card.Body className=" d-flex justify-content-end d-flex gap-3">
      <Link to={'/editblog'}>  <button className='btn p-2 '><FontAwesomeIcon icon={faEdit} onClick={()=>dispatch(sendtoEdit(item))} size='md' /></button></Link>
      <button className='btn p-2 '><FontAwesomeIcon icon={faTrash} size='md' /></button>
    </Card.Body>
  </Card>

</Col>)):<p className='text-danger '>No Blogs to show <Link to={'/Add'}>Add New</Link></p> }

        

       





      </Row>
    </>
  )
}

export default Profilecards