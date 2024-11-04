import * as React from "react";
import Svg, { Path } from "react-native-svg";
const SvgAddBoxFill = props => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    fill="currentColor"
    viewBox="0 0 24 24"
    width={24}
    height={24}
    {...props}
  >
    <Path d="M4 3h16a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1m7 8H7v2h4v4h2v-4h4v-2h-4V7h-2z" />
  </Svg>
);
export default SvgAddBoxFill;
