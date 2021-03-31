import Form from 'react-bootstrap/Form';

function Input({type, placeholder, style}) {
    return (
      <>
        <Form.Control type={type} placeholder={placeholder} style={style} />
      </>
    );
}
  
export default Input;