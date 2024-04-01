import { ReactNode } from "react";
import RadioProvider from "./RadioProvider";

interface IRadioButtonGroup {
  children: ReactNode;
}
const RadioButtonGroup = (props: IRadioButtonGroup) => {
  const { children } = props;
  return <RadioProvider>{children}</RadioProvider>;
};

export default RadioButtonGroup;
