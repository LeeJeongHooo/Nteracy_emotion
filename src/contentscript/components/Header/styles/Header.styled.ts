import styled from "@emotion/styled";

export const TopHeader = styled.div<{ isOpen: boolean }>`
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: ${({ theme }) => theme.color.primary};
  color: white;
  padding: 1rem 2.5rem;
  .logo {
    width: 10rem;
    aspect-ratio: 11/4;
  }
  > div {
    display: flex;
    gap: ${({ theme }) => theme.space.xSmall};
    img {
      width: 2.4rem;
      aspect-ratio: 1;
    }
  }
  button {
    background-color: transparent;
  }

  .open {
    ${(props) => (props.isOpen ? "transform : rotate(180deg)" : "")};
    transition: transform 0.3s;
  }
`;
