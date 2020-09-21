import styled from "styled-components"

export const SidebarStyled = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  border-right: 10px solid ${({ pathname })=>pathname==="/contacts"?"white":"#3F3F3F"};
  padding: 20px;
  transform:translateX(${({isShowSidebar}) => isShowSidebar ? "0" : "-137px"});
  transition:.3s;
  font-family: 'Tokyo', sans-serif;
  z-index:2;
  .active{
  & svg{
        & path{
            fill:${({ activeColor })=>activeColor};
            }
        }
        color:${({ activeColor })=>activeColor};
  }
  & a{
    margin-top: 85px ;
    display: flex;
    align-items: center;
    flex-direction: column;
    color:${({ pathname })=>pathname==="/contacts"?"white":"#3F3F3F"};
    & svg{
    transition:1s;
    margin-bottom:10px;
    & path{
            fill:${ ({ pathname }) =>pathname==="/contacts"?"white":"#3F3F3F"};
            }
    }
     &:hover{
     color:${({ activeColor })=>activeColor};
        & svg{
            cursor: pointer;
        & path{
            fill:${({ activeColor })=>activeColor};
            }
        }
  }
  }
  & :nth-child(1){
    margin-top: 10px;
  }

`
