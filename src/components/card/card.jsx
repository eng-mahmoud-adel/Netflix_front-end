import { Button, Card } from 'react-bootstrap';
import { useState,useEffect } from 'react';
import defaultPic from './../defaultProfile.jpg';
import {useHistory} from "react-router-dom";

function UserCard({profiles, getprofiles, getprofile, deleteprofile}){
    let history = useHistory();
    const handleEdit =(e) => {
        const id = e.target.id;
        const profileId =localStorage.setItem('profile_id',id);
        getprofile(id);
        history.push(`/editprofile/${id}`);
    }

    const handleDelete =(e) => {
        const id = e.target.id;
        deleteprofile(id);
    }

    useEffect(()=>{
        getprofiles();
    }, [getprofiles,handleDelete])
    
    return (
        profiles.map( (item) => (
            <Card className="mr-3" style={{ width: '12rem', height:'18rem', backgroundColor: 'rgba(0,0,0,.75)' , margin:'.5rem' }}>
                <Card.Img variant="top" height="150" src={ item.image?'http://localhost:8000'+item.image : defaultPic} />
                <Card.Body>
                    <Card.Title className="text-center">{item.name||"user"}</Card.Title>
                    <Button className={`btn btn-outline-dark`}  style={{backgroundColor:"rgba(0,0,0,0)"}} onClick={handleEdit} id={item.id} variant="primary">Edit</Button>
                    <Button className={`btn btn-outline-danger`}  style={{backgroundColor:"rgba(225,0,0,.3)", marginLeft:"5px"}} onClick={handleDelete} id={item.id} variant="primary">Delete</Button>
                </Card.Body>
            </Card>
        ))
        
)}

export default UserCard;
