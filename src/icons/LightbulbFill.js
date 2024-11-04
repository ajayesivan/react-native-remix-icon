import * as React from "react";
import Svg, { Path } from "react-native-svg";
const SvgLightbulbFill = props => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    fill="currentColor"
    viewBox="0 0 24 24"
    width={24}
    height={24}
    {...props}
  >
    <Path d="M11 18H7.941c-.297-1.273-1.637-2.314-2.187-3a8 8 0 1 1 12.49.002c-.55.685-1.888 1.726-2.185 2.998H13v-5h-2zm5 2v1a2 2 0 0 1-2 2h-4a2 2 0 0 1-2-2v-1z" />
  </Svg>
);
export default SvgLightbulbFill;
