import * as React from "react";
import Svg, { Path } from "react-native-svg";
const SvgMenLine = props => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    fill="currentColor"
    viewBox="0 0 24 24"
    width={24}
    height={24}
    {...props}
  >
    <Path d="M15.05 8.537 18.585 5H14V3h8v8h-2V6.414l-3.537 3.537a7.5 7.5 0 1 1-1.414-1.414M10.5 20a5.5 5.5 0 1 0 0-11 5.5 5.5 0 0 0 0 11" />
  </Svg>
);
export default SvgMenLine;
