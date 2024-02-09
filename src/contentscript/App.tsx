import { Global, ThemeProvider, css } from "@emotion/react";
import theme from "../styles/theme";
import emotionReset from "emotion-reset";
import TopHeader from "./components/Header/TopHeader";
import { useState } from "react";
import Container from "@src/contentscript/components/Container/Container";
import InformationList from "@src/contentscript/components/InformationList/InformationList";

const App = () => {
  // 정보창 열기
  const [isOpen, setIsOpen] = useState<boolean>(true);
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
          {isOpen && <InformationList />}
        </Container>
      </ThemeProvider>
    </>
  );
};

export default App;
