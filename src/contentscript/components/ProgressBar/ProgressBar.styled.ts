import styled from "@emotion/styled";

export const ProgressBar = styled.div<{ width: string | number }>`
  width: 100%;
  border: 0.1rem solid ${({ theme }) => theme.color.primary};
  border-radius: 1.2rem;
  overflow: hidden;

  > div {
    text-align: center;
    box-sizing: border-box;
    padding: 1rem 1.2rem;
    width: ${({ width }) => `${width}%`};
    background-color: ${({ theme }) => theme.color.lightPrimary};
  }
`;
