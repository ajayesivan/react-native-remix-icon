import * as React from "react";
import Svg, { Path } from "react-native-svg";
const SvgArrowRightUpBoxFill = props => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    fill="currentColor"
    viewBox="0 0 24 24"
    width={24}
    height={24}
    {...props}
  >
    <Path d="M4 3a1 1 0 0 0-1 1v16a1 1 0 0 0 1 1h16a1 1 0 0 0 1-1V4a1 1 0 0 0-1-1zm12 5v8.414l-3.5-3.5-3.793 3.793-1.414-1.414 3.793-3.793-3.5-3.5z" />
  </Svg>
);
export default SvgArrowRightUpBoxFill;
