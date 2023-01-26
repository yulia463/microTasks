import React from "react";
import {Button} from "./Button";

export const FinishMonday3 = () => {

    const onClickHandler = (name: string) => {
        console.log(name)
    }
    const foo1 = () => {
        console.log(100200)
    }
    const foo2 = (num: number) => {
        console.log(num)
    }
    const Button1Foo = (subscriber: string, age: number) => {
        console.log(subscriber, age)
    }
    const Button2Foo = (subscriber: string, age: number) => {
        console.log(subscriber)
    }
    const Button3Foo = () => {
        console.log("i am stupid button")
    }
    return (
        <div>
            <Button callBack={() => Button1Foo("Yopik", 21)} name={"MyYouTubeChanel-1"}/>
            <Button callBack={() => Button2Foo("Ivan", 44)} name={"MyYouTubeChanel-2"}/>
            <Button name={"stupid button"} callBack={ Button3Foo}/>

            <button onClick={foo1}>1</button>
            <button onClick={() => foo2(100200)}>2</button>
        </div>
    )
}