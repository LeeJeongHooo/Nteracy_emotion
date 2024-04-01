import { ReactNode, useMemo, useState } from "react";
import { RadioDispatchContext, RadioStateContext } from "./RadioContext";

interface IRadioProvider {
  children: ReactNode;
}

const RadioProvider = (props: IRadioProvider) => {
  const { children } = props;
  const [radioValue, setRadioValue] = useState<string>();

  const onChange = (value: string) => {
    setRadioValue(value);
  };

  const dispath = useMemo(() => ({ onChange }), []);

  return (
    <RadioStateContext.Provider value={radioValue}>
      <RadioDispatchContext.Provider value={dispath}>
        {children}
      </RadioDispatchContext.Provider>
    </RadioStateContext.Provider>
  );
};

export default RadioProvider;
