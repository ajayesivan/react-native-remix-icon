import * as React from "react";
import Svg, { Path } from "react-native-svg";
const SvgColorFilterFill = props => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    fill="currentColor"
    viewBox="0 0 24 24"
    width={24}
    height={24}
    {...props}
  >
    <Path d="M16.572 8.027a5 5 0 1 0-5.101 2.945 7 7 0 0 1 5.1-2.945m-3.418 9.92a7 7 0 0 0 0-5.892 5 5 0 1 1 0 5.89m-6.88-7.92a7 7 0 0 0 5.1 2.946 5 5 0 1 1-5.1-2.946" />
  </Svg>
);
export default SvgColorFilterFill;
