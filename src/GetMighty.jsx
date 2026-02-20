import { Col, Container, Row } from "react-bootstrap"
import "./assets/GetMighty.css"
import { Header } from "./header"
import { Hero } from "./Hero"

export function GetMighty() {
    return <>

       <Header/>
       <Hero/>

        {/* hub */}
        <section className="hub">
            <Container>
                <div className="hub-main">
                    <Row>
                        <Col>
                            <h1 className="hub-header">Huh?</h1>
                            <h2 className="hub-subheader">How does it work?</h2>
                            <p className="hub-description">Simple</p>
                            <p className="hub-description"> Mighty brings together sophisticated investment advice, content, career support and
                                community to help you achieve financial freedom faster.</p>
                            <p className="hub-description">So the choices in your life are no longer tied to your paycheque.</p>
                        </Col>
                        <Col>
                            <div className="text-center">
                                <img src="image/hub.png" className="img-fluid" alt="hero"></img>
                            </div>
                        </Col>
                    </Row>
                </div>
            </Container>
        </section>
        {/* hub */}

        {/* invest */}
        <section className="invest">
            <Container>
                <Row>
                    <Col>
                        <div className="invest-text h-100">
                            <h1 className="invest-header">Don’t leave investing to chance</h1>
                            <h2 className="invest-subheader">Leave it to MIGHTY</h2>
                            <p className="invest-description">Meet MAVEN, our proprietary investing algorithm that was built
                                using 30 years of financial data and Nobel prize winning research.

                            </p>
                            <p className="invest-description">Your investments are now that much more smarter.</p>
                        </div>
                    </Col>
                    <Col>
                        <div class="invest-image h-100">
                            <img src="image/invest.png" alt="invest" class="img-fluid"></img>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
        {/* invest */}

        {/* slider */}
        <section className="slider">
            <Container>
                <div className="slider-main">
                    <Row>
                        <Col>
                            <div className="slider-text bg-1">
                                <div className="items">
                                    <h5 className="slider-header">Investing Insights</h5>
                                    <h2 className="slider-subheader">Why do I need a Diversified
                                        Portfolio?</h2>
                                    <p className="slider-description">Market Structure, Market Timing,
                                        Mindset</p>
                                    <p className="slider-date">March 9, 2022</p>
                                    <div>
                                        <img src="image/slider1.png" alt="slider1" className="img-fluid"></img>
                                    </div>
                                </div>
                            </div>
                        </Col>
                        <Col>
                            <div className="slider-text bg-2">
                                <div className="items">
                                    <h5 className="slider-header">Investing Insights</h5>
                                    <h2 className="slider-subheader">Insights Is Zero brokerage stock trading good for you?</h2>
                                    <p className="slider-description">Market Structure, Market Timing,
                                        Mindset</p>
                                    <p className="slider-date">March 9, 2022</p>
                                    <div className="text-center">
                                        <img src="image/slider1.1.png" alt="slider1.1" className="img-fluid"></img>
                                    </div>
                                </div>
                            </div>
                        </Col>
                        <Col>
                            <div className="slider-text bg-3">
                                <div className="items">
                                    <h5 className="slider-header">Investing Insights</h5>
                                    <h2 className="slider-subheader">Rising Volatility in Market</h2>
                                    <p className="slider-description">Human Biases, Mindset, Passive Investing</p>
                                    <p className="slider-date">March 9, 2022</p>
                                    <div>
                                        <img src="image/slider1.3.png" alt="slider1" className="img-fluid"></img>
                                    </div>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </div>
            </Container>
        </section>
        {/* slider */}

        {/* Affiliations */}
        <section className="Affiliations">
            <Container>
                <div className="Affiliations-main">
                    <Row>
                        <Col>
                            <h2 className="Affiliations-header">Our Partners and Affiliations</h2>
                        </Col>
                    </Row>
                    <Row>
                        <Col><div className="arn d-flex justify-content-center align-items center">

                            <img src="image/amfl.png" alt="amfl" className="img-fluid"></img>
                            <span className="arn-header">ARN 196781</span>

                        </div></Col>
                        <Col>  <div className="arn1">
                            <Row>
                                <Col>
                                    <img src="image/member.png" alt="member"
                                        className="img-fluid member-img text-center"></img>
                                </Col>
                                <Col>
                                    <p className="member-header">Member ID
                                        55345</p>
                                </Col>
                            </Row>
                        </div></Col>
                    </Row>
                </div>
            </Container>
        </section >
        {/* Affiliations */}

        {/* footer */}
        <footer>
            <div className="footer-main">
                <Container>
                    <div className="footer-text">
                        <Row>
                            <Col>
                                <h2 className="footer-header">Articles</h2>
                            </Col>
                            <Col>
                                <div className="text-center mo-footer">
                                    <h2 className="footer-subheader">Legal</h2>
                                    <p className="footer-description">Privacy Policy</p>
                                    <p className="footer-desc">Privacy Policy</p>
                                    <p className="footer-subdesc">Privacy Policy</p>
                                </div>
                            </Col>
                            <Col>
                                <Row>
                                    <div className="foot-img text-center">
                                        <Col>
                                            <div className="footer-img text-center">
                                                <img src="image/facebook.png" alt="facebook" className="img-fluid"></img>
                                            </div>
                                        </Col>
                                        <Col>
                                            <div className="footer-img text-center">
                                                <img src="image/twitter.png" alt="twitter" className="img-fluid"></img>
                                            </div>
                                        </Col>
                                        <Col>
                                            <div className="footer-img text-center">
                                                <img src="image/linkin.png" alt="linkin" className="img-fluid"></img>
                                            </div>
                                        </Col>
                                        <Col>
                                            <div className="footer-img text-center">
                                                <img src="image/whatsup.png" alt="whatsup" className="img-fluid"></img>
                                            </div>
                                        </Col>
                                    </div>
                                </Row>
                            </Col>
                        </Row>
                    </div>
                </Container>
            </div>
            <Row>
                <Col>
                    <p className="footer-copyright text-center">copyright 2022-23 Mighty Pvt Ltd.</p>
                </Col>
            </Row>
        </footer>
        {/* footer */}


    </>
}