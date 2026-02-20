import { Col, Container, Row } from "react-bootstrap"
export function Hero(){
    return (<>
     {/* hero */}
        <section className="hero">
            <Container>
                <div className="hero-main">
                    <Row>
                        <Col>
                            <h1 className="hero-header">Get Mighty, the time back app.</h1>
                            <h2 className="hero-subheader">Or you could wait till someone invents the time machine.</h2>

                            <p className="hero-description">Introducing Mighty, an app that helps you reclaim up to 3000 days of
                                your life.</p>
                        </Col>
                        <Col>
                            <div className="text-center">
                                <img src="image/hero.png" className="img-fluid" alt="hero"></img>
                            </div>
                        </Col>
                    </Row>
                </div>
            </Container>
        </section>
        {/* hero */}

    </>)
}