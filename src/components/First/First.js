import React from 'react'
import Gallery from './Gallery/Gallery'
import HeaderFirst from './Header/HeaderFirst'
import NavBar from './NavBar/NavBar'
import * as Styled from "./styled"

const First = () => {

return  <Styled.Content>  
   
    <Styled.Box> 
     <HeaderFirst />
     <NavBar />
    </Styled.Box>

    <Gallery /> 
   </Styled.Content>
  
}
export default First;