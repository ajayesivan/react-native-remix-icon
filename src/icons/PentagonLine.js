import * as React from "react";
import Svg, { Path } from "react-native-svg";
const SvgPentagonLine = props => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    fill="currentColor"
    viewBox="0 0 24 24"
    width={24}
    height={24}
    {...props}
  >
    <Path d="m12 3.03 8.53 6.198-3.258 10.028H6.729L3.47 9.228zm10.747 5.478L12 .7 1.253 8.508l4.105 12.634h13.284z" />
  </Svg>
);
export default SvgPentagonLine;
