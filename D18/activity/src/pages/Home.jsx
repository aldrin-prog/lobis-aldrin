import { useEffect, useState } from "react";
import CardProduct from "../components/CardProduct";
import { Row,Col, Container, Form, InputGroup, FormControl, Button } from "react-bootstrap";
import ModalProductDetails from "../components/ModalProductDetails";
import ProductContext from "../store/ProductContext";

const Home=()=>{
    const [modalShow, setModalShow] = useState(false);
    const [itemProduct,setItemProduct]=useState({});
    const [products,setProducts]=useState([]);
    const [query,setQuery]=useState("");
    const [categories,setCategories]=useState([]);
    const handleChageCategory=async (e)=>{
        const value=e.target.value;
        try {
            const api = value ? `https://fakestoreapi.com/products/category/${value}` : "https://fakestoreapi.com/products";
            const response=await fetch(api);
            console.log(response);
            const data=await response.json();
            
            setProducts(data);
        } catch (error) {
            console.log(error);
        }
        
    }
    const handleSearchItem=(e)=>{
        e.preventDefault();
        const data=products.filter((item,index)=>{
            const searchTerm = query; // Case-insensitive search for "Ap"
            const regex = new RegExp(searchTerm, "i");

            const filteredItems = products.filter(item => regex.test(item.title));
            setProducts(filteredItems)
        })
    }
    useEffect(()=>{
        const fetchProducts=async ()=>{
            try {
                const response  = await fetch("https://fakestoreapi.com/products");
                const data      = await response.json();
                setProducts(data);
            } catch (error) {
                console.log(error);
            }
        }
        const fetchCategories=async () =>{
            try {
                const response  = await fetch("https://fakestoreapi.com/products/categories");
                const data      = await response.json();
                setCategories(data);
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
                                categories.map((item,inde)=>(
                                    
                                    <option value={item} key={inde}>{item}</option>
                                ))
                            }
                        </Form.Select>
                    </InputGroup>
                </Col>
                <Col>
                    <Form onSubmit={handleSearchItem}>
                        <InputGroup>
                        <Form.Control onChange={(e)=>setQuery(e.target.value)} />
                        <Button type="submit">Search</Button>
                        </InputGroup>
                    </Form>
                </Col>
            </Row>
            <Row className="gap-4">
                {
                    products.map((item,index)=>(
                        <ProductContext.Provider value={{modalShow,itemProduct,setItemProduct,setModalShow}}>
                            <Col key={item.id}>
                                <CardProduct product={item}/>
                            </Col>
                        </ProductContext.Provider>
                        
                    ))
                }
                
            </Row>
            <ModalProductDetails show={modalShow} product={itemProduct} onHide={()=>{setModalShow(false)}}/>
        </Container>
    )
}
export default Home;