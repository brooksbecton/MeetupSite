import Link from "gatsby-link";
import React from "react";
import styled from "styled-components";

import PageContainer from "./../PageContainer";

const TopNav = () => (
  <Nav>
    <div style={{ padding: "0px 20%  0px 20%" }}>
      <NavLink to="/">💻</NavLink>
      <NavLink to="/events">Events</NavLink>
      <NavLink to="/suggestions">Suggestions</NavLink>
      <NavLink to="/About">About</NavLink>
    </div>
  </Nav>
);

const Nav = styled("nav")`
  color: black;
  padding: 1%;
`;

const NavLink = styled(Link)`
  color: black;
  text-decoration: none;
  padding-right: 5%;
`;

export default TopNav;
