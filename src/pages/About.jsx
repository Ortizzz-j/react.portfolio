import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import './about.scss'
import Mau from '../components/assets/Mau.png'

const About = () => {
    return (
        <div>
            <Container fluid>
                <Row>
                    <Col>
                        <h1 className="d-flex justify-content-center">About <img src={Mau} className='mau' height="76px" width="65px" /></h1>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <p className='d-flex justify-content-center'>Currently working in transportation & logistics, I took on this journey into tech towards the end of 2022. I have since learned how to center a div, MERN stack (Mongodb, Express, React, Node), Restful Api's, Bootstrap, MySQL along with other technologies. I still have much more to learn and explore as i hope to take on some more Vite + React projects to better my understanding of state and how to manage it, and how to use other react components. Post bootcamp I am also dedicating time to learn AWS, Java, C#, and Python. My goal is by the end of this year, 2023, or sometime next year I can be a developer at a company that share the same values as I do.</p>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default About