import { NavLink } from "react-router-dom";
import ListElements from './ListElements'; 

function Footer(props) {
    return (
        <>
            <div className="footer" style={{backgroundColor:props.color, padding: '50px 13.9vw'}}>
                <p>
                    <NavLink className="text-muted" to="#">
                        Questions? Contact us.
                    </NavLink>
                </p>

                <ul className="row m-0 pl-0">
                    <ListElements>
                        {props.children}
                    </ListElements>
                </ul>
            </div>
        </>
    );
}

export default Footer;
