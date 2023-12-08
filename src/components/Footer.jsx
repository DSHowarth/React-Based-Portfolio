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
                    <a className="socialLink" href="mailto:dkshowarth@gmail.com">
                        <img className="socialImg" src="./assets/letter.svg"/>
                    </a>
                </Row>
            </Container>
        </div>
    )
}