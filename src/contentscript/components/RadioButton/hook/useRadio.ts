import { useContext } from "react";
import { RadioDispatchContext, RadioStateContext } from "../RadioContext";

const useRadio = () => {
  return useContext(RadioDispatchContext);
};

export default useRadio;
