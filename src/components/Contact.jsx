import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container'

export default function Contact() {
    return(
    <Container>
        <h1>Contact Me</h1>
        <Form>
        <Form.Group className="mb-3" controlId="contactName">
            <Form.Label>Name</Form.Label>
            <Form.Control type="text"/>
        </Form.Group>
        <Form.Group className="mb-3" controlId="email">
            <Form.Label>Email</Form.Label>
            <Form.Control type="email"/>
        </Form.Group>


        <Form.Group className="mb-3" controlId="message">
            <Form.Label>Message</Form.Label>
            <Form.Control as="textarea"/>
        </Form.Group>
        <Button variant="primary" type="submit">
            Submit
        </Button>
        </Form>
    </Container>
    )
}