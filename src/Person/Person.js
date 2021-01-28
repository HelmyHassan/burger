import React from 'react';
import './Person.css';
// import Radium  from 'radium';

import Styled from 'styled-components';

const StyledDiv = Styled.div`

width: 60%;
margin: auto;
text-align: center;
padding: 16px;
border: 1px solid #eee;
box-shadow: 0px 2px 3px #ccc;


@media (min-width:500px){

   width: 450px;

}
`;

const Person = (props) => {

    return (
        // <div className="Person" style={style}>
        <StyledDiv>    <p onClick={props.click}>I am {props.name} and I am {props.age} years old </p>
    <input type = "text" onClick={props.changed}/>
    </StyledDiv>

    )
}

export default Person;