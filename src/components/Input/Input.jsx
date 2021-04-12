import Form from 'react-bootstrap/Form';

function Input({type, name, value, onChange, placeholder, style, required, disabled}) {
    return (
      <>
        <Form.Control type={type} name={name} value={value} onChange={onChange} disabled={disabled} placeholder={placeholder} style={style} required={required} />
      </>
    );
}
  
export default Input;