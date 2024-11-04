import * as React from "react";
import Svg, { Path } from "react-native-svg";
const SvgSimCardLine = props => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    fill="currentColor"
    viewBox="0 0 24 24"
    {...props}
  >
    <Path d="M6 4v16h12V7.828L14.172 4zM5 2h10l4.707 4.707a1 1 0 0 1 .293.707V21a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V3a1 1 0 0 1 1-1m3 10h8v6H8z" />
  </Svg>
);
export default SvgSimCardLine;
