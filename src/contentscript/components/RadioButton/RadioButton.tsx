import * as S from "@src/contentscript/components/RadioButton/styles/RadioButton.styled";
import { ChangeEvent, InputHTMLAttributes } from "react";

interface IRadioButtonProps
  extends Omit<InputHTMLAttributes<HTMLInputElement>, "label"> {
  label: string;
}

const RadioButton = ({ label, name, value, ...reset }: IRadioButtonProps) => {
  const radioId = label + name;
  const onChange = (e: ChangeEvent) => {
    console.log(e);
  };

  return (
    <S.RadioButton>
      <input
        id={radioId}
        type="radio"
        name={name}
        onChange={onChange}
        value={value}
        {...reset}
      />
      <label htmlFor={radioId}>
        <span>{label}</span>
      </label>
    </S.RadioButton>
  );
};

export default RadioButton;
