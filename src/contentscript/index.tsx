import React from "react";
import { createRoot } from "react-dom/client";
import App from "@src/contentscript/App";

let oldHref: string = "";
window.onload = async () => {
  console.log("window Load");
  if (window.location.search !== "" && window.location.search.includes("v=")) {
    await init();
  }

  const bodyList = document.querySelector("body");
  let observer = new MutationObserver((mutations) => {
    mutations.forEach((mutation) => {
      if (oldHref !== document.location.href) {
        console.log(oldHref);
        oldHref = document.location.href;
        init();
      }
    });
  });
  observer.observe(bodyList, { childList: true, subtree: true });
};

const init = async () => {
  console.log("init함수 실행");
  if (document.querySelector("#digital-literacy")) {
    document.querySelector("#digital-literacy").remove();
  }

  const appContainer = document.createElement("div");
  appContainer.id = "digital-literacy";
  if (!appContainer) {
    throw new Error("새로운 DOM이 생성되지 않았습니다.");
  }

  await waitForElement("#secondary.style-scope.ytd-watch-flexy");
  if (document.querySelector("#digital-literacy")) {
    document.querySelector("#digital-literacy").remove();
  }

  const selectPosition = document.querySelector(
    "#secondary-inner.style-scope.ytd-watch-flexy"
  );
  if (selectPosition) {
    selectPosition.insertAdjacentElement("afterbegin", appContainer);
  }

  const root = createRoot(appContainer);
  root.render(<App />);
};

export const waitForElement = (selector: string) => {
  console.log("생성 기달림");
  return new Promise((resolve) => {
    if (document.querySelector(selector)) {
      return resolve(document.querySelector(selector));
    }

    const observer = new MutationObserver(() => {
      if (document.querySelector(selector)) {
        resolve(document.querySelector(selector));
        observer.disconnect();
      }
    });

    observer.observe(document.body, {
      childList: true,
      subtree: true,
    });
  });
};
