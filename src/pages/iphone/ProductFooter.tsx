import React from 'react';
import styled from 'styled-components';
import GalleryController from './GalleryController';

import { Cost, BuyNowButton } from '../../components/ProductPageElements';

const ProductFooterBase = styled.section`
  grid-column: 1/ 2;
  grid-row: 2 / 3;
`;

const ProductCTA = styled.div``;

const ProductCost = styled(Cost)`
  position: absolute;
  top: 78.7rem;
`;

const ProductBuyNowButton = styled(BuyNowButton)`
  position: absolute;
  top: 84.7rem;
`;

type ProductFooterProps = {
  scrolledPoint: number;
  onScroll: (scrolledPoint: number) => void;
};

const ProductFooter: React.FC<ProductFooterProps> = ({
  scrolledPoint,
  onScroll,
}) => {
  return (
    <ProductFooterBase>
      <ProductCTA>
        <ProductCost>From $699</ProductCost>
        <ProductBuyNowButton to="#">Buy Now</ProductBuyNowButton>
      </ProductCTA>
      <GalleryController onScroll={onScroll} scrolledPoint={scrolledPoint} />
    </ProductFooterBase>
  );
};

export default ProductFooter;
