import { useContext, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { BiSolidStar } from "react-icons/bi";
import ProductContext from '../store/ProductContext';
const CardProduct = (props) => {
    const {product}=props;
    const {modalShow,setModalShow,itemProduct,dispatch}=useContext(ProductContext);
    const handleShowDetails=async () =>{
        try {
            await dispatch({type:"SET_PRODUCT",payload:product});
            await dispatch({type:"SHOW_PRODUCT"})
            // await setItemProduct(product);
            // await setModalShow(!modalShow);
        } catch (error) {
            console.log(error)
        }
    }
  return (
    <Card style={{ width: '20rem' }}>
      <Card.Img variant="top" height={250} style={{objectFit:'contain'}} src={product.image} />
      <Card.Body>
        <Card.Title>{product.title}</Card.Title>
        <p className='d-flex align-items-center'>
            <BiSolidStar style={{color:"yellow",fontSize:'20px'}}/>
            <span className='ms-2'>{product.rating.rate}</span>
        </p>
        <Button variant="primary" onClick={handleShowDetails}>View Details</Button>
      </Card.Body>
    </Card>
  );
}

export default CardProduct;