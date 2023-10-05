const DLL = require('./workHistoryList')

const WorkHistory = new DLL();

const workHistData = [
    {
        position: "Developer at PENTADEV",
        company: "PENTADEV",
        dates: "June 2023 - Current",           
        resp : [
            "Collaborating with an independent team of four other junior developers to build dynamic applications",
            "Developed API components to pull information from sites like Reddit and Spotify as well as logic to display random tips, quotes, facts, among other information",
            "Moderated a private Discord server to promote engagement and increase our overall productivity",
            "Responsible for design work of the applications including wireframes, CSS, and graphical items"
        ]
    },
    {
        position: "Knowledge Manager",
        company: "TEKSystems",
        dates: "Dec 2019 – Nov 2022",           
        resp : [
            "Overhauled a knowledge base composed of hundreds of articles used by Blue Cross Blue Shield (BCBS) employees including SOPs, FAQs and technical support instructions for internal and external facing applications", 
            "Utilized HTML with CSS to create easy to use templates within Service Now for individual teams to create their own knowledge base articles that fit within BCBS’s branding and a standardized format",
            "Moderated a private Discord server to promote engagement and increase our overall productivity",
            "Interfaced with subject matter experts to develop requirements and documentation in the knowledge base, providing clear, easy to access guidance for the implementation of complex solutions",
            "Maintained the revamped knowledge base according to set requirements, creating, reviewing, revising/updating and pruning out of date articles as needed"
        ]
    },
    {
        position: "Community Moderator (Volunteer)",
        company: "Codecademy",
        dates: "Jan 2023 - Current",           
        resp : [
            "Engaging new Codecademy learners and helping them become active in the Discord and within the Codecademy forums", 
            "Supporting community members by answering questions or assisting with coding solutions",
            "Collaborating with other learners and forming teams for projects",
            "Monitoring Discord channels and forum topics for content that violates Codecademy's Code of Conduct to keep communications positive and productive",
        ]
    },
]

workHistData.forEach(({ position, dates, resp, company}) => {
    WorkHistory.addToHead(position, dates, resp, company);
})

//WorkHistory.print()
//console.log(WorkHistory);

export default WorkHistory;

