import * as React from "react";
import Svg, { Path } from "react-native-svg";
const SvgSendToBack = props => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    fill="currentColor"
    viewBox="0 0 24 24"
    width={24}
    height={24}
    {...props}
  >
    <Path d="M11 3a1 1 0 0 1 1 1v2h5a1 1 0 0 1 1 1v5h2a1 1 0 0 1 1 1v7a1 1 0 0 1-1 1h-7a1 1 0 0 1-1-1v-2H7a1 1 0 0 1-1-1v-5H4a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1zm5 5h-4v3a1 1 0 0 1-1 1H8v4h4v-3a1 1 0 0 1 1-1h3z" />
  </Svg>
);
export default SvgSendToBack;
