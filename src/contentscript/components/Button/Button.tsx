import { ReactNode } from "react";
import styled from "@emotion/styled";

interface ButtonProps {
  children: ReactNode;
  onClick?: () => void;
  disabled?: boolean;
}

const Button = ({ children, onClick, disabled }: ButtonProps) => {
  console.log(disabled);
  return (
    <StyledButton onClick={onClick} disabled={disabled}>
      {children}
    </StyledButton>
  );
};

const StyledButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  border: 0;
  border-radius: 0.8rem;
  padding: 1rem 1.2rem;
  background-color: ${({ theme, disabled }) =>
    !disabled ? theme.color.primary : theme.color.gray};
  color: ${({ theme, disabled }) => (!disabled ? "#fff" : "#000")};
  cursor: ${({ theme, disabled }) => (!disabled ? "cursor" : "not-allowed")};
`;

export default Button;
