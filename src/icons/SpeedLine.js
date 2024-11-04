import * as React from "react";
import Svg, { Path } from "react-native-svg";
const SvgSpeedLine = props => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    fill="currentColor"
    viewBox="0 0 24 24"
    {...props}
  >
    <Path d="m12 13.333-9.223 6.149A.5.5 0 0 1 2 19.066V4.934a.5.5 0 0 1 .777-.416L12 10.667V4.934a.5.5 0 0 1 .777-.416l10.599 7.066a.5.5 0 0 1 0 .832l-10.599 7.066a.5.5 0 0 1-.777-.416zM10.394 12 4 7.737v8.526zM14 7.737v8.526L20.394 12z" />
  </Svg>
);
export default SvgSpeedLine;
