import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row'

export default function About() {
    return(
        <Container className='bg-dark text-light'>
            <h1 className='fs-1'>About Me</h1>
            <p>Hello, and welcome to my portfolio.</p>
            <Row>
            <img src='./assets/Headshot.jpg' className='bioPic'alt='A very realistic picture of the developer'/>
            <ul>
                <li>Full stack web developer with experience working for an established tech company in a development-adjacent role.</li>
                <li>Earned a certificate in Full Stack Web Development from UC Berkeley Extension. </li>
                <li>Self-sufficient problem solver with a passion for finding clean and elegant solutions. </li>
                <li>Excels at oral/written communication, especially acting as a bridge between technical and non-technical parties.</li>
            </ul> 

            </Row>

            <img src='./assets/Pizza.jpg' className='foodPic' alt='A picture of a very delicious pizza'/>
        </Container>
    )
}