import React, { useState } from 'react'
import "./navbar.scss"
import logo from '../../Assets/Image/Logo_test.png'
import { ArrowDropDown, Notifications, Search } from '@material-ui/icons'
import prof from '../../Assets/Image/MG_001.jpg'



const Navbar = () => {
    const[isScrolled  , setIsScrolled] = useState(false);
    
    window.onscroll = () => 
    {
        setIsScrolled(window.pageYOffset === 0 ? false : true);
        return ()  => (window.onscroll= null);
    };
        console.log(isScrolled);
    return (
        <div className={isScrolled ? "navbar scrolled" : "navbar"}>
            
            <div className="container">
                
                <div className="left">
                    <img src={logo} alt="Logo" />
                    <span>HomePage</span>
                    <span>Progress</span> 
                    <span>My List</span>
                </div>
                
                <div className="right">
                    <Search className="icon"/>
                    <span>Hooman</span>
                    <Notifications className="icon"/>
                    <img src={prof} alt="profile "/>
                    
                    <div className="profile">
                        <ArrowDropDown className="icon"/>
                        
                        <div className="option">
                            <span>Settings</span>
                            <span>Logout</span>
                        </div>

                    </div> 
                </div>

           </div>  
        </div>
    )
}

export default Navbar
