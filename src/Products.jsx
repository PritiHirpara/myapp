import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import About from './About';
import Home from './Home';
import { ProductItem } from './ProductItem';
function Products(){

function addtocart(){
    alert("Add To Cart");
}

 return (<>
    <Container>
        {/* <Home/> */}
        <h1 className="text-center">Watches</h1>
        <Row className="row">
            <ProductItem name="Hublot1" price="500" onclick={addtocart}/>
            <ProductItem name="Hublot2" price="600" onclick={addtocart}/>
            <ProductItem name="Hublot3" price="700" onclick={addtocart}/>
            <ProductItem name="Hublot4" price="800" onclick={addtocart}/>
            <ProductItem name="Hublot5" price="400" onclick={addtocart}/>
            <ProductItem name="Hublot6" price="300" onclick={addtocart}/>
           
            {/* <Col>
                <div className="card">
                     <img src="image/Watch-1.jpg" height={200}  alt="logo"></img>
                     <div className="card-body">
                        <h5 className="card-title">Hublot</h5>
                        <p className='card-text text-muted'>Category : Electronice</p>
                        <p className='card-text fw-bold'>Price : $99.99</p>
                        <Button variant='secondary'>Add to card</Button>
                     </div>
                </div>
            </Col>
            <Col>
                <div className="card">
                     <img src="image/Watch-2.jpg" height={200}  alt="logo"></img>
                      <div className="card-body">
                        <h5 className="card-title">Hublot</h5>
                        <p className='card-text text-muted'>Category : Electronice</p>
                        <p className='card-text fw-bold'>Price : $99.99</p>
                        <Button variant='secondary'>Add to card</Button>
                     </div>
                </div>
            </Col>
            <Col>
                <div className="card">
                     <img src="image/Watch-3.jpg" height={200}  alt="logo"></img>
                      <div className="card-body">
                        <h5 className="card-title">Hublot</h5>
                        <p className='card-text text-muted'>Category : Electronice</p>
                        <p className='card-text fw-bold'>Price : $99.99</p>
                        <Button variant='secondary'>Add to card</Button>
                     </div>
                </div>
            </Col>
            
        </Row>
        <Row className="row">
            <Col>
                <div className="card">
                     <img src="image/Watch-4.jpg" height={200}  alt="logo"></img>
                     <div className="card-body">
                        <h5 className="card-title">Hublot</h5>
                        <p className='card-text text-muted'>Category : Electronice</p>
                        <p className='card-text fw-bold'>Price : $99.99</p>
                        <Button variant='secondary'>Add to card</Button>
                     </div>
                </div>
            </Col>
            <Col>
                <div className="card">
                     <img src="image/Watch-5.jpg" height={200}  alt="logo"></img>
                      <div className="card-body">
                        <h5 className="card-title">Hublot</h5>
                        <p className='card-text text-muted'>Category : Electronice</p>
                        <p className='card-text fw-bold'>Price : $99.99</p>
                        <Button variant='secondary'>Add to card</Button>
                     </div>
                </div>
            </Col>
            <Col>
                <div className="card">
                     <img src="image/Watch-6.jpg" height={200}  alt="logo"></img>
                      <div className="card-body">
                        <h5 className="card-title">Hublot</h5>
                        <p className='card-text text-muted'>Category : Electronice</p>
                        <p className='card-text fw-bold'>Price : $99.99</p>
                        <Button variant='secondary'>Add to card</Button>
                     </div>
                </div>
            </Col> */}
            
        </Row>
    </Container>
 </>)
}

export default Products;