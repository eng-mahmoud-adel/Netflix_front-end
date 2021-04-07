import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import { Button } from 'react-bootstrap';
import Input from '../Input/Input';
import { useState } from 'react';
import ProfilePic from './../ProfilePicture/ProfilePic';
import defaultPic from './../defaultProfile.jpg';


function AddProfileForm(){
    const [imgSrc, setImgSrc] = useState('');

    const onImageChange = (e) => {
        if (e.target.files && e.target.files[0]) {
            const imgSrc = URL.createObjectURL(e.target.files[0])
            setImgSrc(imgSrc);
        }
    }
    const onImageClick = (e) => {
        console.log("clicked");
    }
     
    return ( 
        <Row className="">
            <Col style={{backgroundColor: 'rgba(0,0,0,.75)', height: '660px', padding: '60px 68px 40px'}}>
                <Form className="col-9">
                    <h1>Add Profile</h1>
                    <p className="text-muted">Add a profile for another person watching Netflix.</p>
                    <hr className="bg-white"/>
                    <Form.Group>
                        <Form.File onChange={onImageChange} id="exampleFormControlFile1"></Form.File>
                    </Form.Group>
                    <Row className="d-flex-inline justify-content-between align-items-center">
                        <Form.Group className="col-lg col-sm-12">
                            <ProfilePic onChange={onImageChange} onClick={onImageClick} width="150" height="150" imgSrc={imgSrc ||defaultPic} />
                        </Form.Group>
                        <Form.Group className="col-offset-2 col-lg col-sm-9">
                            <Input type="name" name="name" placeholder="Name" style={{ backgroundColor: '#555', color: 'white'}} />
                        </Form.Group>
                        <Form.Check 
                            className="col-lg col-sm-2 ml-3"
                            type='checkbox'
                            label="Kid?"
                        />
                    </Row>
                    <hr className="bg-white"/>
                    <Row className="d-flex-inline justify-content-start align-items-center">
                        <Button type="submit" className={`btn w-25 col-lg col-sm-auto ml-3`} style={{backgroundColor:"#e50914"}}><small>CONTINUE</small></Button>
                        <Button type="button" className={`btn btn-outline-dark w-25 col-lg col-sm-auto ml-3`} style={{backgroundColor:"rgba(0,0,0,0)"}} >CANCEL</Button>
                    </Row>
                </Form>
            </Col>
        </Row>
     );
}
 
export default AddProfileForm;