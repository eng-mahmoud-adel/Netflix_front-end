import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import './404.css'
class Notfound extends Component{
    render(){
        return(
            <div className='notfound'>
                <span>404</span> <br />Page Not Found<br/>
                <div className='msg'>
                    Maybe this page moved? Got deleted? Is hiding out in quarantine? Never existed in the first place?
                    <Link to='/movies'>Return Home</Link>
                </div>
            </div>
        )
    }
}
export default Notfound;