import navDLL from './navList';

const navData = new navDLL();

const elements = [
    {
        title: "CSS Stylecard",
        url: "https://opstylecard.netlify.app/",
        preview: require("../images/stylecard.PNG"),
    },
    {
        title: "Artist Portfolio",
        url: "https://thepandasden.netlify.app/",
        preview: require("../images/artistportfolio.PNG"),
    },
    {
        title: "GitHub",
        url: "https://github.com/TheObstinatePanda",
        preview: require("../images/githubportfolio.PNG"),
    },
]

elements.forEach(({title, url, preview}) => {
    navData.addToTail(title, url, preview)
})

//navData.print();

export default navData;