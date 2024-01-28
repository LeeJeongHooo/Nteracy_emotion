import styled from "@emotion/styled";
import Logo from "@src/assets/logo.png";
import IconOpenArrow from "@src/assets/icon_open_arrow.svg";
import IconHistory from "@src/assets/icon_history.svg";

interface ITopHeaderProps {
  isOpen: boolean;
  onOpenInformation: () => void;
}

const TopHeader = (props: ITopHeaderProps) => {
  const { isOpen, onOpenInformation } = props;
  return (
    <StyledTopHeader isOpen={isOpen}>
      <img src={Logo} alt="logo" />
      <div>
        <img src={IconHistory} alt="history" />
        <img
          onClick={onOpenInformation}
          className="open"
          src={IconOpenArrow}
          alt="open"
        />
      </div>
    </StyledTopHeader>
  );
};

const StyledTopHeader = styled.div<{ isOpen: boolean }>`
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: ${({ theme }) => theme.color.primary};
  color: white;
  padding: 1rem 2.5rem;
  > div {
    display: flex;
    gap: 0.4rem;
    img {
      width: 3rem;
      aspect-ratio: 1;
    }
  }
  button {
    background-color: transparent;
  }

  .open {
    ${(props) => (props.isOpen ? "transform : rotate(180deg)" : "")};
    transition: transform 0.3s;
  }
`;
export default TopHeader;
