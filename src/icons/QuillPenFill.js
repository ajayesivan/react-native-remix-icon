import * as React from "react";
import Svg, { Path } from "react-native-svg";
const SvgQuillPenFill = props => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    fill="currentColor"
    viewBox="0 0 24 24"
    width={24}
    height={24}
    {...props}
  >
    <Path d="M21 1.997c-15 0-17 14-18 20h1.998q.999-5 5.002-5.5c4-.5 7-4 8-7l-1.5-1 1-1c1-1 2.004-2.5 3.5-5.5" />
  </Svg>
);
export default SvgQuillPenFill;
