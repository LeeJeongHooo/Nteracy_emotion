import React from "react";
import ReactDom from "react-dom/client";

const Popup = () => {
  return <div>Popup</div>;
};

export default Popup;

const container = document.createElement("div");
document.body.appendChild(container);

const root = ReactDom.createRoot(container);
root.render(<Popup />);
