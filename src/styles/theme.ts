import { Theme } from "@emotion/react";

const color = {
  primary: "#3B28CC",
  lightPrimary: "#D7DBFF",
  darkPrimary: "#322E9C",
  lightWhite: "#F4EEC7",
  gray: "#D7D7D7",
  dark: "#1E1E1E",
};

export type ColorType = typeof color;

const theme: Theme = {
  color,
};

export default theme;
