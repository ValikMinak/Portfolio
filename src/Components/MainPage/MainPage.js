import React from 'react';
import {MainPageStyled} from "../../Styled/MainPageStyled";
import {NunchucksLeft, NunchucksRight, Sword} from "../../SVG";

const MainPage = ({isShowSidebar}) => {
    return (
        <MainPageStyled isShowSidebar={isShowSidebar}>
            <div className="mainPage">
                <div className="mainPage__logo"></div>
                <h1>Valentyn Minakov</h1>
                <div className="mainPage__position">
                    <NunchucksLeft/>
                    <h3 className="mainPage__title">Junior React Developer</h3>
                    <Sword/>
                    <NunchucksRight/>
                </div>
            </div>
        </MainPageStyled>
    );
};

export default MainPage;
