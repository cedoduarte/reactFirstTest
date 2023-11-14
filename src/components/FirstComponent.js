import React, { useState } from 'react';

export const FirstComponent = () => {
    //let name = "Carlos Enrique Duarte Ortiz";
    let company = "DuarteCorporation";
    let programmingLanguages = [
        "JavaScript",
        "PHP",
        "Python",
        "Ruby",
        "C#",
        "Java",
        "C",
        "C++"
    ];

    const [name, setName] = useState("Carlos Enrique Duarte Ortiz");

    const changeName = (newName) => {
        setName(newName);
    }

    return (
        <div>
            <h1>My first component</h1>
            <p>This is a text in my first component</p>
            <p>My name is: <strong className={name.length >= 4 ? 'green' : 'red'}>{name}</strong></p>
            <p>My company is {company}</p>
            <input type="text" onChange={ evnt => changeName(evnt.target.value) } placeholder='Change the name'></input>
            <button onClick={ evnt => {
                console.log("The state value is: ", name);
            }}>
                Show state value
            </button>
            <button onClick={ evnt => changeName("Carlos Duarte") }>
                Change name
            </button>
            <h2>Programming languages</h2>
            <ul>
                {
                    programmingLanguages.map((programmingLanguage, index) => {
                        return (<li key={index}>{programmingLanguage}</li>);
                    })
                }
            </ul>
        </div>
    );
}