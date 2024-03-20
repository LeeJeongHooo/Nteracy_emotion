import styled from "@emotion/styled";
import { ReactNode, useEffect, useRef, useState } from "react";

interface ITooptipProps {
  children: ReactNode;
  message: string;
}

const Tooltip = (props: ITooptipProps) => {
  const { children, message } = props;

  const tooltipPos = useRef<HTMLDivElement>(null);
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [tooltipSize, setTooltipSize] = useState<number>();
  const onMouseEnter = () => {
    setIsOpen(true);
  };
  const onMouseLeave = () => {
    setIsOpen(false);
  };

  useEffect(() => {
    setTooltipSize(() => {
      return (
        tooltipPos.current.parentElement.clientWidth -
        tooltipPos.current.previousElementSibling.clientWidth
      );
    });
  }, [isOpen]);

  return (
    <TooltipWrapper
      ref={tooltipPos}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      {children}
      {isOpen && <TooltipContent width={tooltipSize}>{message}</TooltipContent>}
    </TooltipWrapper>
  );
};

export default Tooltip;

const TooltipWrapper = styled.div`
  position: relative;
  cursor: pointer;
`;

const TooltipContent = styled.div<{ width: number }>`
  z-index: 10;
  font-size: ${({ theme }) => theme.fontSize.xSmall};
  position: absolute;
  text-align: center;
  top: 50%;
  left: 2rem;
  transform: translateY(-50%);
  width: ${(props) => props.width + "px"};
  padding: 0.4rem;
  border-radius: 0.4rem;
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
