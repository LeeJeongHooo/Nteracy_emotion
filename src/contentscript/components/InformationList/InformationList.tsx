import InformationItem from "@src/contentscript/components/InformationItem/InformationItem";
import Tooltip from "@src/contentscript/components/Popup/Tooltip";
import IconTooltip from "@src/assets/icon_tooltip.svg";
import * as S from "@src/contentscript/components/InformationList/styles/InfomationList.styled";

const InformationList = () => {
  return (
    <S.InformationList>
      <InformationItem title="기본정보">
        <div>
          <span>
            카테고리:<strong>뉴스 / 정치</strong>
          </span>
          <Tooltip message="영상 카테고리는 유튜브 정책에 따른 분류일 뿐 신뢰성을 입증하지 않으니 유의하시길 바랍니다.">
            <img src={IconTooltip} alt="tooltip" />
          </Tooltip>
        </div>
        <div>
          <span>
            게시자:<strong>BBC News 코리아 (주요 언론사)</strong>
          </span>
          <Tooltip message="포털 사이트 네이버와 다음 제휴 언론사 기준입니다.">
            <img src={IconTooltip} alt="tooltip" />
          </Tooltip>
        </div>
        <div>
          <span>
            게시일:<strong>2023.08.11</strong>
          </span>
        </div>
      </InformationItem>
      <InformationItem title="사실/의견 요약 정보">
        <div>
          <span>
            사실:
            <strong>
              GPT API가 답한 사실에 대한 영역입니다. GPT API가 답한 사실에 대한
              영역입니다. GPT API가 답한 사실에 대한 영역입니다. GPT API가 답한
              사실에 대한 영역입니다. GPT API가 답한 사실에 대한 영역입니다.
            </strong>
          </span>
        </div>
        <div>
          <span>
            의견:
            <strong>
              GPT API가 답한 의견에 대한 영역입니다. GPT API가 답한 의견에 대한
              영역입니다. GPT API가 답한 의견에 대한 영역입니다. GPT API가 답한
              의견에 대한 영역입니다. GPT API가 답한 의견에 대한 영역입니다.
            </strong>
          </span>
        </div>
      </InformationItem>
      <InformationItem title="사용자 평가"></InformationItem>
    </S.InformationList>
  );
};

export default InformationList;
