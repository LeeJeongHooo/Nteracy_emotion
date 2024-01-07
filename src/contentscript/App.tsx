import { Global, ThemeProvider, css } from "@emotion/react";
import theme from "../styles/theme";
import styled from "@emotion/styled";
import Button from "./components/Button/Button";
import emotionReset from "emotion-reset";

const App = () => {
  return (
    <>
      <Global
        styles={css`
          ${emotionReset}
        `}
      />
      <ThemeProvider theme={theme}>
        <StyledContainer>
          <Button disabled>TEST</Button>
        </StyledContainer>
      </ThemeProvider>
    </>
  );
};

const StyledContainer = styled.div`
  background-color: ${({ theme }) => theme.color.primary};
  color: white;
  padding: 1.4rem;
`;
export default App;
