const dialogsData = [
    { id: 1, name: 'Anton', message: 'Hi, how are you doing?' },
    { id: 2, name: 'Sergey', message: 'Why did you leave me on read?' },
    { id: 3, name: 'Yulia', message: 'Ok, back off!' },
    { id: 4, name: 'Sveta', message: 'bye!' }
];

const messagesData = [
    { id: 1, name: 'Anton', message: 'Hi, how are you doing?' },
    { id: 2, name: 'Sergey', message: 'Why did you leave me on read?' },
    { id: 3, name: 'Yulia', message: 'Ok, back off!' }
];

let state = {
    dialogsState: dialogsData,
    messagesState: messagesData
}

export default state;