import React, { Component } from "react";
import styled from "styled-components";

export const Nav = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-around;
  height: 80px;
`;

export const Link = styled.a`
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
      <Link href="./host">Become a host</Link>
      <Link href="./help">Help</Link>
      <Link href="./sign-up">Sign Up</Link>
      <Link href="./log-in">Log In</Link>
    </Nav>
  );
}
