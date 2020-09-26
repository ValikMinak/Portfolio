import styled from "styled-components"

export const MainPageStyled=styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 100vw;
  height: 100vh;
  font-family: Tokyo ,sans-serif;
  transition: all .3s;
  padding-right:${({ isShowSidebar })=>isShowSidebar?"0":"161px"};
  // padding-right:${({ isShowSidebar })=>isShowSidebar?"0":"161px"};
  opacity:0;
  animation: animAppear 1.5s forwards;
  .mainPage {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
  &__logo {
    width: 210px;
    height: 210px;
    background-color: red;
    border-radius: 50%;
    margin-bottom:100px;
  }

  &__position {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top:20px;
    width:${({ activeLanguage })=>activeLanguage==="ru"?"400px":"300px"};
    & h3{
    width:100%;
    }
  }
}
@keyframes animAppear {
    to{
    opacity:1;
    }
    }
      @media (max-width: 820px) {
        align-items: flex-start;
    }
   @media (max-width: 420px) {
        padding-right:0;
        align-items: flex-end;
        .mainPage{
        padding-right:220px;
        & h1{
        font-size:18px;
        }
        &__logo {
    width: 180px;
    height: 180px;
    margin-bottom:40px;
    }
        &__position {
        font-size:12px;
        width:230px;
        margin-top:0;
        }
        }
    }
   
`
