import * as React from "react";
import Svg, { Path } from "react-native-svg";
const SvgSpamFill = props => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    fill="currentColor"
    viewBox="0 0 24 24"
    {...props}
  >
    <Path d="M17.5 2.5 23 12l-5.5 9.5h-11L1 12l5.5-9.5zM11 15v2h2v-2zm0-8v6h2V7z" />
  </Svg>
);
export default SvgSpamFill;
