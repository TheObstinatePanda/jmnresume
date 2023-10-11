import skillDLL from './skillsList';

const skillsData = new skillDLL();

const skills = [
    {
        skill: "JavaScript",
        skillDescription: "This page was developed entirely with Javascript.  Utilizing JSX to create HTML elements, I developed data structures which allow me to dynamically add or remove content to specific areas of the page in order to display content with minimal effort."
    },
    {
        skill: "React",
        skillDescription: "The React library has been one my main focus in developing my front-end developer skills.  On this page, I used it to create the hover effects that add the preview thumbnails to my profile links and to my skill descriptions."
    },
    {
        skill: "Redux",
        skillDescription: "The Redux library was not used in this project, however I have used it on several course projects found in Codecademy's front-end course. "
    },
    {
        skill: "HTML/CSS",
        skillDescription: "I have several years of experience making basic HTML websites and styling them with CSS.  I used it professionally during my Knoweldge Manager position and I utilize the JSX equivalent of HTML to create efficient and dynamic web apps."
    },
    {
        skill: "API calls",
        skillDescription: "I have experience with writing API calls with the React and Redux libraries.  I have written basic calls to retrieve simple data, such as quotes from api-ninjas, and more complex apps like Spotify."
    },
    {
        skill: "Node.js",
        skillDescription: "I used Node to manage development packages and test functions during initial development by running my code in the Node environment."
    },
    {
        skill: "Jest",
        skillDescription: "I commonly test my applications using the Jest framework to ensure my application is working from End-to-End.  I specifically focus on interactive components such as those from React or from API calls/calls to a server."
    },
    {
        skill: "GIT/GitHub",
        skillDescription: "I use the GIT DVCS to create and maintain my file structures as I develop webapps.  I utilize it to deploy my repositories to my GitHub account so I can share my code and deploy my sites from a respective repo."
    },
    {
        skill: "ServiceNow",
        skillDescription: "ServiceNow is a cloud-based platform that is used for enterprise and IT service management.  I managed a knoweldge base, ran reports, and managed tickets and ticket queues through the tools provided."
    },
]

skills.forEach(({skill, skillDescription}) => {
    skillsData.addToTail(skill, skillDescription)
})

skillsData.print();

export default skillsData;