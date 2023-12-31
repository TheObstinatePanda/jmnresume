import {React, useState} from "react";
import navData from "./navData";
import './navigation.css';

function Navigation() {
    const navArr = navData.toArray();
    //console.log(navData.print());
    const [display, setDisplay] = useState(false);

    function onHover () {setDisplay(!display)};

    return(
        <>
        <nav>
            <ul id="navList">
                {navArr.map((entry, index) => {
                    return(
                        <>
                            <li key={index}
                                className="navItem"
                                onMouseEnter={onHover}
                                onMouseLeave={onHover}>
                                    <a href={entry.url} className="link" target='_blank' rel='noreferrer no opener'>
                                        {entry.title}                     
                                    </a>
                                    <img src={entry.preview} className="navImg" alt="preview tile for project"/>
                                </li>
                        </>
                    )
                })}
            </ul>
        </nav>
        </>
        
    )
}

export default Navigation;