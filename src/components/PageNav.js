import { NavLink } from "react-router-dom";
import Logo from "./Logo";
function PageNav() {
    return (
        <nav className="nav" style={{ border: '0.5px solid #EAEAEA', borderRadius: '35px', padding: '5px 0 10px 0' }}>
            <Logo />
            <ul className="nav ul">

                <li className="btn btn-light " style={{ border: "1px solid #EAEAEA" }}  >Get Projects</li>
                <li ><NavLink to='/registrationPage' >Onboard Talent</NavLink></li>


            </ul>

        </nav>
    )
}
export default PageNav;