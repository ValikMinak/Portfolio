import React from 'react';
import {NavLink, withRouter} from "react-router-dom";
import {PortfolioStyled} from "../../Styled/PortfolioStyled";
import {BEM, JS, REACT, ReactHooks, Redux, Sass, Styled, Typescript} from "../../SVG";
import {projects} from "../../Mock";

let key = 100;
const size = "70"
const tetris = <div className="tetris">
    <span>t</span><span>e</span><span>t</span><span>r</span><span>i</span><span>s</span></div>


const Portfolio = ({activeColor, setActiveColor, setActiveSlide, project, isShowSidebar, activeLanguage}) => {
    const technologiesPastaPizza = [<JS key={key++} color={activeColor} width={size} height={size}/>,
        <REACT key={key++} color={activeColor} width={size} height={size}/>,
        <Redux key={key++} color={activeColor} width={size} height={size}/>,
        <Styled key={key++} color={activeColor} width={size} height={size}/>,
        <Sass key={key++} color={activeColor} width={size} height={size}/>,
        <BEM key={key++} color={activeColor} width={size} height={size}/>]
    const technologiesGroWitHead = [<JS key={key++} color={activeColor} width={size} height={size}/>,
        <REACT key={key++} color={activeColor} width={size} height={size}/>,
        <ReactHooks key={key++} color={activeColor} width={size} height={size}/>,
        <Styled key={key++} color={activeColor} width={size} height={size}/>,
        <Sass key={key++} color={activeColor} width={size} height={size}/>,
        <BEM key={key++} color={activeColor} width={size} height={size}/>]
    const technologiesTetris = [<JS key={key++} color={activeColor} width={size} height={size}/>,
        <REACT key={key++} color={activeColor} width={size} height={size}/>,
        <ReactHooks key={key++} color={activeColor} width={size} height={size}/>,
        <Styled key={key++} color={activeColor} width={size} height={size}/>,
        <Sass key={key++} color={activeColor} width={size} height={size}/>,
        <BEM key={key++} color={activeColor} width={size} height={size}/>]
    const technologiesSudoku = [<JS key={key++} color={activeColor} width={size} height={size}/>,
        <REACT key={key++} color={activeColor} width={size} height={size}/>,
        <ReactHooks key={key++} color={activeColor} width={size} height={size}/>,
        <Styled key={key++} color={activeColor} width={size} height={size}/>,
        <Typescript key={key++} color={activeColor} width={size} height={size}/>,
        <BEM key={key++} color={activeColor} width={size} height={size}/>]
    const {name, id, color, link, image, text} = project;

    const setActive = (active) => {
        setActiveColor(active)
        setActiveSlide(true)
    };
    return (
        <>
            <PortfolioStyled key={id} color={color} isShowSidebar={isShowSidebar} name={project.name}>
                <div className="portfolio__technologies">
                    {activeLanguage === "ru"
                        ? <h3>Технологии</h3>
                        : <h3>Technologies</h3>}
                    {name === "pastapizza" && technologiesPastaPizza.map((technology) => technology)}
                    {name === "growithead" && technologiesGroWitHead.map((technology) => technology)}
                    {name === "tetris" && technologiesTetris.map((technology) => technology)}
                    {name === "sudoku" && technologiesSudoku.map((technology) => technology)}
                </div>
                <div className="portfolio__page">
                    <a href={link} target="_blank" rel="noopener noreferrer" className="portfolio__pageProject">
                        {name === "tetris" ? tetris : <h1>{name}</h1>}
                        <img src={image} alt="Logo"/>
                    </a>
                        <p className="portfolio__text">
                            {activeLanguage === "ru" ? text.ru : text.en}
                        </p>
                </div>
                <div className="portfolio__slider">
                    {projects.map(({color, id, name}) => <NavLink onClick={() => setActive(color)}
                                                                  activeClassName="active" key={id}
                                                                  to={`/portfolio/${name}`}>
                    </NavLink>)}
                </div>
            </PortfolioStyled>
        </>

    );
};


export default withRouter(Portfolio);
