import { ReactNode } from "react";
import * as S from "@src/contentscript/components/Button/styles/Button.styled.ts";

interface IButtonProps {
  children: ReactNode;
  onClick?: () => void;
  disabled?: boolean;
}

const Button = ({ children, onClick, disabled }: IButtonProps) => {
  console.log(disabled);
  return (
    <S.Button onClick={onClick} disabled={disabled}>
      {children}
    </S.Button>
  );
};

export default Button;
