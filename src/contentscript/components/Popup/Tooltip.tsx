import styled from "@emotion/styled";
import { ReactNode, useEffect, useRef, useState } from "react";
import { CSSTransition } from "react-transition-group";

interface ITooptipProps {
  children: ReactNode;
  message: string;
}

const Tooltip = (props: ITooptipProps) => {
  const { children, message } = props;

  const tooltipPos = useRef<HTMLDivElement>(null);
  const tooltipContentDom = useRef<HTMLDivElement>(null);
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

  const duration = 500;

  return (
    <TooltipWrapper
      ref={tooltipPos}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      {children}
      <CSSTransition
        nodeRef={tooltipContentDom}
        in={isOpen}
        timeout={duration}
        classNames="fade"
        unmountOnExit
      >
        <TooltipContent ref={tooltipContentDom} width={tooltipSize}>
          {message}
        </TooltipContent>
      </CSSTransition>
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

  &.fade-enter {
    opacity: 0;
  }

  &.fade-enter-active {
    opacity: 1;
    transition: opacity 500ms;
  }

  &.fade-exit {
    opacity: 1;
  }

  &.fade-exit-active {
    opacity: 0;
    transition: opacity 500ms;
  }
`;
