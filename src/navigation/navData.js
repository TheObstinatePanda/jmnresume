import navDLL from './navList';

const navData = new navDLL();

const elements = [
    {
        title: "CSS Stylecard",
        url: "https://opstylecard.netlify.app/",
        preview: "",
    },
    {
        title: "CSS Stylecard",
        url: "https://opstylecard.netlify.app/",
        preview: "",
    },
    {
        title: "CSS Stylecard",
        url: "https://opstylecard.netlify.app/",
        preview: "",
    },
]

elements.forEach(({title, url, preview}) => {
    navData.addToTail(title, url, preview)
})

navData.print();

export default navData;