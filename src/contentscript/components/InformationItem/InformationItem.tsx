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
      <h3>{title}</h3>
      {children}
    </S.InformationItem>
  );
};

export default InformationItem;
