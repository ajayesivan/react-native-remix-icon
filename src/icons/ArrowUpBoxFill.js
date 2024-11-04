import * as React from "react";
import Svg, { Path } from "react-native-svg";
const SvgArrowUpBoxFill = props => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    fill="currentColor"
    viewBox="0 0 24 24"
    width={24}
    height={24}
    {...props}
  >
    <Path d="M4 3a1 1 0 0 0-1 1v16a1 1 0 0 0 1 1h16a1 1 0 0 0 1-1V4a1 1 0 0 0-1-1zm8 3.343 5.95 5.95H13v5.364h-2v-5.364H6.05z" />
  </Svg>
);
export default SvgArrowUpBoxFill;
