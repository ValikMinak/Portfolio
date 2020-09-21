import React from 'react';
import {SidebarStyled} from "../../Styled/SidebarStyled";
import {NavLink, withRouter} from "react-router-dom";

import OpenCloseSidebar from "./OpenCloseSidebar/OpenCloseSidebar";
import {ContactMe, Home, Portfolio, Skills} from "../../SVG";


const Sidebar = ({isShowSidebar,setIsShowSidebar,activeColor,setActiveColor,activeSlide,setActiveSlide,location}) => {
    const setActivePortfolio = () => {
        setActiveColor("#FFDF8A")
        setActiveSlide(true)
    };
    const setActive=()=>{
        setActiveColor("red")
        setActiveSlide(false)
    }
    const pathname=location.pathname
    return (
        <>
            <SidebarStyled isShowSidebar={isShowSidebar} activeColor={activeColor} pathname={pathname}>
                <NavLink exact={true} activeClassName="active" onClick={setActive} to={'/'}><Home/>Home</NavLink>
                <NavLink activeClassName="active"
                         isActive={()=>{
                             if(activeSlide){
                                 return true
                             }
                         }}
                         onClick={setActivePortfolio} to={`/portfolio/pastapizza`}><Portfolio/>Portfolio</NavLink>
                <NavLink activeClassName="active" onClick={setActive} to={'/skills'}><Skills/>Skills</NavLink>
                <NavLink activeClassName="active" onClick={setActive} to={'/contacts'}><ContactMe/>Contact Me</NavLink>
                <OpenCloseSidebar callback={() => setIsShowSidebar(prev => !prev)} pathname={pathname} isShowSidebar={isShowSidebar}/>
            </SidebarStyled>


        </>
    );
};

export default withRouter(Sidebar);
