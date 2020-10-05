import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { LogoBig } from '../components/Logo';
import Navbar from '../components/Navbar';

const Main = styled(Link)`
  height: 75.5rem;
  width: calc(100% - 20rem);
  background: transparent
    linear-gradient(180deg, rgba(90, 200, 250, 0.6) 0%, #ffffff00 75.5rem) 0% 0%
    no-repeat padding-box;
  position: relative;
  text-decoration: none;
`;

const ComingProductsBase = styled.div`
  width: 100vw;
  height: 108rem;
  display: grid;
  grid-template-rows: max-content max-content;
  justify-items: center;
  row-gap: 0.7rem;
`;
const AnimatedLogoBig = styled(LogoBig)`
  position: absolute;
  top: 19.6rem;
  left: 50%;
  transform: translateX(-50%);
`;

const AnimatedCounter = styled.div`
  height: 8rem;
  font-size: 6rem;
  font-family: 'Poppins', arial;
  font-weight: 600;
  letter-spacing: 3rem;
  color: #000000;
  display: flex;
  align-items: center;
  justify-content: center;

  position: absolute;
  top: 99%;
  left: 50%;
  transform: translate(calc(-50% + 2rem), -50%);
`;

const AnimatedText = styled.p`
  font-size: 2.5rem;
  color: #000000;
  font-weight: 400;
  position: absolute;
  top: 41.1rem;
  left: 50%;
  transform: translateX(-50%);
`;

export const ComingProducts = () => {
  return (
    <ComingProductsBase>
      <Navbar />
      <Main to="/welcome">
        <AnimatedLogoBig />
        <AnimatedText>New Products Coming This Summer</AnimatedText>
        <AnimatedCounter>2019</AnimatedCounter>
      </Main>
    </ComingProductsBase>
  );
};
