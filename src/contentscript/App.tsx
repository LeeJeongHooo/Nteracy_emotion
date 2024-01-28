import { Global, ThemeProvider, css } from "@emotion/react";
import theme from "../styles/theme";
import emotionReset from "emotion-reset";
import TopHeader from "./components/Header/TopHeader";
import { useState } from "react";
import Container from "@src/contentscript/components/Container/Container";

const App = () => {
  // 정보창 열기
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const onOpenInformation = () => {
    setIsOpen((isOpen) => !isOpen);
  };

  return (
    <>
      <Global
        styles={css`
          ${emotionReset}
        `}
      />
      <ThemeProvider theme={theme}>
        <Container>
          <TopHeader
            isOpen={isOpen}
            onOpenInformation={onOpenInformation}
          ></TopHeader>
        </Container>
      </ThemeProvider>
    </>
  );
};

export default App;
