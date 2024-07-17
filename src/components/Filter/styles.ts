import styled, { css } from "styled-components";
import { IFilterStyleProps } from "./types";

export const FilterContainer = styled.div`
  ${({ theme }) => css`
    gap: 10px;
    display: flex;
    justify-content: space-between;
    margin-bottom: 20px;
    background: ${theme.colors.white};
    padding: 10px;
    border-radius: ${theme.radii.md};
    backdrop-filter: blur(10px);
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    border: 1px solid rgba(255, 255, 255, 0.2);
  `}
`;

export const Button = styled.button<IFilterStyleProps>`
  ${({ theme, active }) => css`
    transition: all;
    transition-duration: 0.1s;
    transition-timing-function: ease;

    padding: 10px;
    background-color: ${active === "true"
      ? theme.colors.blue100
      : theme.colors.gray100};
    color: white;
    border: none;
    border-radius: ${theme.radii.sm};
    cursor: pointer;
    backdrop-filter: blur(5px);

    &:hover {
      background-color: ${active === "true"
        ? theme.colors.blue200
        : theme.colors.gray200};
    }
  `}
`;
