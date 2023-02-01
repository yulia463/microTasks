import React, {ChangeEvent, useState} from "react";

export type FullinputPropsType = {
    addMessage: () => void
}

export const FullInput = (props:FullinputPropsType) => {
    let [title, setTitle] = useState("")

    const onChangeInputHandler = (event: ChangeEvent<HTMLInputElement>) => {
        setTitle(event.currentTarget.value)
    }
    const onClickButtonHandler=()=>{
        props.addMessage()
    }
    return <div>
        <input onChange={onChangeInputHandler}/>
        <button onClick={onClickButtonHandler}>+
        </button>
    </div>
}