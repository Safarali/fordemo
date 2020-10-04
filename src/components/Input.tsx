import React, { ReactEventHandler } from 'react';
import styled, { css } from 'styled-components';

type InputBaseProps = {
  isError: boolean;
  disabled: boolean;
};
const InputBase = styled.input<InputBaseProps>`
  height: 5.424rem;
  width: 100%;
  font-family: 'Poppins';
  font-size: 1.4rem;
  color: #000000;
  border: 0.1rem solid #707070;
  padding-left: 3.253rem;
  &:focus {
    border: 0.1rem solid #000000;
  }

  ${(props) =>
    props.isError &&
    css`
      border: 0.1rem solid #ff3b30;
    `}
`;

type InputProps = {
  type: 'password' | 'text' | 'email';
  isError: boolean;
  isDisabled: boolean;
  placeholder: string;
  value: string;
  onChange: (value: string) => void;
};

const Input: React.FC<InputProps> = ({
  type,
  isError,
  isDisabled,
  placeholder,
  onChange,
  value,
}) => {
  const handleOnChange = (e: any) => {
    onChange(e.target.value);
  };
  return (
    <InputBase
      type={type}
      placeholder={placeholder}
      isError={isError}
      disabled={isDisabled}
      value={value}
      onChange={handleOnChange}
    />
  );
};

export default Input;
