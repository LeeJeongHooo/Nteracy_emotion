import styled from "@emotion/styled";
import { ReactNode } from "react";

interface IContainerProps {
  children: ReactNode;
}

const Container = ({ children }: IContainerProps) => {
  return <StyledContainer>{children}</StyledContainer>;
};

const StyledContainer = styled.div`
  margin-top: 0.5rem;
  margin-bottom: 0.8rem;
  border-radius: 0.8rem;
  overflow: hidden;
`;

export default Container;
