import styled, { css } from "styled-components";
import { IFilterStyleProps } from "./types";

export const FilterContainer = styled.div`
  gap: 10px;
  display: flex;
  justify-content: space-between;
  margin-bottom: 20px;
  background: ${(props) => props.theme.white};
  padding: 10px;
  border-radius: 8px;
  backdrop-filter: blur(10px);
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  border: 1px solid rgba(255, 255, 255, 0.2);
`;

export const Button = styled.button<IFilterStyleProps>`
  ${({ theme, active }) => css`
    transition: all;
    transition-duration: 0.1s;
    transition-timing-function: ease;

    padding: 10px;
    background-color: ${active === "true" ? theme.blue100 : theme.gray100};
    color: white;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    backdrop-filter: blur(5px);

    &:hover {
      background-color: ${active === "true" ? theme.blue200 : theme.gray200};
    }
  `}
`;
