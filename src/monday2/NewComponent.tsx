import React from 'react';
import {CarType} from "./FinishMonday2";

export type StudentType = {
    id: number
    name: string
    age: number
}
export type NewComponentPropsType = {
    student: Array<StudentType>
    cars:Array<CarType>
}

export const NewComponent = (props: NewComponentPropsType) => {

    return (
        <div>
            <ul>
                {props.student.map((el, index) => {
                    return (
                        <li key={el.id}>
                            <span>{el.name} age : </span>
                            <span>{el.age}</span>
                        </li>
                    )
                })}
            </ul>
            <div>
                {props.cars.map((el,index)=>{
                    return(
                        <ol key={index}>
                            <li>
                                {el.manufacturer}
                            </li>
                            <li key={index}>
                                {el.model}
                            </li>
                        </ol>
                    )
                })}
            </div>
        </div>
    );
}
