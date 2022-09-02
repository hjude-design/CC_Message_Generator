const Messages = {
    declarations:[
        'It is',
        'Where there is'
    ],
    subjects:[
        'life',
        'death',
        'cats',
        'humanity',
    ],
    statments:[
        'there is absurdity',
        'there is meaning',
        'lies the root of all fear',
        'is the only perception of the universe'
    ]
};

const Quote = () =>{
    const declaration = Messages.declarations[Math.floor(Math.random() * Messages.declarations.length)];
    const subject = Messages.subjects[Math.floor(Math.random() * Messages.subjects.length)];
    const statment = Messages.statments[Math.floor(Math.random() * Messages.statments.length)];
    
    return `${declaration} ${subject} ${statment}`;
}

console.log(Quote());