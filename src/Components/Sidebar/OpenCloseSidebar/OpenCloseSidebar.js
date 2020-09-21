import React from 'react'
import styled from 'styled-components'
import {Trident} from "../../../SVG";

const OpenCloseSidebarStyled = styled.div`
position:absolute;
left:190px;
top:40px;
cursor:pointer;
transition: all .3s;
z-index:2;

svg path{
fill:${({ pathname })=>pathname==="/contacts"?"white":"#3F3F3F"};
}
`

const OpenCloseSidebar = ({ callback,isShowSidebar,pathname }) => {
    return (
        <OpenCloseSidebarStyled onClick={()=>callback(prev=>!prev)} isShowSidebar={isShowSidebar} pathname={pathname} >
            <Trident isShowSidebar={isShowSidebar}/>
        </OpenCloseSidebarStyled>
    )
}


export default OpenCloseSidebar
