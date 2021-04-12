import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import BaseButton from '../Buttons/Buttons';
import Input from '../Input/Input';
import { NavLink } from 'react-router-dom';
import { useState } from 'react';
import { GoogleLogin } from 'react-google-login';

function LoginForm({login}) {
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
    login({email, password});
  }

  const responseGoogle = (response) => {
    const {name, email, imageUrl} = response.profileObj;
    return {name, email, imageUrl};
  }
    return (
      <Row className="justify-content-md-center">
        <Col style={{backgroundColor: 'rgba(0,0,0,.75)', height: '660px', padding: '60px 68px 40px'}}>
          <Form onSubmit={handleSubmit}>
            <h1 className="text-white mb-4"><b>Sign In</b></h1>
              <Form.Group controlId="formGroupEmail">
                  <Input type="email" name="email" value={email} onChange={onChangeEmail} required="required" placeholder="Email or Phone Number" style={{height:'50px', backgroundColor: '#333', border: '1px solid #333', color: 'white'}} />
              </Form.Group>

              <Form.Group controlId="formGroupPassword">
                  <Input type="password" name="password" value={password} onChange={onChangePassword} required="required" placeholder="Password" style={{height:'50px', backgroundColor: '#333', border: '1px solid #333', color: 'white'}} />
              </Form.Group>

              <BaseButton type="submit" color="btn-danger">Sign In</BaseButton>

              <Row className="mx-0" style={{alignItems: 'center'}}>
                <Form.Group controlId="formBasicCheckbox" className="mt-3">
                  <Form.Check type="checkbox" label="Remember me" style={{color: '#b3b3b3'}} />
                  
                </Form.Group>
                <NavLink to="#" className="ml-auto" style={{color: '#b3b3b3'}}>Need help?</NavLink>
              </Row>

              <div>
                <div>
                  <GoogleLogin
                    clientId="263908953022-4tdu5pighgll2juksrb0296o66tiugvg.apps.googleusercontent.com"
                    onSuccess={responseGoogle}
                    onFailure={responseGoogle}
                    cookiePolicy={'single_host_origin'}
                  />
                </div>
              </div>

              <div className="mt-3">
                <span style={{color: '#b3b3b3'}}>New to Netflix? </span>
                <NavLink to="/" className="text-white">Sign up now</NavLink>
              </div>

              <div className="mt-3">
                <small style={{color: '#b3b3b3'}} className="mr-2">This page is protected by Google reCAPTCHA to ensure you're not a bot.</small>
                <NavLink to="#"><small>Learn more</small></NavLink>
              </div>
          </Form>
        </Col>
      </Row>
    );
}
  
export default LoginForm;