import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';

const SearchBox = ({ history }) => {
    const [keyword, setKeyword] = useState('');

    const submitHandler = (e) => {
        e.preventDefault();

        if (keyword.trim()) {
            history.push(`/search/${keyword}`);
        } else {
            history.push('/');
        }
    }

    return (
        <Form className='d-flex inline' onSubmit={submitHandler}>
            <Form.Control
                type='text'
                name='q'
                onChange={(e) => setKeyword(e.target.value)}
                placeholder='Search...'
                className='ms-sm-5 me-sm-auto'
            ></Form.Control>
            <Button type='submit' variant='secondary' className='mx-2'>
                <i className='fas fa-search'></i>
            </Button>
        </Form>
    );
}

export default SearchBox;
