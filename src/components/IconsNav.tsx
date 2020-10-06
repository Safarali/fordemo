import React from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import iphoneIcon from '../images/icon-iphone.svg';
import macbookIcon from '../images/icon-macbook.svg';
import watchIcon from '../images/icon-watch.svg';

const NavIcon = styled.img`
  transition: all 0.3s;
  &:hover {
    transform: scale(1.2);
    filter: contrast(1%);
  }

  &.active {
    filter: contrast(1%);
  }
`;

type NavIconsBaseProps = {
  animate?: boolean;
  direction: 'row' | 'column';
};

export const NavIconsBase = styled.nav<NavIconsBaseProps>`
  width: 17rem;
  height: 29.2rem;
  display: flex;
  flex-direction: ${(props) => props.direction};
  justify-content: space-between;
`;

type IconsNavProps = {
  direction: 'column' | 'row';
  animate?: boolean;
  Wrapper: any;
};
const IconsNav: React.FC<IconsNavProps> = ({ direction, animate, Wrapper }) => {
  return (
    <Wrapper direction={direction} animate={animate}>
      <NavLink to="/iphone">
        <NavIcon src={iphoneIcon} />
      </NavLink>
      <NavLink to="/macbook-pro">
        <NavIcon src={macbookIcon} />
      </NavLink>
      <NavLink to="/apple-watch">
        <NavIcon src={watchIcon} />
      </NavLink>
    </Wrapper>
  );
};

export default IconsNav;
