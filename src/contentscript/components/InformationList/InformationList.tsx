import InformationItem from "@src/contentscript/components/InformationItem/InformationItem";
import Tooltip from "@src/contentscript/components/Popup/Tooltip";
import IconTooltip from "@src/assets/icon_tooltip.svg";
import * as S from "@src/contentscript/components/InformationList/styles/InfomationList.styled";
import * as GS from "@src/contentscript/components/styles/CautionText";
import Button from "../Button/Button";
import RadioButtonGroup from "../RadioButton/RadioButtonGroup";
import RadioButton from "../RadioButton/RadioButton";
import { useState } from "react";

const InformationList = () => {
  // 신뢰할 만한 출처를 포함하고 있는지?
  const [isReliable, setIsReliable] = useState<string>("");
  // 사실과 개인의 의견을 분리하고 있는지?
  const [isFact, setIsFact] = useState<string>("");

  const isEnableButton = isReliable && isFact ? true : false;

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
        <GS.CautionText>
          해당 정보는 GPT API에 의해 요약된 정보로, 영상을 비판적으로 이해하기
          위한 보조 도구로 사용하시길 바랍니다.
        </GS.CautionText>
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
      <InformationItem title="사용자 평가">
        <p>해당 영상이 신뢰할만한 출처를 포함하고 있나요?</p>
        <GS.CautionText>
          신뢰할만한 출처에는 주요 언론, 전문지, 시사주간지, 학술 자료, 법령 및
          판례, 통계 및 여론조사, 정부기관 등이 있습니다.
        </GS.CautionText>
        <RadioButtonGroup
          value={isReliable}
          onChange={(value) => {
            setIsReliable(value);
          }}
        >
          <RadioButton label="예" value="1"></RadioButton>
          <RadioButton label="아니오" value="0"></RadioButton>
        </RadioButtonGroup>

        <p>해당 영상에서 사실과 개인의 의견을 분리하고 있나요?</p>
        <GS.CautionText>
          ‘사실’은 실제로 있었던 일이나 현재에 있는 일을 의미하고, ‘의견’은 어떤
          대상에 대하여 가지는 생각을 의미합니다.
        </GS.CautionText>
        <RadioButtonGroup
          value={isFact}
          onChange={(value) => {
            setIsFact(value);
          }}
        >
          <RadioButton label="예" value="1"></RadioButton>
          <RadioButton label="아니오" value="0"></RadioButton>
        </RadioButtonGroup>

        <Button disabled={!isEnableButton}>평가 완료</Button>
      </InformationItem>
    </S.InformationList>
  );
};

export default InformationList;
