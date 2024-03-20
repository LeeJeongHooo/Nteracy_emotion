import Logo from "@src/assets/logo.png";
import IconOpenArrow from "@src/assets/icon_open_arrow.svg";
import IconHistory from "@src/assets/icon_history.svg";
import * as S from "@src/contentscript/components/Header/styles/Header.styled";

interface ITopHeaderProps {
  isOpen: boolean;
  onOpenInformation: () => void;
}

const TopHeader = (props: ITopHeaderProps) => {
  const { isOpen, onOpenInformation } = props;
  return (
    <S.TopHeader isOpen={isOpen}>
      <img className="logo" src={Logo} alt="logo" />
      <div>
        <img src={IconHistory} alt="history" />
        <img
          onClick={onOpenInformation}
          className="open"
          src={IconOpenArrow}
          alt="open"
        />
      </div>
    </S.TopHeader>
  );
};

export default TopHeader;
