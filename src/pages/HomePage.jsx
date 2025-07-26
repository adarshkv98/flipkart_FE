import React, { useEffect, useState } from 'react'
import NavBar from '../components/NavBar'
import Cards from '../components/Cards'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import axios from 'axios'


function HomePage() {
const [product,setProduct]=useState([])

useEffect(()=>{

axios.get('https://fakestoreapi.com/products')
.then(res => setProduct(res.data))
.catch(error => {console.log(error);}

)

},[])

useEffect(()=>{
console.log(product);

},[product])


  return (
    <div>
        
        <NavBar/>

 <Container>
      <Row>
        
        
        {product.map((item,index)=>{
        return <Col><Cards key={index} prdt={item}/></Col> 
        
 } )}
        
        
      </Row>
    </Container>
      
    </div>
  )







}


export default HomePage