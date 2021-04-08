import { useState } from 'react';
import Accordion from 'react-bootstrap/Accordion';
import Card from 'react-bootstrap/Card';
  
function BaseAccordion({header, body, body2}) {
    const [close, setClose] = useState(true);

    const handleClose = () => {
        setClose(!close);
    }

    return (
        <Accordion defaultActiveKey="1" className="mb-3">
        <Card style={{backgroundColor: '#303030'}}>
            <Accordion.Toggle eventKey="0" as={Card.Header} onClick={handleClose} className="text-white" style={{cursor: 'pointer'}}>
                {header}
                {
                    close ? <i className="fas fa-plus"></i> : <i className="fas fa-times"></i>
                }
            </Accordion.Toggle>
            <Accordion.Collapse eventKey="0">
            <Card.Body className="text-white">{body}<br /><br />{body2}</Card.Body>
            </Accordion.Collapse>
        </Card>
        </Accordion>
    );
}
  
export default BaseAccordion;