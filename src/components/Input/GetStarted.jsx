import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup'
import FormControl from 'react-bootstrap/FormControl'
import BaseButton from '../Buttons/Buttons';
import { useHistory } from "react-router-dom";
import { connect } from "react-redux";
import { useState } from 'react';
import { changeEmail } from '../../store/actions/auth';

function GetStarted({placeholder, required, userEmail, changeEmail}) {
  const [email, setEmail] = useState(userEmail);
  let history = useHistory();

  const onChangeEmail = (e) => {
    const email = e.target.value;
    setEmail(email);
    changeEmail(email);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    history.push('/registration');
  }
    return (
      <>
      <Form onSubmit={handleSubmit}>
          <InputGroup className="mb-3">
          
            <FormControl
                placeholder={placeholder}
                aria-label={placeholder}
                aria-describedby="basic-addon2"
                style={{height:'60px'}}
                required={required}
                value={email}
                onChange={onChangeEmail}
                type="email"
            />
            
              <InputGroup.Append style={{width:'217px'}}>
                <BaseButton type="submit" color="btn-danger" style={{borderTopLeftRadius: '0', borderBottomLeftRadius: '0', height: '100%'}} right_icon="fas fa-chevron-right">Get Started</BaseButton>
              </InputGroup.Append>
              
          </InputGroup>
        </Form>
        
      </>
    );
}

const mapStateToProps = (state) => ({
  userEmail: state.authUser.user.email
});

const mapDispatchToProps = (dispatch) => ({
  changeEmail: (email) => {
      dispatch(changeEmail(email))
  }
});
  
export default connect(mapStateToProps, mapDispatchToProps)(GetStarted);