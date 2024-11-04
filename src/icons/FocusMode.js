import * as React from "react";
import Svg, { Path } from "react-native-svg";
const SvgFocusMode = props => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    fill="currentColor"
    viewBox="0 0 24 24"
    {...props}
  >
    <Path d="M4 3a1 1 0 0 0-1 1v4h2V5h3V3zm16 0h-4v2h3v3h2V4a1 1 0 0 0-1-1M5 16v3h3v2H4a1 1 0 0 1-1-1v-4zm14 0v3h-3v2h4a1 1 0 0 0 1-1v-4zm-9-7a1 1 0 0 0-1 1v4a1 1 0 0 0 1 1h4a1 1 0 0 0 1-1v-4a1 1 0 0 0-1-1z" />
  </Svg>
);
export default SvgFocusMode;
