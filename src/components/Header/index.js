import "./index.css";
import {useEffect,useState} from 'react'
import {useNavigate,Link,useLocation} from 'react-router-dom'

import { GiHamburgerMenu } from "react-icons/gi";
import { FiLogOut } from 'react-icons/fi';

import Cookies from "js-cookie";


const Header = (props) => {
    const navigate = useNavigate()
    const location = useLocation();
    const [activeItem,setActiveItem] = useState("Home")

    useEffect(() =>{
        if (location.pathname === "/") {
            setActiveItem("Home");
          } else if (location.pathname === "/gallery") {
            setActiveItem("Gallery");
          } else if (location.pathname === "/recorded") {
            setActiveItem("Recorded");
          } else if (location.pathname === "/profile") {
            setActiveItem("Profile");
          } 
    },[activeItem,location.pathname])
    
    
    const handleCheckboxChange = (e) => {
        const navbarList = document.querySelector(".navbar-list");
        if (e.target.checked) {
          navbarList.classList.add("checked");
        } else {
          navbarList.classList.remove("checked");
        }
      };
      
      const onClickLogout =()=>{
        console.log('Logout button clicked');
        Cookies.remove('jwt_token');
        navigate('/login');
      }

  return (
    <nav className="navbar">
    <div className="nav-container">
      <img src="/logo.png" alt="logo" className="logo" onClick={()=>(navigate('/'))}/>

      <ul className="navbar-list">
        <Link to="/" className="nav-link">
          <li className={activeItem==="Home"?"active":"nav-list"}>
            Home
          </li>
        </Link>
        <Link to="/gallery" className="nav-link">
          <li className={activeItem==="Gallery"?"active":"nav-list"}>
            Captured Images
          </li>
        </Link>
        <Link to="/recorded" className="nav-link">
          <li className={activeItem==="Recorded"?"active":"nav-list"}>
            Recorded
          </li>
        </Link>
      </ul>
      </div>

      <div className="sign-in-container">
        <Link to="/profile" className="nav-link">
        <p className={activeItem==="Profile"?"active":"nav-list"} >Profile</p>
        </Link>
        <button className="nav-button" onClick={onClickLogout}>Logout <FiLogOut className="logout-icon"/></button>
      </div>
      

      <input type="checkbox" id="check" onChange={handleCheckboxChange} />
      <label htmlFor="check" className="checkbtn">
        <GiHamburgerMenu className="nav-icon" />
      </label>
    </nav>
  );
};

export default Header;
