import { ReactNode } from "react";
import * as S from "@src/contentscript/components/InformationItem/styles/InformationItem.styled";

interface IInformationItemProps {
  children?: ReactNode;
  title: string;
}

const InformationItem = (props: IInformationItemProps) => {
  const { title, children } = props;

  return (
    <S.InformationItem>
      <S.InformationTitle>{title}</S.InformationTitle>
      {children}
    </S.InformationItem>
  );
};

export default InformationItem;
