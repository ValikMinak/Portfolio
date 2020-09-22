import React from 'react';
import {SidebarStyled} from "../../Styled/SidebarStyled";
import {NavLink, withRouter} from "react-router-dom";

import OpenCloseSidebar from "./OpenCloseSidebar/OpenCloseSidebar";
import {ContactMe, Home, Portfolio, Skills} from "../../SVG";


const Sidebar = ({isShowSidebar,setIsShowSidebar,activeColor,setActiveColor,activeSlide,setActiveSlide,location,activeLanguage}) => {
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
                <NavLink exact={true} activeClassName="active" onClick={setActive} to={'/'}><Home/>{activeLanguage==="ru"?"Домой":"Home"}</NavLink>
                <NavLink activeClassName="active"
                         isActive={()=>{
                             if(activeSlide){
                                 return true
                             }
                         }}
                         onClick={setActivePortfolio} to={`/portfolio/pastapizza`}><Portfolio/>{activeLanguage==="ru"?"Портфолио":"Portfolio"}</NavLink>
                <NavLink activeClassName="active" onClick={setActive} to={'/skills'}><Skills/>{activeLanguage==="ru"?"Навыки":"Skills"}</NavLink>
                <NavLink activeClassName="active" onClick={setActive} to={'/contacts'}><ContactMe/>{activeLanguage==="ru"?"Контакты":"Contact Me"}</NavLink>
                <OpenCloseSidebar callback={() => setIsShowSidebar(prev => !prev)} pathname={pathname} isShowSidebar={isShowSidebar}/>
            </SidebarStyled>


        </>
    );
};

export default withRouter(Sidebar);
