import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import { Button } from 'react-bootstrap';
import Input from '../Input/Input';
import { useHistory} from "react-router-dom";
import { useState, useEffect } from 'react';
import ProfilePic from './../ProfilePicture/ProfilePic';
import defaultPic from './../defaultProfile.jpg';



function EditProfileForm({profile, getprofile, updateprofile, id, error}){
    const [name, setName] = useState(profile.name);
    const [isKid, setIsKid] = useState(false);
    const [imgSrc, setImgSrc] = useState(profile.image);
    const [image,setImage] = useState();
    let history = useHistory();

    useEffect(()=>{
        getprofile(id);
    }, [getprofile, updateprofile, id])

    const imageUrl = profile.image?'https://netflix-iti-project.herokuapp.com'+profile.image : defaultPic;

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
    
    const handleCancel = () => {
        history.push(`/showprofiles`);
    }
     
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log({id,image,name});
        let uploadData = new FormData();
        uploadData.append('id',id);
        uploadData.append('name',name);
        if(image){
            uploadData.append('image',image);
        }
        uploadData.append('isKid',isKid);
        uploadData.append('user',profile.user);
        updateprofile(uploadData);
        if(error == null){
            history.push(`/showprofiles`);
        }
    }
     
    return ( 
        <Row className="">
            <Col style={{backgroundColor: 'rgba(0,0,0,.75)', height: '660px', padding: '60px 68px 40px'}}>
            {profile && 
                <Form className="col-9"  onSubmit={handleSubmit} encType='multipart/form-data'>
                    <h1>Edit Profile</h1>
                    <hr className="bg-white"/>
                    <Form.Group>
                        <Form.File onChange={onImageChange} id="exampleFormControlFile1"></Form.File>
                    </Form.Group>
                    <Row className="d-flex-inline justify-content-between align-items-center">
                        <Form.Group className="col-lg col-sm-12">
                            <ProfilePic onChange={onImageChange} width="150" height="150" imgSrc={imgSrc ||imageUrl} />
                        </Form.Group>
                        <Form.Group className="col-offset-2 col-lg col-sm-9">
                            <Input onChange={onNameChange}  type="name" name="name" placeholder={profile.name} style={{ backgroundColor: '#555', color: 'white'}} />
                        </Form.Group>
                        <Form.Check 
                            onChange={onIsKidChange}
                            className="col-lg col-sm-2 ml-3"
                            type='checkbox'
                            label="Kid?"
                        />
                    </Row>
                    <hr className="bg-white"/>
                    <Row className="d-flex-inline justify-content-start align-items-center ">
                        <Button type="submit" className={`btn btn-light w-25 col-lg col-sm-9 ml-3`}>SAVE</Button>
                        <Button type="button" onClick={handleCancel} className={`btn btn-outline-dark w-25 col-lg col-sm-9 ml-3`} style={{backgroundColor:"rgba(0,0,0,0)"}} >CANCEL</Button>
                    </Row>
                </Form>}
            </Col>
        </Row>
     );
}
 
export default EditProfileForm;