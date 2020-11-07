import React from 'react';
import Profile from"./Profile";

const Bio = props =>{
    return (
        <div>
        <h1>
            {props.Title}
        </h1>
        <p>
            {props.Summary}
        </p>
        </div>
    )
    }
    export default Bio;