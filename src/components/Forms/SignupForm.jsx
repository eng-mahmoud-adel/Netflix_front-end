import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import BaseButton from '../Buttons/Buttons';
import Input from '../Input/Input';
import { NavLink } from 'react-router-dom';
import { useState } from 'react';

function SignupForm() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const onChangeEmail = (e) => {
    const email = e.target.value;
    setEmail(email);
  };

  const onChangePassword = (e) => {
    const password = e.target.value;
    setPassword(password);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // login({email, password});
  }
    return (
        <Row className="justify-content-md-center">
            <Col style={{}}>
                <Form onSubmit={handleSubmit}>
                    <Form.Group controlId="formGroupEmail">
                        <Input type="email" name="email" value={email} onChange={onChangeEmail} placeholder="Email" style={{height:'60px'}} />
                    </Form.Group>

                    <Form.Group controlId="formGroupPassword">
                        <Input type="password" name="password" value={password} onChange={onChangePassword} placeholder="Password" style={{height:'60px'}} />
                    </Form.Group>
                </Form>
                
                <NavLink to="signup">
                    <BaseButton color="btn-danger" style={{height: '70px'}}>Next</BaseButton>
                </NavLink>
            </Col>
        </Row>
    );
}
  
export default SignupForm;