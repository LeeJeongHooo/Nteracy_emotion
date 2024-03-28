import { ReactNode, useMemo, useState } from "react";
import { PopupDispatchContext, PopupStateContext } from "./PopupContext";
import { PopupPortal } from "./PopupPortal";

interface IPopup {
  Component: () => ReactNode;
  props: any;
}

interface IPopupProviderProps {
  children: ReactNode;
}

const PopupProvider = (props: IPopupProviderProps) => {
  const { children } = props;
  const [popupList, setPopupList] = useState<IPopup[]>([]);

  const open = (Component: () => ReactNode, props: any) => {
    setPopupList((prevPopupList) => {
      return [
        ...prevPopupList,
        {
          Component,
          props,
        },
      ];
    });
  };

  const close = (Component: () => ReactNode) => {
    setPopupList((prevPopupList) => {
      return prevPopupList.filter((item) => item.Component !== Component);
    });
  };

  const dispatch = useMemo(() => ({ open, close }), []);

  return (
    <PopupStateContext.Provider value={popupList}>
      <PopupDispatchContext.Provider value={dispatch}>
        <PopupPortal />
        {children}
      </PopupDispatchContext.Provider>
    </PopupStateContext.Provider>
  );
};

export default PopupProvider;
