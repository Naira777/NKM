import styled from "styled-components"


export const Box = styled.div`

display: flex;
flex-direction: row;
justify-content: space-around;
margin-top: -160px;
color: #ffffff;
`

export const T = styled.div`

margin-top: 30px;
font-size: 35px;
font-weight: 600;
transition: transform 2s;
transform:${props => props.mode? 'translate(-0px,300px)' : ''} ;
  
@media (max-width: 768px) {
    font-size: 24px;
   
      transform:${props => props.mode? 'translate(50px,300px)' : ''} ;
       
         }
}

`

export const T3 = styled.div`


 font-size: 30px;
font-weight: 600;

@media (max-width: 768px) {
   
    font-size: 25px;
}

`

export const TextB = styled.div`


font-size: 35px;
font-weight: 700;





`

export const Box1 = styled.div`
margin-bottom: 0px;
display: flex;
flex-direction: row;
justify-content: space-around;
margin-top: -30px;
color: #ffffff;

@media (max-width: 768px) {
  
    margin-bottom: -80px;
           
         }
`

export const T1 = styled.div`


font-size: 30px;
font-weight: 600;  
transition: transform 2s;
transform:${props => props.mode? 'translate(250px,250px)' : ''} ;
}

  
`

export const TextB1 = styled.div`


font-size: 40px;
font-weight: 700;


`
export const T11 = styled.div`


font-size: 20px;
font-weight: 600;
transition: transform 2s;
transform:${props => props.mode? 'translate(-260px,360px)' : ''} ;

@media (max-width: 768px) {
    font-size: 18px;
    
           
         }
`