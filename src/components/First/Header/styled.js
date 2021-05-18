import styled from "styled-components";
import { keyframes, css } from 'styled-components';


export const Anima = keyframes `

  from,15% {transform: rotateY(0deg) scale(1);
    filter: brightness(20%) contrast(20%) blur(1px);
    color: blue;
    } 
  20%,35%  { transform: rotateY(-70deg) scale(1.5) ; 
    filter: brightness(40%) contrast(40%) blur(2px);
    }
  40%,55%  { transform: rotateY(-144deg) scale(1.6) ;
    filter: brightness(60%);}
  60%,75%  { transform: rotateY(-216deg) scale(1.5) ; 
    filter: brightness(80%);}
  80%,95%  { transform: rotateY(-280deg) scale(1.3)  ;
    filter: brightness(90%); }  
  to       { transform: rotateY(-360deg) scale(1)  ;
    filter: brightness(100%) contrast(50%); }
  


`
export const AnimaText = keyframes `

  from,15% {color: linear-gradient(to right top, #82e6f6, #85d5e5, #86c4d3, #86b3c0, #85a3ad);
    } 
  20%,35%  {
    }
  40%,55%  {color: linear-gradient(to right top, #82e6f6, #8be1f1, #93dcec, #9ad7e7, #a0d2e1);}
  60%,75%  {    }
  80%,95%  {   }  
  to       {  color: linear-gradient(to right top, #82e6f6, #61b2c2, #42808f, #25525e, #0a2831); }
  


`
export const Content = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-top: 60px;

`;
export const LogoBox = styled.div`
animation-name: ${Anima};
animation-duration: 1s;
animation-iteration-count: 1; 

`;
export const Logo = styled.div`
display: flex;
flex-direction: column;
align-items: center;
justify-content: flex-end;

background-image: background-image: linear-gradient(to left top, #cbe7f0, #8ac7e7, #4ca5e1, #0d80d8, #1a57c6);
height: 60px;
width: 150px;
border-radius: 50%;
background-color: #71D0D8;

`;

export const Text = styled.div`
 
 font-size: 22px;
 font-weight: 700;
 color: #FCA83C;
 text-shadow: 3px 3px 10px #C3C9D4;

animation-name: ${AnimaText};
animation-duration: 0.5s;
animation-iteration-count: 1; 

`;

export const T = styled.div`
 
 font-size: 22px;
font-weight: 700;
 color: black;
 text-shadow: 0px 5px 1px #FCD67C;



animation-name: ${AnimaText};
animation-duration: 1s;
animation-iteration-count: 1; 
`;




export const B = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
margin-bottom: 8px;
`;


export const Box = styled.div`
display: flex;

`;

export const Box1 = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
transform: translate(-65px, 6px);
`;
export const Pic = styled.img`
width: 100px;
height: 45px;
border-radius: 90%;
`;

export const SVG = styled.svg`
transform: translate(48px, -4px);
`;
