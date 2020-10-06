import React from 'react';
import styled from 'styled-components';

const ScrollableBase = styled.div<{ height: string }>`
  width: 100%;
  height: ${(props) => props.height};
  overflow-x: scroll;
  overflow-y: hidden;

  &::before {
    content: '';
    display: block;
    width: 200%;
    height: 0.1rem;
  }

  &::-webkit-scrollbar {
    height: 0.9rem;
  }

  &::-webkit-scrollbar-track {
    background-color: #f2f2f2;
  }

  &::-webkit-scrollbar-thumb {
    background-color: #ff3b30;
  }
`;

type ScrollabeProps = {
  height: string;
  onScroll: (value: number) => void;
};

const Scrollable: React.FC<ScrollabeProps> = ({ height, onScroll }) => {
  const handleOnScroll = (e: any) => {
    onScroll(
      e.target.scrollLeft / (e.target.scrollWidth - e.target.clientWidth)
    );
  };
  return <ScrollableBase height={height} onScroll={handleOnScroll} />;
};

export default Scrollable;
