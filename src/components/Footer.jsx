import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row'

export default function Footer() {
    return (
        <div className="footer">
            <Container>
                <Row>
                    <a className="socialLink" href="https://github.com/DSHowarth">
                        <img className="socialImg" src="./assets/github-mark-white.png"/>
                    </a>
                    <a className="socialLink" href="https://www.linkedin.com/in/derekstanleyhowarth/">
                        <img className="socialImg" src="./assets/LI-In-Bug.png"/>
                    </a>
                </Row>
            </Container>
        </div>
    )
}