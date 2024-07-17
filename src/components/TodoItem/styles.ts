import styled, { css } from "styled-components";
import { ITodoItemStyleProps } from "./types";

export const Item = styled.div`
  ${({ theme }) => css`
    display: flex;
    justify-content: space-between;
    align-items: center;
    background: ${theme.colors.white};
    padding: 10px;
    margin-bottom: 10px;
    border-radius: ${theme.radii.md};
    backdrop-filter: blur(10px);
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    border: 1px solid rgba(255, 255, 255, 0.2);
  `}
`;

export const Title = styled.span<ITodoItemStyleProps>`
  ${({ theme, completed }) => css`
    text-decoration: ${completed === "true" ? "line-through" : "none"};
    color: ${completed === "true"
      ? theme.colors.gray300
      : theme.colors.gray400};
  `}
`;

export const Buttons = styled.div`
  display: flex;
  gap: 10px;
`;

export const Button = styled.button<ITodoItemStyleProps>`
  transition: all;
  transition-duration: 0.1s;
  transition-timing-function: ease;

  padding: 5px;
  background: ${(props) => {
    if (props.delete === "false") return props.theme.colors.red500;

    if (props.completed === "false") return props.theme.colors.green300;
    return props.theme.colors.yellow400;
  }};
  color: white;
  border: none;
  border-radius: ${(props) => props.theme.radii.sm};
  cursor: pointer;
  backdrop-filter: blur(5px);

  &:hover {
    background: ${(props) => {
      if (props.delete === "false") return props.theme.colors.red400;

      if (props.completed === "false") return props.theme.colors.green400;
      return props.theme.colors.yellow500;
    }};
  }
`;

export const EditFormContainer = styled.div`
  flex: 1;
  display: flex;
  flex-direction: row;
  gap: 10px;
  justify-content: center;
  align-items: center;
`;

export const Input = styled.input`
  padding: 5px;
  border: none;
  border-radius: ${props => props.theme.radii.sm};
  background: rgba(255, 255, 255, 0.25);
  color: #212529;
  backdrop-filter: blur(5px);
  box-shadow: inset 0 2px 4px rgba(0, 0, 0, 0.1);

  &::placeholder {
    color: ${props => props.theme.colors.gray300}
  }
`;
