import React, { useState } from 'react';
import styled from 'styled-components';
import Navbar from '../../components/Navbar';
import ProductMain from './ProductMain';
import ProductFooter from './ProductFooter';
import iphoneBackLarge from '../../images/iphone-back-large.png';
import iphoneFrontLarge from '../../images/iphone-front-large.png';

const PageBase = styled.div`
  width: 100vw;
  height: 108rem;
  display: grid;
  grid-template-rows: max-content max-content;
  justify-items: end;
`;

const PageContent = styled.div`
  height: 98rem;
  width: calc(100% - 10rem);

  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: max-content 1fr;
  position: relative;
`;

const ProductGallery = styled.section`
  grid-column: 2 / 3;
  grid-row: 1 / span 2;
`;

const Iphone = () => {
  const [scrolledPoint, setScrolledPoint] = useState(0);
  const handleOnScroll = (scrolledPoint: number) => {
    setScrolledPoint(scrolledPoint);
  };
  return (
    <PageBase>
      <Navbar showAll={true} />
      <PageContent>
        <ProductMain />
        <ProductGallery></ProductGallery>
        <ProductFooter
          onScroll={handleOnScroll}
          scrolledPoint={scrolledPoint}
        />
      </PageContent>
    </PageBase>
  );
};

export default Iphone;
