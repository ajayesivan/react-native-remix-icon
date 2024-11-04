import * as React from "react";
import Svg, { Path } from "react-native-svg";
const SvgEqualFill = props => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    fill="currentColor"
    viewBox="0 0 24 24"
    width={24}
    height={24}
    {...props}
  >
    <Path d="M19 8H5v2h14zm0 6H5v2h14z" />
  </Svg>
);
export default SvgEqualFill;
