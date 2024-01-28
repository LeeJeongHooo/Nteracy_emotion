import {
  ColorType,
  FontSizeType,
  FontWeightType,
  SpaceType,
} from "./src/styles/theme";
import "@emotion/react";

declare module "@emotion/react" {
  export interface Theme {
    color: ColorType;
    fontSize: FontSizeType;
    fontWeight: FontWeightType;
    space: SpaceType;
  }
}
