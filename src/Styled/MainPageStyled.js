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
  }
}
@keyframes animAppear {
    to{
    opacity:1;
    }
    }
`
