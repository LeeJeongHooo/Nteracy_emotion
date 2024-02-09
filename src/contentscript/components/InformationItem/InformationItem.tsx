import styled from "@emotion/styled";
import { ReactNode } from "react";

interface IInformationCardProps {
  children?: ReactNode;
  title: string;
}

const InformationItem = (props: IInformationCardProps) => {
  const { title, children } = props;

  return (
    <StyledInformationItem>
      <h3>{title}</h3>
      {children}
    </StyledInformationItem>
  );
};

const StyledInformationItem = styled.div`
  padding: 1.5rem 1.2rem;
  overflow: hidden;
  border-radius: 0 0.8rem 0.8rem 0;
  border-left: 0.4rem;
  border-color: ${({ theme }) => theme.color.primary};
  border-style: solid;
  box-shadow: rgba(9, 30, 66, 0.25) 0px 4px 8px -2px,
    rgba(9, 30, 66, 0.08) 0px 0px 0px 1px;
  > h3 {
    font-size: ${({ theme }) => theme.fontSize.small};
    font-weight: ${({ theme }) => theme.fontWeight.mid};
    color: ${({ theme }) => theme.color.primary};
  }
  > div {
    span:not(:last-child) {
      margin-bottom: ${({ theme }) => theme.space.small};
    }
  }
`;

export default InformationItem;
