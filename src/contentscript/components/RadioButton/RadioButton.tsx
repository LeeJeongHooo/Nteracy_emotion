import * as S from "@src/contentscript/components/RadioButton/styles/RadioButton.styled";
import { ChangeEvent, InputHTMLAttributes, useContext, useId } from "react";
import useRadio from "./hook/useRadio";

interface IRadioButtonProps
  extends Omit<InputHTMLAttributes<HTMLInputElement>, "label"> {
  label: string;
}

const RadioButton = ({
  label,
  value,
  disabled,
  checked,
  ...rest
}: IRadioButtonProps) => {
  const id = useId();
  const radioId = id + label;

  const { value: selectedValue, onChange } = useRadio();

  const onChangeValue = (e: ChangeEvent<HTMLInputElement>) => {
    onChange(e.target.value);
  };

  const isChecked = selectedValue === value;

  return (
    <S.RadioButton checked={isChecked} disabled={disabled}>
      <input
        id={radioId}
        type="radio"
        checked={isChecked}
        onChange={onChangeValue}
        value={value}
        {...rest}
      />
      <span>{label}</span>
    </S.RadioButton>
  );
};

export default RadioButton;
