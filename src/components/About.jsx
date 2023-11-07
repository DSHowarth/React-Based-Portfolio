import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row'

export default function About() {
    return(
        <Container className='aboutContainer'>
            <h1 className='fs-1'>About Me</h1>
            <h3>Hello, and welcome to my portfolio.</h3>
            <Row>
            <img src='./assets/Headshot.jpg' className='bioPic'alt='A very realistic picture of the developer'/>
            <ul>
                <li>Full stack web developer with experience working for an established tech company in a development-adjacent role.</li>
                <li>Earned a certificate in Full Stack Web Development from UC Berkeley Extension. </li>
                <li>Self-sufficient problem solver with a passion for finding clean and elegant solutions. </li>
                <li>Excels at oral/written communication, especially acting as a bridge between technical and non-technical parties.</li>
            </ul>
            </Row>
            <Row>
            <h3>When I'm not coding, I'm</h3>
            <ul>
            <li>Playing PC games like World of Warcraft.</li>
            <ul><li>I'd link my character, but I don't want to dox myself.</li></ul>
            <li>Trying to get outdoors</li>
            <li>Battling bad posture from a life at a computer</li>
            <li>Cooking</li>
            <ul><li>Here's a pizza I made recently. This has nothing to do with web development, but I still want you to see it:</li></ul>
            </ul>
            <img src='./assets/Pizza.jpg' className='foodPic' alt='A picture of a very delicious pizza'/>
            </Row>
        </Container>
    )
}