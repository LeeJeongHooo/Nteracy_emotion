import * as S from "@src/contentscript/components/ProgressBar/ProgressBar.styled";

// 응답 데이터 타입
export interface IResponseType {
  left: number;
  right: number;
  total: number;
}

// 응답정보가 온 뒤 보여줄 수 있는 ProgressBar
const ProgressBar = (props: IResponseType) => {
  const { left, right, total } = props;

  const leftPercent = ((Number(left) / Number(total)) * 100).toFixed(2);
  const rightPercent = ((Number(right) / Number(total)) * 100).toFixed(2);

  return (
    <S.ProgressBar width={leftPercent}>
      <div>
        <span>
          <strong>{`${leftPercent}%`}</strong> ({left}명)
        </span>
      </div>
      <span>
        <strong>{`${rightPercent}%`}</strong> ({right}명)
      </span>
    </S.ProgressBar>
  );
};

export default ProgressBar;
