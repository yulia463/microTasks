import React from 'react';

type BodyPropsType={
    titleForBody:string
}
export const Body=(props:BodyPropsType)=> {
    return (
        <div>
            {props.titleForBody}
        </div>
    );
}
