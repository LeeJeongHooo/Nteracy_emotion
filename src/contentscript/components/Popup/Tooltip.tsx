import styled from "@emotion/styled";
import { ReactNode } from "react";

interface ITooptipProps {
  children: ReactNode;
  message: string;
}

const Tooltip = (props: ITooptipProps) => {
  const { children, message } = props;
  return (
    <TooltipWrapper>
      {children}
      <TooltipContent>{message}</TooltipContent>
    </TooltipWrapper>
  );
};

export default Tooltip;

const TooltipWrapper = styled.div`
  position: relative;
  cursor: pointer;
  &:hover {
    div {
      opacity: 1;
    }
  }
`;

const TooltipContent = styled.div`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  left: 2rem;
  width: 20rem;
  padding: 0.4rem;
  opacity: 0;
  transition: all 0.75s ease;
  background-color: ${({ theme }) => theme.color.lightPrimary};
  &::before {
    content: "";
    position: absolute;
    top: 50%;
    right: 100%;
    transform: translateY(-50%);
    border-width: 0.5rem;
    border-style: solid;
    border-color: transparent ${({ theme }) => theme.color.lightPrimary}
      transparent transparent;
  }
`;
