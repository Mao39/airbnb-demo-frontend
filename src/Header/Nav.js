import React from 'react';
import styled from 'styled-components';

const Nav = styled.nav`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  padding: 12px 0;
`;

const Link = styled.a`
  margin-left: 20px;
  font-family: Circular, Helvetica Neue, Helvetica, Arial, sans-serif;
  font-size: 14px;
  line-height: 24px;
  font-weight: 600;
  color: #383838;
  text-decoration: none;
`;

export default function () {
  return (
    <Nav>
      <Link href="#">Become a host</Link>
      <Link href="#">Help</Link>
      <Link href="#">Sign Up</Link>
      <Link href="#">Log In</Link>
    </Nav>
  );
}
