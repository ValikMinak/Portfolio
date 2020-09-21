import React, {useState} from 'react';
import './App.scss'
import {Route, Switch, withRouter} from "react-router-dom";

import MainPage from "./MainPage/MainPage";
import Sidebar from "./Sidebar/Sidebar";
import Portfolio from "./Portfolio/Portfolio";
import ContactMe from "./ContactMe/ContactMe";
import Skills from "./Skills/Skills";
import {projects} from "../Mock";
import {AppStyled} from "../Styled/AppStyled";

const App = ({location}) => {
    const pizzaColor = location.pathname === "/portfolio/pastapizza" && "#FFDF8A"
    const growColor = location.pathname === "/portfolio/growithead" && "#4BBF6B"

    const [isShowSidebar, setIsShowSidebar] = useState(false);
    const [activeColor, setActiveColor] = useState(pizzaColor || growColor || "red");
    const [activeSlide, setActiveSlide] = useState(false)
    return (
        <AppStyled>
            <div className="app">
                <Sidebar isShowSidebar={isShowSidebar} setIsShowSidebar={setIsShowSidebar}
                         activeColor={activeColor} setActiveColor={setActiveColor}
                         activeSlide={activeSlide} setActiveSlide={setActiveSlide}/>
                <Switch>
                    <Route path={'/'} render={() => <MainPage isShowSidebar={isShowSidebar}/>} exact/>
                    {projects.map((project) =>
                        <Route path={`/portfolio/${project.name}`}
                               render={() => <Portfolio project={project} isShowSidebar={isShowSidebar}
                                                        setActiveSlide={setActiveSlide} activeColor={activeColor}
                                                        setActiveColor={setActiveColor}/>}/>
                    )}
                    <Route path={'/skills'} render={() => <Skills isShowSidebar={isShowSidebar}/>}/>
                    <Route path={'/contacts'} component={ContactMe}/>
                </Switch>
            </div>
        </AppStyled>
    );
};

export default withRouter(App);
