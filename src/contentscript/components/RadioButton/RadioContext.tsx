import { createContext } from "react";

export const RadioContext = createContext({
  onChange: (value: string) => {},
  value: "",
});
