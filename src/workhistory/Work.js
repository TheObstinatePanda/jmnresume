import React from "react";
import WorkHistory from "./jobs"
import './work.css'

function Work() {    
    const workHistData = WorkHistory.toArray()
    workHistData.reverse();
    
    return (
        <>
            <ul id="workHist">
                {workHistData.map((entry, index) => {
                    return(
                    <li key={index}>
                        <h3 class="jobtitle">{entry.jobTitle}</h3>
                        <p>{entry.company}</p>
                        <p>{entry.dates}</p>
                       
                        {entry.details && entry.details.length > 0 ? (
                            <>
                            <ul className="descList">
                                {entry.details.map((responsibility, index) => {
                                   return( <li key={index} className="jobdescription">{responsibility}</li>)
                                })}
                            </ul> 
                            </>
                        ) : (
                            <p>No responsibilities available</p>
                        )}                        
                    </li>)
                })}
            </ul>
        </>
    )
}

export default Work;