import React, {useState} from "react";

export const Usestate = () => {
    let [a, setA] = useState(1)

    const onClickHandler = () => {
        setA(++a)

        console.log(a)
    }
    const onClickHandler1 = () => {
        setA(0)
    }
    return (
        <div>
            <h1>{a}</h1>
            <button onClick={onClickHandler}>number</button>
            <button onClick={onClickHandler1}>0</button>
        </div>
    )
}