import React from "react";
import edData from "./edData";

function Education() {
    const edArr = edData.toArray();

    return (
        <>
            <h3>EDUCATION</h3>
            <ul id="schools">
                {edArr
                    .filter((entry) => entry.type === "School")
                    .map((entry, index) => (
                        <li key={index}>{entry.ed}</li>
                    ))}
            </ul>
            <br />
            <h3>CERTIFICATIONS</h3>
            <ul id="certs">
                {edArr
                    .filter((entry) => entry.type === "Cert")
                    .map((entry, index) => (
                        <li key={index}>{entry.ed}</li>
                    ))}
            </ul>
        </>
    );
}

export default Education;