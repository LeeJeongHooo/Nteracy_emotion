import { ReactNode, useContext } from "react";
import { PopupDispatchContext } from "./PopupContext";

export default function usePopup() {
  const { open, close } = useContext(PopupDispatchContext);

  const openPopup = (Component: () => ReactNode, props: any) => {
    open(Component, props);
  };

  const closePopup = (Component: () => ReactNode) => {
    close(Component);
  };

  return { openPopup, closePopup };
}
