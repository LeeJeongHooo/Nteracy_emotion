import styled from "@emotion/styled";
import InformationItem from "@src/contentscript/components/InformationItem/InformationItem";

const InformationList = () => {
  return (
    <StyledInformationList>
      <InformationItem title="기본정보"></InformationItem>
      <InformationItem title="사실/의견 요약 정보"></InformationItem>
      <InformationItem title="사용자 평가"></InformationItem>
    </StyledInformationList>
  );
};

const StyledInformationList = styled.div`
  background-color: #fff;
  padding: 1rem 2.5rem;
  > div:not(:last-child) {
    margin-bottom: ${({ theme }) => theme.space.large};
  }
`;

export default InformationList;
