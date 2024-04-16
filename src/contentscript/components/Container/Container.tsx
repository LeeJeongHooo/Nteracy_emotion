import { ReactNode } from "react";
import * as S from "@src/contentscript/components/Container/styles/Container.styled";
interface IContainerProps {
  children: ReactNode;
}

const Container = (props: IContainerProps) => {
  const { children } = props;

  return <S.Container>{children}</S.Container>;
};

export default Container;
