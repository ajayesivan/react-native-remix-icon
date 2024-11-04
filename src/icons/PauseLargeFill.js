import * as React from "react";
import Svg, { Path } from "react-native-svg";
const SvgPauseLargeFill = props => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    fill="currentColor"
    viewBox="0 0 24 24"
    width={24}
    height={24}
    {...props}
  >
    <Path d="M6 3h2v18H6zm10 0h2v18h-2z" />
  </Svg>
);
export default SvgPauseLargeFill;
