import { Button, Card } from 'react-bootstrap';
import { useState,useEffect } from 'react';
import defaultPic from './../defaultProfile.jpg';

function UserCard({profiles,getprofiles}){

    const [mounted, setMounted] = useState(false)
    // const [profiles, setProfiles] = useState([])

    if(!mounted){
        getprofiles();
        console.log("before mounting")
        console.log(profiles)

      }
    useEffect(()=>{
        setMounted(true);
        console.log("after mounting")
        

        // profiles.map=(profile)=>{
        //     console.log(profile.name)
        // }
    }, [])
    
    // console.log(profiles)

if(profiles.length){
    return(
        // {profiles.map=((profile)=>(
                                
        <Card className="mr-3" style={{ width:"150px", height:"150px", backgroundColor: 'rgba(0,0,0,.75)' }}>
            <Card.Img variant="top" src={ defaultPic} />
            <Card.Body>
                <Card.Title className="text-center">{"user"}</Card.Title>
            </Card.Body>
        </Card>
        // ))}

    );}
}

export default UserCard;
