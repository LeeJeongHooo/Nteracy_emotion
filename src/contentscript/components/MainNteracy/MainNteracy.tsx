import TopHeader from "@src/contentscript/components/Header/TopHeader";
import InformationList from "@src/contentscript/components/InformationList/InformationList";
import { useCallback, useState } from "react";

const MainNteracy = () => {
  // 정보창 열기
  const [isOpen, setIsOpen] = useState<boolean>(true);

  const onOpenInformation = useCallback(() => {
    setIsOpen((prevIsOpen) => !prevIsOpen);
  }, []);

  return (
    <>
      <TopHeader isOpen={isOpen} onOpenInformation={onOpenInformation} />
      {isOpen && <InformationList />}
    </>
  );
};

export default MainNteracy;
