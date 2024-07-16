import { ReactNode } from "react";
import { ThemeProvider } from "styled-components";
import { theme } from "../styles/theme";
import { Container, GlobalStyle } from "./styles";

type StyledComponentProviderProps = {
  children: ReactNode;
};

export function StyledComponentProvider({
  children,
}: StyledComponentProviderProps) {
  return (
    <ThemeProvider theme={theme}>
      <Container>
        <GlobalStyle />
        {children}
      </Container>
    </ThemeProvider>
  );
}
