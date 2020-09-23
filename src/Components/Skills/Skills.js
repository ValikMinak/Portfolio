import React from 'react';
import {SkillsStyled} from "../../Styled/SkillsStyled";
import {
    BEM,
    CSS,
    Figma,
    Git,
    HTML,
    JSSkills,
    Material,
    REACT,
    Redux,
    RestApi,
    Sass,
    Styled,
    Typescript,
    WebStorm
} from "../../SVG";

const size = 100
let key=2342


const Skills = ({isShowSidebar,activeLanguage}) => {
    const technologies = [<HTML key={key++} width={size} height={size}/>, <CSS key={key++} width={size} height={size}/>,<JSSkills key={key++} width={size} height={size}/>,<Typescript  key={key++} width={size} height={size}/>, <REACT key={key++} width={size} height={size}/>,
        <Redux key={key++} width={size} height={size}/>, <Styled key={key++} width={size} height={size}/>, <Sass key={key++} width={size} height={size}/>,
        <BEM key={key++} width={size} height={size}/>,
        <RestApi key={key++} width={size} height={size}/>,
        <Material key={key++} width={size} height={size}/>,
        <Git key={key++} width={size} height={size}/>, <Figma key={key++} width={size} height={size}/>,<WebStorm key={key++} width={size} height={size}/>]

    return (
        <SkillsStyled isShowSidebar={isShowSidebar}>
            {activeLanguage==="ru"
            ?<h1>Навыки</h1>
            :<h1>Skills</h1>}
            <div className='skills'>
                {technologies.map((technology) => technology)}
            </div>
        </SkillsStyled>
    );
};

export default Skills;
