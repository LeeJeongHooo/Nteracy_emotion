import styled from "@emotion/styled";
import { ReactNode } from "react";

interface IContainerProps {
  children: ReactNode;
}

const Container = ({ children }: IContainerProps) => {
  return <StyledContainer>{children}</StyledContainer>;
};

const StyledContainer = styled.div`
  margin-top: ${({ theme }) => theme.space.xxSmall};
  margin-bottom: ${({ theme }) => theme.space.xSmall};
  border-radius: 1.2rem;
  overflow: hidden;
`;

export default Container;
