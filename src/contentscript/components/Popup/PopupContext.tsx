import { ReactNode, createContext } from "react";

interface IPopup {
  Component: () => ReactNode;
  props: any;
}

export const PopupDispatchContext = createContext({
  open: (Component: () => ReactNode, props: any) => {},
  close: (Component: () => ReactNode) => {},
});

export const PopupStateContext = createContext<IPopup[]>([]);
