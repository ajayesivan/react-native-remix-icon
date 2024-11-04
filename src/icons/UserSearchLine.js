import * as React from "react";
import Svg, { Path } from "react-native-svg";
const SvgUserSearchLine = props => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    fill="currentColor"
    viewBox="0 0 24 24"
    width={24}
    height={24}
    {...props}
  >
    <Path d="M12 14v2a6 6 0 0 0-6 6H4a8 8 0 0 1 8-8m0-1c-3.315 0-6-2.685-6-6s2.685-6 6-6 6 2.685 6 6-2.685 6-6 6m0-2c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4m9.446 9.032 1.504 1.503-1.415 1.415-1.503-1.504a4 4 0 1 1 1.414-1.414M18 20a2 2 0 1 0 0-4 2 2 0 0 0 0 4" />
  </Svg>
);
export default SvgUserSearchLine;
