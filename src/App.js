import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { Container, Row, Col } from 'react-bootstrap';
import ContactForm from "./component/ContactForm";
import ContactList from "./component/ContactList";

function App() {
  return (
    <div className='wrap'>
      <h1 className='title'>나의 연락처</h1>
      <Container>
        <Row>
          <Col>
            <ContactForm />
          </Col>
          <Col>
            <ContactList />
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default App;
