import React, { useState } from 'react';
import { Row, Col, Form, Button } from 'react-bootstrap';
import { useDispatch } from 'react-redux';

const SearchBox = () => {
    let [keyword, setKeyword] = useState("");
    let dispatch = useDispatch();
    const searchByName = (event) => {
        event.preventDefault();
        dispatch({ type: "SEARCH_BY_USERNAME", payload: { keyword }});
    }

  return (
    <Form onSubmit={searchByName} className='search-form'>
        <Row>
            <Col lg={10}>
                <Form.Control type="text" placeholder="이름을 검색하세요." onChange={(event) => setKeyword(event.target.value)} />
            </Col>
            <Col lg={2}>
                <Button>찾기</Button>
            </Col>
        </Row>
    </Form>
  )
}

export default SearchBox
