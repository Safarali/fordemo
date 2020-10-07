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
  overflow-x: hidden;
`;

const PageContent = styled.div`
  height: 98rem;
  width: calc(100% - 10rem);

  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: max-content 1fr;
  position: relative;
`;

const ProductGalleryBase = styled.section`
  grid-column: 2 / 3;
  grid-row: 1 / span 2;
`;

const ProductImage = styled.img<{ opacity?: number; position?: string }>`
  position: relative;
  left: calc(0% + ${(props) => props.position});
  opacity: ${(props) => props.opacity};
  border-radius: 30px;
`;

const ProductGallery = styled.div`
  display: flex;
  width: 347px;
  position: absolute;
  top: 12.5rem;
  left: 120rem;
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
        <ProductGalleryBase>
          <ProductGallery>
            <ProductImage
              src={iphoneFrontLarge}
              position={`${scrolledPoint * 100}%`}
              opacity={1 - scrolledPoint}
            />
            <ProductImage
              src={iphoneBackLarge}
              position={`-${scrolledPoint * 100}%`}
              opacity={0 + scrolledPoint}
            />
          </ProductGallery>
        </ProductGalleryBase>
      </PageContent>
    </PageBase>
  );
};

export default Iphone;
