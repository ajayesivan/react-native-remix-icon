import * as React from "react";
import Svg, { Path } from "react-native-svg";
const SvgExpandLeftRightFill = props => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    fill="currentColor"
    viewBox="0 0 24 24"
    width={24}
    height={24}
    {...props}
  >
    <Path d="m9 6-6 6 6 6zm6 12 6-6-6-6z" />
  </Svg>
);
export default SvgExpandLeftRightFill;
