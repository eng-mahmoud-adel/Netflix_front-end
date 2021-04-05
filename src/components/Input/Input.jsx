import Form from 'react-bootstrap/Form';

function Input({type, name, value, onChange, placeholder, style}) {
    return (
      <>
        <Form.Control type={type} name={name} value={value} onChange={onChange} placeholder={placeholder} style={style} />
      </>
    );
}
  
export default Input;