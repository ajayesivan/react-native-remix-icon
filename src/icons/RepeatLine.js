import * as React from "react";
import Svg, { Path } from "react-native-svg";
const SvgRepeatLine = props => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    fill="currentColor"
    viewBox="0 0 24 24"
    width={24}
    height={24}
    {...props}
  >
    <Path d="M6 4h15a1 1 0 0 1 1 1v7h-2V6H6v3L1 5l5-4zm12 16H3a1 1 0 0 1-1-1v-7h2v6h14v-3l5 4-5 4z" />
  </Svg>
);
export default SvgRepeatLine;
