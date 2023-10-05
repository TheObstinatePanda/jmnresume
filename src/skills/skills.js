import {React, useState} from "react";
import skillsData from "./skillsData"
import './skills.css'

function Skills() {
    const skillsArr = skillsData.toArray();
    const [display, setDisplay] = useState(false);

    function onHover () { setDisplay(!display)}

    return (
        <>
            <h3 className="h3Left">SKILLS</h3>
            <ul id="skillsList" >
                {skillsArr.map((entry, index) => {
                    return (
                        <>
                        
                        <li key={index} 
                            className="listItem"
                            onMouseEnter={onHover}
                            onMouseLeave={onHover}>
                            <span className="skillText">{entry.skill}</span>
                            <p className="description">{entry.desc}</p>
                        </li>
                        </>
                    )
                })}
            </ul>
        </>
    )
}

export default Skills;