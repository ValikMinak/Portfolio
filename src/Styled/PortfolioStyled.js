import styled from 'styled-components'


export const PortfolioStyled = styled.div`
  display: grid;
  grid-template-columns: 2fr 8fr 2fr;
  align-items: center;
  margin-left:120px;
  width: 100vw;
  height: 100vh;
  font-family: Tokyo , sans-serif ;
  transition: all .3s;
  padding-right:${({isShowSidebar}) => isShowSidebar ? "0" : "161px"};
  animation: animAppear 1.5s forwards;
  opacity:0;
  .portfolio{
        &__page{
        display: flex;
        align-items: center;
        flex-direction:column;
            &Project{
                transition:all 1s;
                width:500px;
                &:hover{
                 transform:scale(1.02);
               }
                & h1{
                        color:${({color}) => color};
                        height:50px;
                        display:block;
                        text-align:center;
                        }
                 & img{
                     width:100%;
                     height:100%;
                     border-radius:30px;
                    }
                }
                & .tetris {
                text-align:center;
                font-size:32px;
                    & :nth-child(1){
                        color:#E34E4E;}
                    & :nth-child(2){
                        color:#30D338;}
                    & :nth-child(3){
                        color:#DFD924;}
                    & :nth-child(4){
                        color:#245FDF;}
                    & :nth-child(5){
                        color:#DFAD24;}
                    & :nth-child(6){
                        color:#50E3E6;}
                }
            }
        &__technologies{     
            display:grid;
            align-self:start;
            grid-template-columns: repeat(2fr);      
            color:${({color}) => color};
            margin-top:${({isShowSidebar}) => isShowSidebar ? "150px" : "135px"};
            transition:all .3s;
               &List{
            display:grid;
            grid-template-columns: repeat(2fr); 
                }
  
  span {
        display: flex;
        justify-content: center;
        align-items: center;
        width:100px;
        height:100px;
        background-color:${({color}) => color};
        }
     }
     &__slider {
        display:flex;
        flex-direction:column;
        position:absolute;
        width:30px;
        top:50%;
        right:20px;
            a {
                display:block;
                background-color:${({color}) => color};
                margin-top:15px;
                width:10px;
                height:10px;
                border-radius:50%;
                transition:all .3s;
                opacity:.5;
                }
            .active{
            opacity:1;
            transform:scale(2);
            border-top-left-radius:0px;
            border-bottom-left-radius:0px;
            position:relative;
            &::before{
             content:'${({name}) => name}';
             position: absolute;
             right: 9px;
             top: 0px;
             height: 6px;
             font-size: 7px;
             border-top-left-radius: 30px;
             border-bottom-left-radius: 30px;
             background-color: ${({color}) => color};
             padding: 2px;
            
            }
                }
            }
        &__text{
            width:500px;
            margin-top:80px;
            font-size:12px;
            color:${({color}) => color};
        }
    }
    @keyframes animAppear {
    to{
    opacity:1;
    }
    }
    
    @media (max-width: 1040px) {
    display:flex;
    justify-content:space-evenly;
    flex-direction:column;
    .portfolio{
         &__technologies{
          justify-items:center;
          align-self:flex-end;
          &List{
          display:flex; 
                }
            }
         &__slider{
            position:static;
            justify-content:space-between;
            flex-direction:row;
            width:360px;
             }
    }
  }
      @media (max-width: 420px) {
            align-items:flex-end;
            margin-left:20px;
            font-size:10px;
            padding-bottom:100px;
            padding-right:200px;
            .portfolio{
             &__technologies{
             margin-top: 20px;
                    &List{
                    display:grid;
                    grid-template-columns: 4fr 4fr 4fr; 
                    grid-column-gap:20px;
                    grid-row-gap:20px;
                    margin-right:70px;
                    & svg {
                    width:50px;
                    height:50px;
                    }
                }
            }
             &__slider{
                width:200px;
                margin-right:30px;
                a{ 
                margin-top:0px;
                }
                         }
            &__text{
            width:310px;
            margin-top:25px;
            font-size:10px;
            }
             &__page{
             h1{
             height:20px;
             }
                &Project{
                    width:300px;
                    height: 175px;
                    & img{
                         width:100%;
                    }
                   
                 }
            }
`
