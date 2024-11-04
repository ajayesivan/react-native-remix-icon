import * as React from "react";
import Svg, { Path } from "react-native-svg";
const SvgAlignTop = props => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    fill="currentColor"
    viewBox="0 0 24 24"
    width={24}
    height={24}
    {...props}
  >
    <Path d="M3 3h18v2H3zm5 8v10H6V11H3l4-4 4 4zm10 0v10h-2V11h-3l4-4 4 4z" />
  </Svg>
);
export default SvgAlignTop;
