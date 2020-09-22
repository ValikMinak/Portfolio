import React, {useState} from "react";
import ChangeLanguage from "../MainPage/SwordLanguage/ChangeLanguage";


export const WithActiveLanguage=(Component)=>{
    return(props)=> {
        return(
            <Component {...props}/>
        )
    }
}

