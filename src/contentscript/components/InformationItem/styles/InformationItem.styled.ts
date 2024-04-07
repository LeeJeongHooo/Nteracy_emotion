import styled from "@emotion/styled";

export const InformationItem = styled.div`
  display: flex;
  flex-direction: column;
  padding: 1.5rem 1.2rem;
  border-radius: 0 0.8rem 0.8rem 0;
  border-left: 0.4rem;
  border-color: ${({ theme }) => theme.color.primary};
  border-style: solid;
  box-shadow: rgba(9, 30, 66, 0.25) 0px 4px 8px -2px,
    rgba(9, 30, 66, 0.08) 0px 0px 0px 1px;
  font-size: ${({ theme }) => theme.fontSize.xSmall};
  > div,
  > p {
    &:not(:last-child) {
      margin-bottom: ${({ theme }) => theme.space.xSmall};
    }
  }
`;

export const InformationTitle = styled.h3`
  font-size: ${({ theme }) => theme.fontSize.mid};
  font-weight: ${({ theme }) => theme.fontWeight.mid};
  color: ${({ theme }) => theme.color.primary};
  margin-bottom: ${({ theme }) => theme.space.small};
`;
