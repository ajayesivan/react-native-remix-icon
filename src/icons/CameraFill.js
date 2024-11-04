import * as React from "react";
import Svg, { Path } from "react-native-svg";
const SvgCameraFill = props => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    fill="currentColor"
    viewBox="0 0 24 24"
    width={24}
    height={24}
    {...props}
  >
    <Path d="M9 3h6l2 2h4a1 1 0 0 1 1 1v14a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1h4zm3 16a6 6 0 1 0 0-12 6 6 0 0 0 0 12m0-2a4 4 0 1 1 0-8 4 4 0 0 1 0 8" />
  </Svg>
);
export default SvgCameraFill;
