import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import { Button } from 'react-bootstrap';
import Input from '../Input/Input';
import { useState } from 'react';
import ProfilePic from './../ProfilePicture/ProfilePic';
import defaultPic from './../defaultProfile.jpg';


function AddProfileForm({addprofile}){
    const [name, setName] = useState('');
    const [isKid, setIsKid] = useState(false);
    const [imgSrc, setImgSrc] = useState(null);
    const [image,setImage] = useState();
    const [user,setUser] = useState(1);

    const onNameChange = (e) => {
        if (e.target.value) {
            const name = e.target.value;
            setName(name);
        }
    }

    const onIsKidChange = (e) => { 
        const isKid = e.target.checked;
        setIsKid(isKid);
    }

    const onImageChange = (e) => {
        if (e.target.files && e.target.files[0]) {
            const imgSrc = URL.createObjectURL(e.target.files[0]);
            const image=e.target.files[0];
            setImage(image);
            setImgSrc(imgSrc);
        }
    }
    const onImageClick = (e) => {
        console.log("clicked");
    }
     
    const handleSubmit = (e) => {
        e.preventDefault();
        let uploadData = new FormData();
        // console.log({name, image, isKid, user})
        uploadData.append('name',name);
        uploadData.append('image',image);
        uploadData.append('isKid',isKid);
        uploadData.append('user',user);
        addprofile(uploadData);
    }

    return ( 
        <Row className="">
            <Col style={{backgroundColor: 'rgba(0,0,0,.75)', height: '660px', padding: '60px 68px 40px'}}>
                <Form className="col-9"  onSubmit={handleSubmit} encType='multipart/form-data'>
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
                            <Input onChange={onNameChange} type="name" name="name" placeholder="Name" style={{ backgroundColor: '#555', color: 'white'}} />
                        </Form.Group>
                        <Form.Check 
                            onChange={onIsKidChange}
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