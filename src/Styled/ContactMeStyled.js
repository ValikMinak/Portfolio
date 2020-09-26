import styled from "styled-components"

export const ContactMeStyled = styled.div`
width:100%;
height:100vh;
background-color:black;
font-family: Tokyo ,sans-serif;
display:grid;
grid-template-columns:6fr 6fr;
position:absolute;
justify-items:center;
align-items:center;
opacity:0;
animation: animAppear 1s forwards;
a{
color:#D1D0D0;
transition:all .3s;
&:hover{
color:white;
}
}
.contact{
&__title{
display:flex;
flex-direction:column;
width:100%;
margin-left:${({ isShowSidebar })=>isShowSidebar?"385px":"110px"};
font-size:24px;
transition: all .3s;
}
&__image{
align-self:start;
}
}
@keyframes animAppear {
    to{
    opacity:1;
    }
    }
    
        @media (max-width: 420px) {
        display:flex;
        flex-direction:column-reverse;
        .contact{
        &__title{
        font-size:16px;
        grid-row: div 2;
        margin-left:110px;
        margin-bottom:150px;
        }
        &__image{
        align-self:center;
        grid-row: div 1;
        width:300px;
        & img{
        width:100%;
        }
        }
        }
        }
`
