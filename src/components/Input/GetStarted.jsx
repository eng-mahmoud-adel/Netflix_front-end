import InputGroup from 'react-bootstrap/InputGroup'
import FormControl from 'react-bootstrap/FormControl'
import BaseButton from '../Buttons/Buttons';

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
              <BaseButton color="btn-danger" right_icon="fas fa-chevron-right">Get Started</BaseButton>
            </InputGroup.Append>
        </InputGroup>
      </>
    );
}
  
export default GetStarted;