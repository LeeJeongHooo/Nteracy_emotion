import { Theme } from "@emotion/react";

const color = {
  primary: "#3B28CC",
  lightPrimary: "#D7DBFF",
  darkPrimary: "#322E9C",
  lightWhite: "#F4EEC7",
  gray: "#D7D7D7",
  dark: "#1E1E1E",
};

const fontSize = {
  xSmall: "1.2rem",
  small: "1.4rem",
  mid: "1.6rem",
  large: "1.8rem",
  xlarge: "2rem",
};

const fontWeight = {
  thin: 100,
  light: 300,
  regular: 400,
  mid: 500,
  semi: 600,
  bold: 700,
};

const space = {
  xxSmall: "0.4rem",
  xSmall: "0.8rem",
  small: "1.2rem",
  mid: "1.6rem",
  large: "2rem",
};

export type ColorType = typeof color;
export type FontSizeType = typeof fontSize;
export type FontWeightType = typeof fontWeight;
export type SpaceType = typeof space;

const theme: Theme = {
  color,
  fontSize,
  fontWeight,
  space,
};

export default theme;
