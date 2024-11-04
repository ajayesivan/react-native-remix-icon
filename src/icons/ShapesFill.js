import * as React from "react";
import Svg, { Path } from "react-native-svg";
const SvgShapesFill = props => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    fill="currentColor"
    viewBox="0 0 24 24"
    width={24}
    height={24}
    {...props}
  >
    <Path d="m12 1 6 10H6zm1 12.5h8v8h-8zM6.75 22a4.75 4.75 0 1 0 0-9.5 4.75 4.75 0 0 0 0 9.5" />
  </Svg>
);
export default SvgShapesFill;
