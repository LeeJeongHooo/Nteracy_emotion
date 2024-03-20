import styled from "@emotion/styled";

export const Button = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  border: 0;
  border-radius: 1.2rem;
  padding: 1rem 1.2rem;
  background-color: ${({ theme, disabled }) =>
    !disabled ? theme.color.primary : theme.color.gray};
  color: ${({ theme, disabled }) => (!disabled ? "#fff" : "#000")};
  cursor: ${({ theme, disabled }) => (!disabled ? "pointer" : "not-allowed")};
`;
