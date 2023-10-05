import {DLL} from './skillsList';

const skillsData = new DLL();

const skills = [
    {
        skill: "JavaScript",
        skillDescription: "Per aspera ad astra. This phrase translates to Through hardships to the stars in English. It suggests that great achievements often require overcoming challenges and difficulties."
    },
    {
        skill: "React",
        skillDescription: ""
    },
    {
        skill: "Redux",
        skillDescription: ""
    },
    {
        skill: "HTML/CSS",
        skillDescription: ""
    },
    {
        skill: "Node.js",
        skillDescription: ""
    },
    {
        skill: "Jest",
        skillDescription: ""
    },
    {
        skill: "GIT/GitHub",
        skillDescription: ""
    },
    {
        skill: "ServiceNow",
        skillDescription: ""
    },
]

skills.forEach(({skill, skillDescription}) => {
    skillsData.addToTail(skill, skillDescription)
})

//skillsData.print();

export default skillsData;