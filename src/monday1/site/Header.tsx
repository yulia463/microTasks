import React from "react";

type HeaderPropsType={
    title:string
}
export const Header = (props:HeaderPropsType) => {
    return (
        <>{props.title}</>
    )
}