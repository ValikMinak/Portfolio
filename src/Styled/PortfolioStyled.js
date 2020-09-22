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
  padding-right:${({ isShowSidebar })=>isShowSidebar?"0":"161px"};
  animation: animAppear 1.5s forwards;
  opacity:0;
  .portfolio{
        &__page{
        display: flex;
        align-items: center;
        flex-direction:column;
        
            &Project{
                transition:all 1s;
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
            grid-template-columns: repeat(2fr);
            grid-row-gap:0px;
            align-self:start;
            color:${({color}) => color};
            margin-top:${({ isShowSidebar })=>isShowSidebar?"150px":"135px"};
            transition:all .3s;
  
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
        top:50%;
        right:20px;
            a {
                display:block;
                background-color:${({color}) => color};
                margin-top:15px;
                width:6px;
                height:6px;
                border-radius:50%;
                transition:all .3s;
                opacity:.5;
                }
            .active{
            opacity:1;
            transform:scale(2);
            position:relative;
            &::before{
             content:'${({name})=>name}';
             position: absolute;
             right: 9px;
             top: -3px;
             height: 6px;
             font-size: 7px;
             border-radius: 30px;
             background-color: ${({ color })=>color};
             padding: 3px;
            
            }
                }
            }
        &__text{
            width:500px;
            height:200px;
            position:absolute;
            left:60px;
            top:0px;
            font-size:12px;
            opacity:0;
            transition:.3s;
        }
        &__about{
            display: flex;
            justify-content: center;
            align-items: center;
            position:relative;
            margin-top:100px;
            width:50px;
            height:50px;
            border-radius:50%;
            background-color:${({color}) => color};
            font-size:22px;
            cursor:pointer;
            &:hover .portfolio__text{
            opacity:1;
            }
            }
            
    }
    @keyframes animAppear {
    to{
    opacity:1;
    }
    }
  
`
