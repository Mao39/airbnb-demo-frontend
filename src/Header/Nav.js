import React, { Component } from "react";
import styled from "styled-components";

export const Nav = styled.nav`
  display: flex;
  justify-content: space-around;
`;

export const Link = styled.a`
  font-family: Circular, Helvetica Neue, Helvetica, Arial, sans-serif;
  font-weight: 400;
  font-size: 14px;
  line-height: 24px;
  line-height: 80px;
  color: #383838;
  text-decoration: none;
`;

export default function() {
  return (
    <Nav>
      <Link href="./host">Become a host</Link>
      <Link href="./help">Help</Link>
      <Link href="./sign-up">Sign Up</Link>
      <Link href="./log-in">Log In</Link>
    </Nav>
  );
}
