import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import IconsNav from '../components/IconsNav';
import { LogoBigGray } from '../components/Logo';

const WelcomeBase = styled.div`
  width: 100vw;
  height: 108rem;
  display: grid;
  grid-template-rows: max-content max-content;
  justify-items: center;
`;

const Main = styled.main`
  height: 98rem;
  width: calc(100% - 20rem);
  background: transparent linear-gradient(90deg, #f2f2f2 0%, #ffffff00 100%) 0%
    0% no-repeat padding-box;
  position: relative;
  text-decoration: none;
`;

const MainLogo = styled(LogoBigGray)`
  position: absolute;
  top: 20.061rem;
  left: 50%;
  transform: translateX(-50%);
`;

const MainText = styled.h1`
  font-size: 7.9rem;
  font-weight: 700;
  color: #000000;
  line-height: 9.5rem;

  position: absolute;
  top: 35.6rem;
  left: 50%;
  transform: translateX(-50%);
`;

const MainLink = styled(Link)`
  text-decoration: none;
  font-size: 2rem;
  font-weight: 400;
  font-family: 'Poppins';
  color: #5ac8fa;
  line-height: 3rem;
  position: absolute;
  top: 62.3rem;
  left: 50%;
  transform: translateX(-50%);
`;

const HorizontalIconsNav = styled.div`
  width: 17rem;
  position: absolute;
  top: 80.3rem;
  left: 50%;
  transform: translateX(-50%);
`;
export const Welcome = () => {
  return (
    <WelcomeBase>
      <Navbar showAll={true} />
      <Main>
        <MainLogo />
        <MainText>Welcome to Apple</MainText>
        <MainLink to="#">See our Products</MainLink>
        <HorizontalIconsNav>
          <IconsNav direction="row" animate={true} />
        </HorizontalIconsNav>
      </Main>
    </WelcomeBase>
  );
};
