import { ReactNode } from "react";
import { RadioContext } from "./RadioContext";

interface IRadioButtonGroup {
  children: ReactNode;
  onChange: (value: string) => void;
  value: string;
}

const RadioButtonGroup = (props: IRadioButtonGroup) => {
  const { children, ...rest } = props;

  return <RadioContext.Provider value={rest}>{children}</RadioContext.Provider>;
};

export default RadioButtonGroup;
