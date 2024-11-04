import * as React from "react";
import Svg, { Path } from "react-native-svg";
const SvgGobletLine = props => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    fill="currentColor"
    viewBox="0 0 24 24"
    width={24}
    height={24}
    {...props}
  >
    <Path d="M11 19v-5.111L3 5V3h18v2l-8 8.889V19h5v2H6v-2zM7.49 7h9.02l1.8-2H5.69zm1.8 2L12 12.01 14.71 9z" />
  </Svg>
);
export default SvgGobletLine;
