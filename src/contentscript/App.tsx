import { Global, ThemeProvider, css } from "@emotion/react";
import theme from "../styles/theme";
import emotionReset from "emotion-reset";
import Container from "@src/contentscript/components/Container/Container";
import MainNteracy from "@src/contentscript/components/MainNteracy/MainNteracy";

const App = () => {
  return (
    <>
      <Global
        styles={css`
          ${emotionReset}
        `}
      />
      <ThemeProvider theme={theme}>
        <Container>
          <MainNteracy />
        </Container>
      </ThemeProvider>
    </>
  );
};

export default App;
