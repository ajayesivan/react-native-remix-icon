import * as React from "react";
import Svg, { Path } from "react-native-svg";
const SvgTempColdFill = props => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    fill="currentColor"
    viewBox="0 0 24 24"
    width={24}
    height={24}
    {...props}
  >
    <Path d="M8 10.255V5a4 4 0 1 1 8 0v5.255a7 7 0 1 1-8 0M8 16a4 4 0 0 0 8 0z" />
  </Svg>
);
export default SvgTempColdFill;
