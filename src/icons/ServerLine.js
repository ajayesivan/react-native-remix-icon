import * as React from "react";
import Svg, { Path } from "react-native-svg";
const SvgServerLine = props => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    fill="currentColor"
    viewBox="0 0 24 24"
    {...props}
  >
    <Path d="M5 11h14V5H5zm16-7v16a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h16a1 1 0 0 1 1 1m-2 9H5v6h14zM7 15h3v2H7zm0-8h3v2H7z" />
  </Svg>
);
export default SvgServerLine;
