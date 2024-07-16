import styled, { css } from "styled-components";

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin-bottom: 20px;
`;

export const Input = styled.input`
  ${({ theme }) => css`
    padding: 10px;
    margin-bottom: 10px;
    border: none;
    border-radius: 4px;
    background: ${theme.white100};
    color: ${theme.gray400};
    backdrop-filter: blur(5px);
    box-shadow: inset 0 2px 4px rgba(0, 0, 0, 0.1);

    &::placeholder {
      color: ${theme.gray300};
    }
  `}
`;

export const Button = styled.button`
  ${({ theme }) => css`
    transition: all;
    transition-duration: 0.1s;
    transition-timing-function: ease;

    padding: 10px;
    background-color: ${theme.green100};
    color: white;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    backdrop-filter: blur(5px);

    &:hover {
      background-color: ${theme.green200};
    }
  `}
`;
