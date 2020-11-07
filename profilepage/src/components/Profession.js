import React from 'react';

const Profession = props =>{
    return (
        <div>
        <h4>
            {props.Experience}
        </h4>
        <h6>
            {props.CompanyName}
            <hr/>
        </h6>
        <p>
            {props.ProfessionalExperience}
        </p>
        </div>
    )
    }
    export default Profession;