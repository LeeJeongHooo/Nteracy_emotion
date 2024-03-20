import { ReactNode } from "react";
import * as S from "@src/contentscript/components/Container/styles/Container.styled";
interface IContainerProps {
  children: ReactNode;
}

const Container = ({ children }: IContainerProps) => {
  return <S.Container>{children}</S.Container>;
};

export default Container;
