import styled from "styled-components";
import { keyframes, css } from 'styled-components';

export const PicAnimation = keyframes`
 
  from {opacity: 0.1;}
  to {opacity: 1;}

`
export const Content = styled.img`

height: 100%;
width: 100%;

animation-name: ${PicAnimation};
animation-duration: 1s;
animation-iteration-count: 1; 

&:hover {
  //transform: rotate(360deg) scale(0.8);
  
 }
`;


export const All= styled.div`
display: flex;
flex-direction: row;
justify-content: space-between;

`;
export const Box1= styled.div`
height: 50px;
width: 50px;
background: white;
opacity: 0.9;
transform: translate(10px, -300px);

`;
export const Box2= styled.div`
height: 50px;
width: 50px;
background: white;
opacity: 0.9;
transform: translate(-10px, -300px);

`;
export const ArrowLeft= styled.svg`
margin-left: 15px;
margin-top: 5px;

`;
export const ArrowRight= styled.svg`
margin-left: 15px;
margin-top: 5px;

`;
