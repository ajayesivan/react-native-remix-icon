import * as React from "react";
import Svg, { Path } from "react-native-svg";
const SvgShirtFill = props => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    fill="currentColor"
    viewBox="0 0 24 24"
    {...props}
  >
    <Path d="M6.998 4v7l5-2.5 5 2.5V4h3a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1h-16a1 1 0 0 1-1-1V5a1 1 0 0 1 1-1zm5 4-4.5-5h9zm1 3.236-1-.5-1 .5V20h2zm2 2.764v2h4v-2z" />
  </Svg>
);
export default SvgShirtFill;
