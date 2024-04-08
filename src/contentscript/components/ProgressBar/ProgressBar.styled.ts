import styled from "@emotion/styled";

export const ProgressBar = styled.div<{ width: string | number }>`
  position: relative;
  width: 100%;
  overflow: hidden;
  height: 3rem;
  line-height: 3rem;
  border: 0.1rem solid ${({ theme }) => theme.color.primary};
  border-radius: 1.2rem;
  > div {
    display: inline-block;
    height: 100%;
    width: ${({ width }) => `${width}%`};
    background-color: ${({ theme }) => theme.color.lightPrimary};
  }
`;
