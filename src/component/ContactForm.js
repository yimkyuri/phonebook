import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import { useDispatch } from 'react-redux';

const ContactForm = () => {
    const [name, setName] =  useState('');
    const [phoneNumber, setPhoneNumber] = useState(0);
    const dispatch = useDispatch();

    const addContact = (event) => {
        event.preventDefault();
        dispatch({type:"ADD_CONTACT", payload:{name, phoneNumber}})
    }
  return (
    <section>
        <h2 className='sub-title'>연락처 추가</h2>
        <Form onSubmit={addContact}>
            <Form.Group className="mb-3" controlId="formName">
                <Form.Label>이름</Form.Label>
                <Form.Control type="text" placeholder="이름을 입력해주세요." onChange={(event)=>setName(event.target.value)} />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formCantact">
                <Form.Label>전화번호</Form.Label>
                <Form.Control type="number" placeholder="연락처를 입력해주세요." onChange={(event)=>setPhoneNumber(event.target.value)} />
            </Form.Group>
            
            <Button variant="primary" type="submit">
                추가
            </Button>
        </Form>
    </section>
  )
}

export default ContactForm
