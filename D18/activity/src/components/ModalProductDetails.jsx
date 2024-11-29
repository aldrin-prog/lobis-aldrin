import React, { useEffect, useState } from 'react';
import { Badge } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Modal from 'react-bootstrap/Modal';
import Row from 'react-bootstrap/Row';

const ModalProductDetails=(props)=>{
    const {show,product}=props;
   return (
    <Modal {...props} aria-labelledby="contained-modal-title-vcenter">
      <Modal.Header closeButton>
      <h6>{product.title}</h6>
      </Modal.Header>
      <Modal.Body className="grid-example">
        <Container>
            
            <p>Description: {product.description}</p>
            <p>Category: <Badge bg="success">{product.category}</Badge></p>
            <p>Price: {product.price}</p>
            <p>Ratings: {product.rating.rate}</p>
        </Container>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
}
export default ModalProductDetails;