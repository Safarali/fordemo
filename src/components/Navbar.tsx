import React, { useState } from 'react';
import { NavLink, Link } from 'react-router-dom';
import styled from 'styled-components';
import { Logo } from './Logo';

type NavProps = {
  exact?: boolean;
  to?: string;
  showAll?: boolean;
};

const AnimatedLogoWrapper = styled.div<NavProps>`
  display: flex;
  align-items: center;
  justify-content: center;

  position: absolute;
  height: 10rem;
  width: ${(props) => (props.showAll ? '10rem' : '100%')};
  background-color: #000000;
  transition: all 0.3s;
`;

const NavbarLogo = styled(Logo)`
  transition: transform 0.5s;
  &:hover {
    transform: scale(1.2);
  }
`;

const Nav = styled(NavLink)<NavProps>`
  text-decoration: none;
  font-size: 2rem;
  line-height: 3rem;
  font-family: 'Poppins';
  font-weight: 300;
  color: #707070;

  &:hover {
    color: #000000;
  }

  &.active {
    color: #000000;
    font-weight: 600;
  }
`;

const NavButton = styled(Link)`
  text-decoration: none;
  font-size: 2rem;
  font-family: 'Poppins';
  font-weight: 300;
  color: #ffffff;
  height: 4.6rem;
  width: 15.6rem;
  background-color: #5ac8fa;
  border-radius: 2.3rem;

  display: flex;
  align-items: center;
  justify-content: center;
`;

const NavbarBase = styled.header`
  height: 100px;
  width: 100vw;
  padding-right: 10rem;

  display: grid;
  grid-template-columns: max-content 1fr repeat(4, max-content);
  align-items: center;
  column-gap: 5.4rem;
`;

type NavbarProps = {
  showAll?: boolean;
};
const Navbar: React.FC<NavbarProps> = ({ showAll }) => {
  return (
    <NavbarBase>
      <AnimatedLogoWrapper showAll={showAll}>
        <Link to="/coming-products">
          <NavbarLogo />
        </Link>
      </AnimatedLogoWrapper>
      <div></div>
      <div></div>
      <Nav exact to="/iphone">
        iPhone
      </Nav>
      <Nav exact to="/macbook-pro">
        Macbook Pro
      </Nav>
      <Nav exact to="/apple-watch">
        Watch
      </Nav>
      <NavButton to="#">Notify me</NavButton>
    </NavbarBase>
  );
};

export default Navbar;
