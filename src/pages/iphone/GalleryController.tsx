import React from 'react';
import styled from 'styled-components';
import Scrollable from '../../components/Scrollable';
import iphoneBackSmall from '../../images/iphone-back-small.png';
import iphoneFrontSmall from '../../images/iphone-front-small.png';

type ImageProps = {
  opacity: number;
};
const Image = styled.img<ImageProps>`
  opacity: ${(props) => props.opacity};
  heigh: 20.6rem;
  width: auto;
`;

const GalleryControllerBase = styled.div`
  display: grid;
  grid-template-columns: 10.263rem 10.263rem;
  grid-template-rows: max-content max-content;
  column-gap: 4.24rem;
  row-gap: 3.25rem;
  justify-items: center;

  position: absolute;
  top: 66.9rem;
  left: 72.3rem;
`;

const GalleryScrollable = styled.div`
  grid-row: 2/3;
  grid-column: 1 / 3;
  width: 20rem;
`;

type GalleryControllerProps = {
  onScroll: (scrolledPoint: number) => void;
  scrolledPoint: number;
};
const GalleryController: React.FC<GalleryControllerProps> = ({
  onScroll,
  scrolledPoint,
}) => {
  return (
    <GalleryControllerBase>
      <Image src={iphoneFrontSmall} opacity={1.2 - scrolledPoint} />
      <Image src={iphoneBackSmall} opacity={0.2 + scrolledPoint} />
      <GalleryScrollable>
        <Scrollable onScroll={onScroll} height={`.9rem`} />
      </GalleryScrollable>
    </GalleryControllerBase>
  );
};

export default GalleryController;
