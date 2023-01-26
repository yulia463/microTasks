import React from "react";

export type FilterPropsType={
    currentMoney:any
    onClickFilterHandler:any
}

export const Filter2=(props:FilterPropsType)=>{

    return(
        <div>
            <ul>
                {props.currentMoney.map((el:any, index:number) => {
                    return <li key={index}>
                            <span>{el.banknots}</span>
                            <span>{el.value}</span>
                            <span>{el.number}</span>
                        </li>
                })}
            </ul>
            <div style={{marginLeft: '35px'}}>
                <button onClick={() => props.onClickFilterHandler("all")}>all</button>
                <button onClick={() => props.onClickFilterHandler("rub")}>rub</button>
                <button onClick={() => props.onClickFilterHandler("dollar")}>dollar</button>
            </div>
        </div>
    )
}