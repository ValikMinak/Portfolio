import React from "react";
import styled from "styled-components"
import {SwordLanguage} from "../../../SVG";


const ChangeLanguageStyled = styled.div`
width:200px;
height:100px;
position:absolute;
right:100px;
top:75px;
cursor:pointer;
transition: all .3s;
z-index:2;

@media (max-width: 820px) {
   right:350px;
    }
    @media (max-width: 540px) {
    right:0px;
    }
    @media (max-width: 420px) {
   right:-40px;
   top:25px;
   & svg{
   width:150px;
   height:40px;
   }
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
