import React, { Component } from "react";
import styled from "styled-components";

const Nav = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-around;
  height: 80px;
`;

const Link = styled.a`
  font-family: Circular, Helvetica Neue, Helvetica, Arial, sans-serif;
  font-size: 14px;
  line-height: 24px;
  font-weight: 600;
  color: #383838;
  text-decoration: none;
`;

export default function() {
  return (
    <Nav>
      <Link href="#">Become a host</Link>
      <Link href="#">Help</Link>
      <Link href="#">Sign Up</Link>
      <Link href="#">Log In</Link>
    </Nav>
  );
}
