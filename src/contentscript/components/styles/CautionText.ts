import styled from "@emotion/styled";

export const CautionText = styled.p`
  font-size: ${({ theme }) => theme.fontSize.xxSmall};
  &::before {
    content: "※";
  }
`;
