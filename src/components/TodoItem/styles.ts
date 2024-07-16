import styled from "styled-components";
import { ITodoItemStyleProps } from "./types";

export const Item = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: rgba(255, 255, 255, 0.15);
  padding: 10px;
  margin-bottom: 10px;
  border-radius: 8px;
  backdrop-filter: blur(10px);
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  border: 1px solid rgba(255, 255, 255, 0.2);
`;

export const Title = styled.span<ITodoItemStyleProps>`
  text-decoration: ${(props) => (props.completed ? "line-through" : "none")};
  color: ${(props) => (props.completed ? "#6c757d" : "#212529")};
`;

export const Buttons = styled.div`
  display: flex;
  gap: 10px;
`;

export const Button = styled.button<ITodoItemStyleProps>`
  padding: 5px;
  background: ${(props) => {
    if (props.delete) return "rgba(255, 0, 0, 0.75)";

    if (!props.completed) return "rgba(0, 193, 0, 0.75)";
    return "rgba(255, 193, 7, 0.75)";
  }};
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  backdrop-filter: blur(5px);

  &:hover {
    background: ${
      (props) => {
        if (props.delete) return "rgba(150, 0, 0, 0.75)";
    
        if (!props.completed) return "rgba(0, 100, 0, 0.75)";
        return "rgba(255, 193, 7, 1)";
      }
      };
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
  border-radius: 4px;
  background: rgba(255, 255, 255, 0.25);
  color: #212529;
  backdrop-filter: blur(5px);
  box-shadow: inset 0 2px 4px rgba(0, 0, 0, 0.1);

  &::placeholder {
    color: #6c757d;
  }
`;
