import React, { useState } from 'react';
import Meta from '../components/Meta';
import { Form, Button, Row, Col } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import FormContainer from '../components/FormContainer';
import CheckoutSteps from '../components/CheckoutSteps';
import { savePaymentMethod } from '../actions/cartActions';

const PaymentScreen = ({ history }) => {
    const cart = useSelector(state => state.cart);
    const { shippingAddress } = cart;

    if (!shippingAddress) {
        history.push('/shipping');
    }

    const [paymentMethod, setPaymentMethod] = useState('PayPal');

    const dispatch = useDispatch();

    const submitHandler = (e) => {
        e.preventDefault();

        dispatch(savePaymentMethod(paymentMethod));

        history.push('/placeorder');
    }

    return (
        <div>
            <Meta title='ProShop Electronics | Payment' />
            <FormContainer>
                <CheckoutSteps step1 step2 step3 />
                <h1>Payment Method</h1>
                <Form onSubmit={submitHandler}>
                    <Row className='py-2'>
                        <Form.Group>
                            <Form.Label as='legend'>Select Method</Form.Label>
                            <Col>
                                <Form.Check 
                                    type='radio' 
                                    label='PayPal or Credit Card' 
                                    id='PayPal' 
                                    name='paymentMethod' 
                                    value='PayPal' 
                                    checked 
                                    onChange={(e) => setPaymentMethod(e.target.value)}
                                ></Form.Check>

                                {/* <Form.Check 
                                    type='radio' 
                                    label='Stripe' 
                                    id='Stripe' 
                                    name='paymentMethod' 
                                    value='Stripe' 
                                    onChange={(e) => setPaymentMethod(e.target.value)}
                                ></Form.Check> */}
                            </Col>
                        </Form.Group>
                    </Row>

                    <Row className='py-3'>
                        <Col>
                            <Button type='submit' variant='primary'>
                                Continue
                            </Button>
                        </Col>    
                    </Row>     
                </Form>
            </FormContainer>
        </div>
    );
}

export default PaymentScreen;
