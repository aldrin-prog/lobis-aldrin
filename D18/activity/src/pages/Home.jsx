import { useEffect, useReducer, useState } from "react";
import CardProduct from "../components/CardProduct";
import { Row,Col, Container, Form, InputGroup, FormControl, Button } from "react-bootstrap";
import ModalProductDetails from "../components/ModalProductDetails";
import ProductContext from "../store/ProductContext";

const Home=()=>{
    const initialState={
        itemProduct:null,
        modalShow:false,
        products:[],
        query:"",
        categories:[]
    }
    const reducer=(state,action)=>{
        switch(action.type){
            case "SET_CATEGORIES":
                return {...state,categories:action.payload};
            case "SET_PRODUCTS":
                return {...state,products:action.payload}; 
            case "SET_PRODUCT":
                return{...state,itemProduct:action.payload};
            case "SHOW_PRODUCT":
                const isShow=state.modalShow;
                return {...state,modalShow:!isShow};
            case "SET_QUERY":
                return {...state,query:action.payload}
        }
    }
    const [states,dispatch]=useReducer(reducer,initialState);;
    const handleChageCategory=async (e)=>{
        const value=e.target.value;
        try {
            const api = value ? `https://fakestoreapi.com/products/category/${value}` : "https://fakestoreapi.com/products";
            const response=await fetch(api);
            const data=await response.json();
            dispatch({type:"SET_PRODUCTS",payload:data});
        } catch (error) {
            console.log(error);
        }
        
    }
    const handleSearchItem=(e)=>{
        e.preventDefault();
        const searchTerm = states.query; // Case-insensitive search for "Ap"
        const regex = new RegExp(searchTerm, "i");
        const filteredItems = states.products.filter(item => regex.test(item.title));
        dispatch({type:"SET_PRODUCTS",payload:filteredItems});
    }
    useEffect(()=>{
        const fetchProducts=async ()=>{
            try {
                const response  = await fetch("https://fakestoreapi.com/products");
                const data      = await response.json();
                dispatch({type:"SET_PRODUCTS",payload:data});
            } catch (error) {
                console.log(error);
            }
        }
        const fetchCategories=async () =>{
            try {
                const response  = await fetch("https://fakestoreapi.com/products/categories");
                const data      = await response.json();
                dispatch({type:"SET_CATEGORIES",payload:data});
            } catch (error) {
                console.log(error);
            }
        }
        fetchCategories();
        fetchProducts();
    },[])
    return (
        <Container className="mt-3">
            <Row>
                <Col>
                    <InputGroup className="mb-3">
                        <InputGroup.Text>categories</InputGroup.Text>
                        <Form.Select onChange={handleChageCategory}>
                            <option value="">Select Category</option>
                            {
                                states.categories.map((item,inde)=>(
                                    
                                    <option value={item} key={inde}>{item}</option>
                                ))
                            }
                        </Form.Select>
                    </InputGroup>
                </Col>
                <Col>
                    <Form onSubmit={handleSearchItem}>
                        <InputGroup>
                        <Form.Control onChange={(e)=>dispatch({type:"SET_QUERY",payload:e.target.value})} />
                        <Button type="submit">Search</Button>
                        </InputGroup>
                    </Form>
                </Col>
            </Row>
            <Row className="gap-4">
            <ProductContext.Provider value={{modalShow:states.modalShow,itemProduct:states.itemProduct,dispatch}}>
                        
                {
                    states.products.map((item,index)=>(
                            <Col key={item.id}>
                                <CardProduct product={item}/>
                            </Col>
                        
                    ))
                }
                </ProductContext.Provider>
            </Row>
            <ModalProductDetails show={states.modalShow} product={states.itemProduct} onHide={()=>{dispatch({type:"SHOW_PRODUCT"})}}/>
        </Container>
    )
}
export default Home;