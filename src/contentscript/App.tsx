import React from "react";
import { ThemeProvider } from "@emotion/react";
import theme from "../styles/theme";
import styled from "@emotion/styled";

const App = () => {
  console.log("재렌더링");
  return (
    <ThemeProvider theme={theme}>
      <StyledContainer>DigtialLiteracy</StyledContainer>
    </ThemeProvider>
  );
};

const StyledContainer = styled.div`
  background-color: ${({ theme }) => theme.color.primary};
  color: white;
  padding: 1.4rem;
`;
export default App;
