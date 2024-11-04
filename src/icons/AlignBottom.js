import * as React from "react";
import Svg, { Path } from "react-native-svg";
const SvgAlignBottom = props => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    fill="currentColor"
    viewBox="0 0 24 24"
    width={24}
    height={24}
    {...props}
  >
    <Path d="M3 19h18v2H3zm5-6h3l-4 4-4-4h3V3h2zm10 0h3l-4 4-4-4h3V3h2z" />
  </Svg>
);
export default SvgAlignBottom;
