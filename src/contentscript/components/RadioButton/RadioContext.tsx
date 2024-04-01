import { createContext } from "react";

export const RadioDispatchContext = createContext({
  onChange: (value: string) => {},
});

export const RadioStateContext = createContext<string>("");
