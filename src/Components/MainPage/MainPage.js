import React from 'react';
import {MainPageStyled} from "../../Styled/MainPageStyled";
import {NunchucksLeft, NunchucksRight, Sword} from "../../SVG";
import ChangeLanguage from "./SwordLanguage/ChangeLanguage";

const MainPage = ({isShowSidebar, activeLanguage, setActiveLanguage}) => {
    return (
        <MainPageStyled isShowSidebar={isShowSidebar}>
            <div className="mainPage">
                <div className="mainPage__logo"></div>
                {activeLanguage === "en"
                    ? <h1>Valentyn Minakov</h1>
                    : <h1>Валентин Минаков</h1>
                }
                <div className="mainPage__position">
                    <NunchucksLeft/>
                    {activeLanguage === "en"
                        ? <h3 className="mainPage__title">Junior React Developer</h3>
                        : <h3 className="mainPage__title">Начинающай Реакт Разработчик</h3>}
                    <Sword/>
                    <NunchucksRight/>
                </div>
            </div>
            <ChangeLanguage activeLanguage={activeLanguage} callback={setActiveLanguage}/>
        </MainPageStyled>
    );
};

export default MainPage;
