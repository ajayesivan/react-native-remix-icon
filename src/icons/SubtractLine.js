import * as React from "react";
import Svg, { Path } from "react-native-svg";
const SvgSubtractLine = props => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    fill="currentColor"
    viewBox="0 0 24 24"
    width={24}
    height={24}
    {...props}
  >
    <Path d="M5 11v2h14v-2z" />
  </Svg>
);
export default SvgSubtractLine;
