import styled from 'styled-components';
import logo from '../images/logo.svg';
import logoGray from '../images/logo_gray.svg';

export const Logo = styled.img.attrs((props) => ({
  src: logo,
}))`
  height: 3.878rem;
  width: auto;
`;

export const LogoBig = styled.img.attrs((props) => ({
  src: logo,
}))`
  height: 35.9rem;
  width: auto;
`;

export const LogoBigGray = styled.img.attrs((props) => ({
  src: logoGray,
}))`
  height: 35.9rem;
  width: auto;
`;
