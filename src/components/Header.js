import { HeaderStyle } from "./StyledComponents"
import Logo from "./assets/shared/desktop/logo-dark.png"
import { Link } from "react-router-dom"
import CloseBtn from "./assets/shared/mobile/icon-close.svg"
import { useState } from "react"

const Header = () => {

    const[menuState, setMenuState] = useState(false);

    
    return (
        <>
            <HeaderStyle>
                <Link to="/"><img height="27" width="202" src={Logo} alt="logo"></img></Link>
                {menuState ? 
                <img onClick={()=>setMenuState(false)} src={CloseBtn} alt="close Icon"/>:
                <svg onClick={()=>setMenuState(true)} width="24" height="20" xmlns="http://www.w3.org/2000/svg"><g fill="#1D1C1E" fillRule="evenodd"><path d="M0 0h24v4H0zM0 8h24v4H0zM0 16h24v4H0z"/></g></svg>
                }
                <div className="headerLinks">
                    <Link to="/about"><h2>OUR COMPANY</h2></Link>
                    <Link to="/location"><h2>LOCATION</h2></Link>
                    <Link to="/contact"><h2>CONTACT</h2></Link>
                </div>
                {menuState &&
                <div className="menuOverlay">
                    
                    <ul>
                        <li><Link to="/about"><h2>OUR COMPANY</h2></Link></li>
                        <li> <Link to="/location"><h2>LOCATION</h2></Link></li>
                        <li><Link to="/contact"><h2>CONTACT</h2></Link></li>
                    </ul>
                </div>
                }
            </HeaderStyle>
        </>
    )
}

export default Header
