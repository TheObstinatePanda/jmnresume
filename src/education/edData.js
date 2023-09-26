const edList = require('./edList');

const edData = new edList();

const education = [
    {
        detail: "Bachelor of Arts 2008 - The Art Institute of Washington",
        type: "School"
    },
    {
        detail: "Front-End Development - Codecademy (Skilllsoft) 2023",
        type: "Cert"
    },
    {
        detail: "ITIL V4 Foundation",
        type: "Cert"
    },
    {
        detail: "ITIL V4 Create, Deliver, Support",
        type: "Cert"
    },
]

education.forEach(({detail, type}) => {
    edData.addToTail(detail, type)
})

edData.print();

export default edData;