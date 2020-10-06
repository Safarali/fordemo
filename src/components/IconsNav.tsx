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
`;

type NavIconsBaseProps = {
  animate?: boolean;
  direction: 'row' | 'column';
};

export const IconsNavBase = styled.nav<NavIconsBaseProps>`
  display: flex;
  flex-direction: ${(props) => props.direction};
  justify-content: space-between;
  align-items: center;
`;

type IconsNavProps = {
  direction: 'column' | 'row';
  animate?: boolean;
};
const IconsNav: React.FC<IconsNavProps> = ({ direction, animate }) => {
  return (
    <IconsNavBase direction={direction} animate={animate}>
      <NavLink to="/iphone">
        <NavIcon src={iphoneIcon} />
      </NavLink>
      <NavLink to="/macbook-pro" activeClassName="active">
        <NavIcon src={macbookIcon} />
      </NavLink>
      <NavLink to="/apple-watch" activeClassName="active">
        <NavIcon src={watchIcon} />
      </NavLink>
    </IconsNavBase>
  );
};

export default IconsNav;
