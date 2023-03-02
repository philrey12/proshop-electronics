import React from 'react'
import { Container, Row, Col } from 'react-bootstrap';

const Footer = () => {
    return (
        <footer>
            <Container>
                <Row>
                    <Col className='text-center my-2 py-3'>
                        &copy; ProShop Electronics {new Date().getFullYear()}
                        <Col className='created-by py-1'>Built by <a href='https://www.devphil.co' target='_blank' rel='noreferrer'>DEVPHIL</a></Col>
                    </Col>
                </Row>
            </Container>
        </footer>
    );
}

export default Footer;
