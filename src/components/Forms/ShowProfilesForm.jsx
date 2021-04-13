import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import { Button, Card } from 'react-bootstrap';
import { NavLink } from "react-router-dom";
import Input from '../Input/Input';
import { useState,useEffect } from 'react';
import plus from './../plus.png';
import defaultPic from './../defaultProfile.jpg';
import UserCard from './../card/card';



function ShowProfilesForm({profiles,getprofiles, getprofile, deleteprofile}){
    
    useEffect(()=>{
        getprofiles();
    }, [getprofiles])
    
    
    return ( 
        <>
            <Row>
                <Col className="col-12 " style={{backgroundColor: 'rgba(0,0,0,.75)', height: '660px', padding: '60px 68px 40px'}}>
                
                    <h1 className="text-center">Who's watching?</h1>

                    <div className="d-flex justify-content-center align-items-center row h-50 mb-5">
                        {profiles.length > 0 && <UserCard profiles={profiles} getprofiles={getprofiles} getprofile={getprofile} deleteprofile={deleteprofile}/>}
                        <Card style={{ width: '10rem', height:'18rem', backgroundColor: 'rgba(0,0,0,.75)' }}>
                            <NavLink to="/addprofile" className="text-center text-white">
                            <Card.Img height="150" width="150" variant="top" src={ plus} />
                            </NavLink>
                            <Card.Body>
                                <Card.Title className="text-center">Add Profile</Card.Title>
                            </Card.Body>
                        </Card>
                    </div>
                    
                    {/* <div className="d-flex justify-content-center align-items-center my-5">
                        <Button type="button" className={`btn btn-outline-dark col-xs-9`} style={{backgroundColor:"rgba(0,0,0,0)"}} >Manage Profiles</Button>
                    </div> */}
                </Col>
            </Row>
        </>
     );
}

export default ShowProfilesForm;
