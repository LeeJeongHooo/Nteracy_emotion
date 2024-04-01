import { useContext } from "react";
import { RadioContext } from "../RadioContext";

const useRadio = () => {
  return useContext(RadioContext);
};

export default useRadio;
