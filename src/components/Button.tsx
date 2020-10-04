import React from 'react';
import styled, { css } from 'styled-components';

export const ButtonBase = styled.button`
  height: 5.4rem;
  padding: 0 5.6rem;
  font-size: 1.4rem;
  font-weight: 600;
  color: #ffffff;
  background-color: #000000;
  border: none;
  cursor: pointer;

  ${(props) =>
    props.disabled &&
    css`
      background-color: #cccccc;
      color: #707070;
      cursor: default;
    `}
`;

type ButtonProps = {
  disabled: boolean;
  children: string;
  onClick: () => void;
};

const Button: React.FC<ButtonProps> = ({ disabled, children, onClick }) => {
  return (
    <ButtonBase onClick={onClick} disabled={disabled}>
      {children}
    </ButtonBase>
  );
};

export default Button;
