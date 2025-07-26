import React, { useState } from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Modal from 'react-bootstrap/Modal';

function Cards(props) {
  const [show,setShow]=useState(false)
  const productShow=()=> setShow(true)
  const productClose=()=>setShow(false)
  
 

  return (
    <div>
      
           <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={props.prdt.image} />
      <Card.Body>
        <Card.Title>{props.prdt.title}</Card.Title>
        <Card.Text>
        {props.prdt.description}
        </Card.Text>
        <Button onClick={productShow} variant="primary">add to cart</Button>
      </Card.Body>
    </Card>

          <Modal show={show} onHide={(productClose)}>
        <Modal.Header closeButton>

         <img style={{height:"100px" , width:"100px"}} src={props.prdt.image} alt="" />

          <Modal.Title>{props.prdt.title}</Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <p>{props.prdt.description}</p>
        </Modal.Body>

        <Modal.Footer>
          <Button onClick={productClose} variant="secondary">Close</Button>
          <Button onClick={productClose}  variant="primary">Save changes</Button>
        </Modal.Footer>
      </Modal>
    </div>
  )
}

export default Cards