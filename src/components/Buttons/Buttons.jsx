import { Button } from 'react-bootstrap';

function BaseButton({children, color, style, onClick, type, right_icon}) {
    return (
      <>
        <Button type={type} style={style} onClick={onClick} className={`btn ${color} w-100`}>
            {children}
            {right_icon && <i className={right_icon} style={{paddingLeft:'10px'}}></i>}
        </Button>
      </>
    );
}
  
export default BaseButton;