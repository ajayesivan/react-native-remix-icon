import * as React from "react";
import Svg, { Path } from "react-native-svg";
const SvgPauseLine = props => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    fill="currentColor"
    viewBox="0 0 24 24"
    width={24}
    height={24}
    {...props}
  >
    <Path d="M6 5h2v14H6zm10 0h2v14h-2z" />
  </Svg>
);
export default SvgPauseLine;
