import * as React from "react";
import Svg, { Path } from "react-native-svg";
const SvgSpamLine = props => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    fill="currentColor"
    viewBox="0 0 24 24"
    width={24}
    height={24}
    {...props}
  >
    <Path d="M17.5 2.5 23 12l-5.5 9.5h-11L1 12l5.5-9.5zm-1.153 2H7.653L3.311 12l4.342 7.5h8.694l4.342-7.5zM11 15h2v2h-2zm0-8h2v6h-2z" />
  </Svg>
);
export default SvgSpamLine;
