import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Alert from 'react-bootstrap/Alert';
function Services() {

    // var array = [10,20,30];
    var a = {
        "rollno": 1,
        "name": "test",
        "total": 50,
        "subjects": [85, 98, 48],
        "address": [
            {
                "city": "surat",
                "state": "gujrat"
            },
            {
                "city": "mumbai",
                "state": "maharastra"
            },
        ]
    };
    function demo(a, b) {
        let total = a + b;
        alert(total);
    }
    return (<>
        <button onClick={(e)=>demo(10, 20)}>click</button>
        <button onClick={(e)=>demo(100, 200)}>click</button>
        {/* <h1>{a.address[1].state}</h1> */}
        {/* <h1>{a.subjects[1]}</h1> */}
        {/* <h1>{a.name}</h1> */}
        {/* <h1>{a["name"]}</h1> */}
        {/* <h1>{array[1]}</h1> */}
        {/* <Container>
             <h1>Services</h1>
       </Container> */}
        <Container fluid>
            <h1>Services</h1>
            {/* <Row>
                <Col>6</Col>
                <Col>6</Col>
            </Row> */}
            <Row>
                <Col lg="2">2</Col>
                {/* <Col>10</Col> */}
                <Col><Alert key="danger" variant="danger">
                    This is a danger alert—check it out!
                </Alert></Col>
                {/* <Col><Alert key={variant} variant={variant}>
                    This is a {variant} alert—check it out!
                </Alert></Col> */}
            </Row>
            <div className="row">
                <div className="col-2">2</div>
                <div className="col-10">10</div>
            </div>
        </Container>
    </>)
};

export default Services;