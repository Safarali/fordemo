import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Name = styled.h4`
  font-size: 3.2rem;
  line-height: 4.8rem;
  color: #ff2d55;
  font-weight: 700;
`;

export const Slogan = styled.h1`
  font-size: 10rem;
  line-height: 11rem;
  color: #000000;
  font-weight: 700;
`;

export const PromoText = styled.p`
  font-size: 2.5rem;
  line-height: 3.5rem;
  color: #999999;
  font-weight: 300;
`;

export const ShippingDate = styled.span`
  font-size: 1.4rem;
  color: #ff3b30;
  font-weight: 300;
`;

export const Cost = styled.h3`
  font-size: 5rem;
  line-height: 5.6rem;
  color: #cccccc;
  font-weight: 700;
`;

export const BuyNowButton = styled(Link)`
  text-decoration: none;
  font-size: 2rem;
  line-height: 3rem;
  color: #ff3b30;
  font-weight: 600;
  font-family: 'Poppins';
`;
