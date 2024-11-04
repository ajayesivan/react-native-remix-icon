import * as React from "react";
import Svg, { Path } from "react-native-svg";
const SvgLayout2Line = props => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    fill="currentColor"
    viewBox="0 0 24 24"
    width={24}
    height={24}
    {...props}
  >
    <Path d="M21 20a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h16a1 1 0 0 1 1 1zM11 5H5v14h6zm8 8h-6v6h6zm0-8h-6v6h6z" />
  </Svg>
);
export default SvgLayout2Line;
