import styled from "styled-components"
import {Contact} from "../SVG/ContactMe";

export const ContactMeStyled = styled.div`
width:100%;
height:100vh;
background-color:black;
font-family: Tokyo ,sans-serif;
color:white;
display:grid;
grid-template-columns:6fr 6fr;
position:absolute;
justify-items:center;
align-items:center;

.contact{
&__title{
flex-direction:column;
width:400px;
}
&__image{
align-self:start;
}
}
`
