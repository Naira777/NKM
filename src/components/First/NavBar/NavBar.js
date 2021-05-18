import React from "react";
import * as Styled from "./styled";
import {  NavLink } from "react-router-dom";


const NavBar = () => {
  return (
 
      <Styled.Box>
        <Styled.Link>
          <NavLink
            to={"/home"}
            activeStyle={{ color: "#FCA83C" }}
            style={{ color: "black", textDecoration: "none" }}
          >
            HOME
          </NavLink>
        </Styled.Link>
        <Styled.Link>
          <NavLink
            to={"/about"}
            activeStyle={{ color: "#FCA83C" }}
            style={{ color: "black", textDecoration: "none" }}
          >
            ABOUT
          </NavLink>
        </Styled.Link>

        <Styled.Link>
          <NavLink
            to={"/foodmenu"}
            activeStyle={{ color: "#FCA83C" }}
            style={{ color: "black", textDecoration: "none" }}
          >
           OFFERS
          </NavLink>
        </Styled.Link>

    
        <Styled.Link>
          <NavLink
            to={"/contact"}
            activeStyle={{ color: "#FCA83C" }}
            style={{ color: "black", textDecoration: "none" }}
          >
            CONTACT
          </NavLink>
        </Styled.Link>

       
 
      </Styled.Box>

  
  );
};
export default NavBar;
