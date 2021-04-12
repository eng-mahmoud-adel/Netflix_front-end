import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import { Button, Card } from 'react-bootstrap';
import { NavLink } from "react-router-dom";
import Input from '../Input/Input';
import { useState } from 'react';
import ProfilePic from './../ProfilePicture/ProfilePic';
import defaultPic from './../defaultProfile.jpg';

function ShowProfilesForm(props){
    const [profiles,setProfiles]=useState([]);

    return ( 
        <>
            <Row>
                <Col className="col-12 " style={{backgroundColor: 'rgba(0,0,0,.75)', height: '660px', padding: '60px 68px 40px'}}>
                
                    <h1 className="text-center">Who's watching?</h1>

                    <div className="d-flex justify-content-center align-items-center row h-50 mb-5">
                        {profiles.map=(profile=>(
                        <Card className="mr-3" style={{ width:"150px", height:"150px", backgroundColor: 'rgba(0,0,0,.75)' }}>
                            <Card.Img variant="top" src={profile.image || defaultPic} />
                            <Card.Body>
                                <Card.Title className="text-center">{profile.name||"user"}</Card.Title>
                            </Card.Body>
                        </Card>
                        ))}
                        <Card className="mr-3" style={{ width:"150px", height:"150px", backgroundColor: 'rgba(0,0,0,.75)' }}>
                            <NavLink to="/addprofile" className="text-center text-white">
                                <svg xmlns="http://www.w3.org/2000/svg"fill="currentColor" class="bi bi-plus-circle-fill" viewBox="0 0 16 16">
                                <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8.5 4.5a.5.5 0 0 0-1 0v3h-3a.5.5 0 0 0 0 1h3v3a.5.5 0 0 0 1 0v-3h3a.5.5 0 0 0 0-1h-3v-3z"/>
                                </svg>
                            </NavLink>
                            <Card.Body>
                                <Card.Title className="text-center">Add Profile</Card.Title>
                            </Card.Body>
                        </Card>
                    </div>
                    
                    <div className="d-flex justify-content-center align-items-center my-5">
                        <Button type="button" className={`btn btn-outline-dark col-xs-9`} style={{backgroundColor:"rgba(0,0,0,0)"}} >Manage Profiles</Button>
                    </div>
                </Col>
            </Row>
        </>
     );
}
 
export default ShowProfilesForm;
