import * as S from "@src/contentscript/components/FlexBox/FlexBox.styled";
import { ReactNode } from "react";

interface IFlexBoxProps {
  children?: ReactNode;
  direction?: string;
}

const FlexBox = (props: IFlexBoxProps) => {
  const { direction, children } = props;

  const defaultDirection = direction === undefined ? "row" : direction;

  return <S.FlexBox direction={defaultDirection}>{children}</S.FlexBox>;
};

export default FlexBox;
