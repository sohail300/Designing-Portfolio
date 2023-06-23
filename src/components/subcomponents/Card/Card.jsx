import React from "react";
// import project from '../../images/project.png'

function Card(props){
    return(
        <div id={props.id} className={props.className}>
            <a href={props.link}>
            {/* <img src={require('{props.imageLink}')} alt="Hero png"/> */}
            {/* <img src={props.imageLink} alt={props.alt}/> */}
            {/* <img src={project} alt={props.alt}/> */}
            {/* <img src={require('../../images/hero.png')} alt="Hero png"/> */}
            {/* ../images/color-game-project.png */}
            </a>
        </div>
    );
}

export default Card;