import * as React from "react";
import Svg, { Path } from "react-native-svg";
const SvgFilePaperFill = props => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    fill="currentColor"
    viewBox="0 0 24 24"
    {...props}
  >
    <Path d="M3 15V3a1 1 0 0 1 1-1h16a1 1 0 0 1 1 1v16a3 3 0 0 1-3 3H4a3 3 0 0 1-3-3v-2h16v2a1 1 0 1 0 2 0v-4z" />
  </Svg>
);
export default SvgFilePaperFill;
