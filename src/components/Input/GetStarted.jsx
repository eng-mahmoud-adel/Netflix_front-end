import InputGroup from 'react-bootstrap/InputGroup'
import FormControl from 'react-bootstrap/FormControl'
import BaseButton from '../Buttons/Buttons';
import { NavLink } from "react-router-dom";

function GetStarted({placeholder}) {
    return (
      <>
      
        <InputGroup className="mb-3">
        
          <FormControl
              placeholder={placeholder}
              aria-label={placeholder}
              aria-describedby="basic-addon2"
              style={{height:'60px'}}
          />
          
            <InputGroup.Append style={{width:'217px'}}>
              <NavLink to="/registration" style={{width: '100%'}}>
                <BaseButton color="btn-danger" style={{borderTopLeftRadius: '0', borderBottomLeftRadius: '0'}} right_icon="fas fa-chevron-right">Get Started</BaseButton>
              </NavLink>
            </InputGroup.Append>
            
        </InputGroup>
        
      </>
    );
}
  
export default GetStarted;