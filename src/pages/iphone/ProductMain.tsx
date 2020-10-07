import React from 'react';
import styled from 'styled-components';

import {
  Name,
  Slogan,
  PromoText,
  ShippingDate,
} from '../../components/ProductPageElements';
import { LogoBigGray } from '../../components/Logo';

const ProductMainBase = styled.main`
  padding-left: 7.6rem;
  height: 61.5rem;
  background: transparent linear-gradient(90deg, #f2f2f2 0%, #ffffff00 100%) 0%
    0% no-repeat padding-box;

  position: relative;
`;

const ProductName = styled(Name)`
  position: absolute;
  top: 8.4rem;
`;

const ProductSlogan = styled(Slogan)`
  width: 67.4rem;
  position: absolute;
  top: 14.9rem;
`;

const ProductPromoText = styled(PromoText)`
  width: 61.2rem;
  position: absolute;
  top: 42.3rem;
`;

const ProductShippingDate = styled(ShippingDate)`
  position: absolute;
  top: 50.6rem;
`;
const ProductLogoBigGray = styled(LogoBigGray)`
  height: 20rem;
  position: absolute;
  top: 10.7rem;
  left: 69.2rem;
`;

const ProductMain = () => {
  return (
    <ProductMainBase>
      <ProductName>iPhone</ProductName>
      <ProductSlogan>The ultimate iPhone</ProductSlogan>
      <ProductPromoText>
        The future is here. Join the iPhone Upgrade Program to get the latest
        iPhone - NOW!
      </ProductPromoText>
      <ProductShippingDate>Starts shipping MM-DD-YYYY</ProductShippingDate>
      <ProductLogoBigGray />
    </ProductMainBase>
  );
};

export default ProductMain;
