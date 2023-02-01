import React, {useState} from 'react';
import {FullInput, FullinputPropsType} from "./FullInput";

export const Input = () => {

    let [message, setMessage] = useState([
        {message: "message1"},
        {message: "message2"},
        {message: "message3"},
    ])
    const addMessage = () => {
        console.log("aaaaa")
    }
    return (
        <div>
            <FullInput addMessage={addMessage}/>
            {message.map((el, index) => {
                return (
                    <div key={index}>{el.message}</div>
                )
            })}
        </div>
    )
};