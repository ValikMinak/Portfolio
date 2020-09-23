import React, {useState} from 'react';
import './App.scss'
import {Route, Switch, withRouter} from "react-router-dom";

import MainPage from "./MainPage/MainPage";
import Sidebar from "./Sidebar/Sidebar";
import Portfolio from "./Portfolio/Portfolio";
import ContactMe from "./ContactMe/ContactMe";
import Skills from "./Skills/Skills";
import {projects} from "../Mock";

const App = ({location}) => {
    const pizzaColor = location.pathname === "/portfolio/pastapizza" && "#FFDF8A"
    const growColor = location.pathname === "/portfolio/growithead" && "#4BBF6B"
    const tetrisColor = location.pathname === "/portfolio/tetris" && "#843DC4"
    const sudokuColor = location.pathname === "/portfolio/sudoku" && "#a0e9fd"

    const [isShowSidebar, setIsShowSidebar] = useState(false);
    const [activeColor, setActiveColor] = useState(pizzaColor || growColor || tetrisColor || sudokuColor || "red");
    const [activeSlide, setActiveSlide] = useState(false)
    const [activeLanguage, setActiveLanguage] = useState("en")
    return (
        <div className="app">
            <Sidebar isShowSidebar={isShowSidebar} setIsShowSidebar={setIsShowSidebar}
                     activeColor={activeColor} setActiveColor={setActiveColor}
                     activeSlide={activeSlide} setActiveSlide={setActiveSlide} activeLanguage={activeLanguage}/>
            <Switch>
                <Route path={'/'} render={() => <MainPage isShowSidebar={isShowSidebar} activeLanguage={activeLanguage} setActiveLanguage={setActiveLanguage} />} exact/>
                {projects.map((project) =>
                    <Route key={project.id} path={`/portfolio/${project.name}`}
                           render={() => <Portfolio project={project} isShowSidebar={isShowSidebar}
                                                    setActiveSlide={setActiveSlide} activeColor={activeColor}
                                                    setActiveColor={setActiveColor} activeLanguage={activeLanguage}/>}/>
                )}
                <Route path={'/skills'} render={() => <Skills isShowSidebar={isShowSidebar} activeLanguage={activeLanguage}/>}/>
                <Route path={'/contacts'} render={()=><ContactMe isShowSidebar={isShowSidebar} activeLanguage={activeLanguage}/>}/>
            </Switch>
        </div>
    );
};

export default withRouter(App);
