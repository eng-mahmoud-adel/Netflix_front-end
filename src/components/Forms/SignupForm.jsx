import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import BaseButton from '../Buttons/Buttons';
import Input from '../Input/Input';
import { useState } from 'react';
import { useHistory } from 'react-router-dom';

function SignupForm({registerUser, userEmail, error}) {
  const email = userEmail;
  const [password1, setPassword1] = useState('');
  const [password2, setPassword2] = useState('');
  let history = useHistory();

  const onChangePassword1 = (e) => {
    const password1 = e.target.value;
    setPassword1(password1);
  };

  const onChangePassword2 = (e) => {
    const password2 = e.target.value;
    setPassword2(password2);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    registerUser({email, password1, password2});
    if(error == 400) {
      console.log('hi')
      return(
        alert('error')
      )
    }
    // history.push('/signup');
  }
    return (
        <Row className="justify-content-md-center">
            <Col>
                <Form onSubmit={handleSubmit}>
                    <Form.Group controlId="formGroupEmail">
                        <Input type="email" name="email" value={userEmail} placeholder="Email" style={{height:'60px'}} required="required" disabled="disabled" />
                    </Form.Group>

                    <Form.Group controlId="formGroupPassword1">
                        <Input type="password" name="password1" value={password1} onChange={onChangePassword1} placeholder="Password" style={{height:'60px'}} required="required" />
                    </Form.Group>

                    <Form.Group controlId="formGroupPassword2">
                        <Input type="password" name="password2" value={password2} onChange={onChangePassword2} placeholder="Confirm Password" style={{height:'60px'}} required="required" />
                    </Form.Group>
                      <BaseButton type="submit" color="btn-danger" style={{height: '70px'}}>Next</BaseButton>
                </Form>
            </Col>
        </Row>
    );
}
  
export default SignupForm;