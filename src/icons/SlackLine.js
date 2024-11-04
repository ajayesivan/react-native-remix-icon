import * as React from "react";
import Svg, { Path } from "react-native-svg";
const SvgSlackLine = props => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    fill="currentColor"
    viewBox="0 0 24 24"
    width={24}
    height={24}
    {...props}
  >
    <Path d="M14.501 3a1.5 1.5 0 0 1 1.5 1.5v5a1.5 1.5 0 0 1-3 0v-5a1.5 1.5 0 0 1 1.5-1.5m-10 10h1.5v1.5a1.5 1.5 0 1 1-1.5-1.5m8.5 5h1.5a1.5 1.5 0 1 1-1.5 1.5zm1.5-5h5a1.5 1.5 0 0 1 0 3h-5a1.5 1.5 0 1 1 0-3m5-5a1.5 1.5 0 0 1 0 3h-1.5V9.5a1.5 1.5 0 0 1 1.5-1.5m-15 0h5a1.5 1.5 0 1 1 0 3h-5a1.5 1.5 0 0 1 0-3m5-5a1.5 1.5 0 0 1 1.5 1.5V6h-1.5a1.5 1.5 0 1 1 0-3m0 10a1.5 1.5 0 0 1 1.5 1.5v5a1.5 1.5 0 0 1-3 0v-5a1.5 1.5 0 0 1 1.5-1.5" />
  </Svg>
);
export default SvgSlackLine;
