import styled from "@emotion/styled";

export const FlexBox = styled.div<{ direction: string }>`
  display: flex;
  direction: ${({ direction }) => direction};
  align-items: center;
  gap: ${({ theme }) => theme.space.xSmall};
`;
