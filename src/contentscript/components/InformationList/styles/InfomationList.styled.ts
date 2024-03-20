import styled from "@emotion/styled";

export const InformationList = styled.div`
  background-color: #fff;
  padding: 1rem 2.5rem;
  > div:not(:last-child) {
    margin-bottom: ${({ theme }) => theme.space.large};
  }
`;
