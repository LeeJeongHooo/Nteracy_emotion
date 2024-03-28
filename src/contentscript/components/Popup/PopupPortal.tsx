import { useContext } from "react";
import { createPortal } from "react-dom";
import usePopup from "./usePopup";
import { PopupStateContext } from "./PopupContext";

export const PopupPortal = () => {
  const popupList = useContext(PopupStateContext);
  const { closePopup } = usePopup();

  return createPortal(
    <div>
      {popupList.map((popupInfo, idx) => {
        const { Component, props } = popupInfo;
        const onClose = () => {
          closePopup(Component);
        };

        return <Component key={idx} onClose={onClose} {...props} />;
      })}
    </div>,
    document.body
  );
};
