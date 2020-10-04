import React from 'react';
import styled, { css } from 'styled-components';

type InputBaseProps = {
  isError: boolean;
  disabled: boolean;
};
const InputBase = styled.input.attrs((props) => ({
  autoComplete: 'off',
}))<InputBaseProps>`
  height: 5.4rem;
  width: 100%;
  font-size: 1.4rem;
  color: #000000;
  border: 0.1rem solid #cccccc;
  padding-left: 3.253rem;

  &:focus {
    border: 0.1rem solid #707070;
  }

  ${(props) =>
    props.isError &&
    css`
      border: 0.1rem solid #ff3b30;
      &:focus {
        border: 0.1rem solid #ff3b30;
      }
    `}
`;

const LabelBase = styled.label`
  display: block;
  font-size: 1.6rem;
  line-height: 2.3rem;
  color: #000000;
`;

type LabelProps = {
  children: string;
  htmlFor: string;
};
export const Label: React.FC<LabelProps> = ({ children, htmlFor }) => {
  return <LabelBase htmlFor={htmlFor}>{children}</LabelBase>;
};

type InputProps = {
  type: 'password' | 'text' | 'email';
  id: string;
  isError: boolean;
  disabled: boolean;
  placeholder: string;
  value: string;
  onChange: (value: string) => void;
};

const Input: React.FC<InputProps> = ({
  type,
  isError,
  disabled,
  placeholder,
  id,
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
      disabled={disabled}
      value={value}
      onChange={handleOnChange}
      id={id}
    />
  );
};

export default Input;
