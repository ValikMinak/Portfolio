import React from 'react';
import {NavLink, withRouter} from "react-router-dom";
import {PortfolioStyled} from "../../Styled/PortfolioStyled";
import {BEM, JS, REACT, Redux, Sass, Styled} from "../../SVG";
import {projects} from "../../Mock";

let key = 100;
const size="100"
const Portfolio = ({ activeColor,setActiveColor,setActiveSlide,project,isShowSidebar }) => {
    const technologies=[<JS key={key++} color={activeColor} width={size} height={size}/>, <REACT key={key++} color={activeColor} width={size} height={size}/>, <Redux key={key++} color={activeColor} width={size} height={size}/>, <Styled key={key++} color={activeColor} width={size} height={size}/>, <Sass key={key++} color={activeColor} width={size} height={size}/>, <BEM key={key++} color={activeColor} width={size} height={size}/>]
    const {name, id, color, link, text} = project;

    const setActive = (active) => {
        setActiveColor(active)
        setActiveSlide(true)
    };
    return (
        <>
                <PortfolioStyled key={id} color={color} isShowSidebar={isShowSidebar} name={project.name}>
                    <div className="portfolio__page">
                        <a href={link} target="_blank" rel="noopener noreferrer"><h1 className="portfolio__title">{name} <sup className="portfolio__titleCheck">(check out)</sup> </h1></a>
                        <div className="portfolio__technologies">
                            {technologies.map((technology)=>technology)}
                        </div>
                    </div>
                    <div className="portfolio__slider">
                        {projects.map(({ color,id,name })=><NavLink onClick={()=>setActive(color)} activeClassName="active" key={id} to={`/portfolio/${name}`}>
                        </NavLink>)}
                    </div>
                    <div className="portfolio__about">
                        ?
                        <p className="portfolio__text">
                            {text}
                        </p>
                    </div>
                </PortfolioStyled>
        </>

    );
};

export default withRouter(Portfolio);
