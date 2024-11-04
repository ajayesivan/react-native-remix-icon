import * as React from "react";
import Svg, { Path } from "react-native-svg";
const SvgFilterFill = props => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    fill="currentColor"
    viewBox="0 0 24 24"
    width={24}
    height={24}
    {...props}
  >
    <Path d="M21 4v2h-1l-6 9v7h-4v-7L4 6H3V4z" />
  </Svg>
);
export default SvgFilterFill;
