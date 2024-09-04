import * as React from "react";
import Svg, { Path } from "react-native-svg";
const SvgPentagonFill = props => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    fill="currentColor"
    viewBox="0 0 24 24"
    {...props}
  >
    <Path d="m12 .7 10.747 7.808-4.105 12.634H5.358L1.253 8.508z" />
  </Svg>
);
export default SvgPentagonFill;
