import React from 'react';
import './style.css'
import '../../../node_modules/bootstrap/dist/css/bootstrap.css'
import { Navbar , Form , Nav , FormControl} from 'react-bootstrap';

class Navbarr extends React.Component {
    state = {  }
    render() { 
        return ( 
            <React.Fragment>

                <Navbar className="navbar" expand="lg">
                    <Navbar.Brand href="#home"></Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="mr-auto">
                            <Nav.Link className="logo" href="#home"></Nav.Link>
                            <Nav.Link className="navLink" href="#home">Home</Nav.Link>
                            <Nav.Link className="navLink" href="#">TV Shows</Nav.Link>
                            <Nav.Link className="navLink" href="#">Movies</Nav.Link>
                            <Nav.Link className="navLink" href="#">My List</Nav.Link>
                        </Nav>
                        <Form inline>
                            <FormControl type="text" placeholder="Hollywood" className="mr-sm-2 formSearch" />
                        </Form>
                    </Navbar.Collapse>
                </Navbar>

                {/* <Navbar className="navbar" expand="lg">
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="mr-auto">
                        <Nav.Link className="logo" href="#home"></Nav.Link>
                        <Nav.Link href="#home">Home</Nav.Link>
                        <Nav.Link href="#">TV Shows</Nav.Link>
                        <Nav.Link href="#">Movies</Nav.Link>
                        <Nav.Link href="#">My List</Nav.Link>
        
                        </Nav>
                        <Form inline>
                            <FormControl type="text" placeholder="Hollywood" className="mr-sm-2 formSearch" />
                        </Form>
                    </Navbar.Collapse>
                </Navbar> */}

            </React.Fragment>
        );
    }
}
export default Navbarr ;