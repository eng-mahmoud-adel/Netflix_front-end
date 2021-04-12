import { Button, Card } from 'react-bootstrap';
import { useState,useEffect } from 'react';
import defaultPic from './../defaultProfile.jpg';

function UserCard({profiles, getprofiles, deleteprofile}){
    console.log(profiles)
    const url =  new URL('http://localhost:8000');
    const handleEdit =(e) => {
        const id = e.target.id;
        const profileId =localStorage.setItem('profile_id',id);
    }
    const handleDelete =(e) => {
        const id = e.target.id;
        deleteprofile(id)
        window.location.reload(false);
    }
    return (
        profiles.map( (item) => (
            <Card onClick={console.log(item.id)} className="mr-3" style={{ width: '12rem', height:'18rem', backgroundColor: 'rgba(0,0,0,.75)' , margin:'.5rem' }}>
                <Card.Img height="150" width="150" variant="top" src={ item.image?'http://localhost:8000'+item.image : defaultPic} />
                <Card.Body>
                    <Card.Title className="text-center">{item.name||"user"}</Card.Title>
                    <Button className={`btn btn-outline-dark`}  style={{backgroundColor:"rgba(0,0,0,0)"}} onClick={handleEdit} id={item.id} variant="primary">Edit</Button>
                    <Button className={`btn btn-outline-danger`}  style={{backgroundColor:"rgba(225,0,0,.3)", marginLeft:"5px"}} onClick={handleDelete} id={item.id} variant="primary">Delete</Button>
                </Card.Body>
            </Card>
        ))
        
)}

export default UserCard;
