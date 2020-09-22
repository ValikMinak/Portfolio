import React from "react";
import styled from "styled-components"
import {SwordLanguage} from "../../../SVG";


const ChangeLanguageStyled = styled.div`
width:200px;
height:100px;
position:absolute;
right:70px;
top:100px;
cursor:pointer;
transition: all .3s;
z-index:2;

svg {

}
`

const ChangeLanguage = ({ callback,activeLanguage }) => {
    return (
        <ChangeLanguageStyled onClick={()=>callback(prev=>prev==="ru"?"en":"ru")} >
            <SwordLanguage width={250} height={50} activeLanguage={activeLanguage}/>
        </ChangeLanguageStyled>
    )
}


export default ChangeLanguage
