import * as React from "react";
import Svg, { Path } from "react-native-svg";
const SvgCameraOffFill = props => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    fill="currentColor"
    viewBox="0 0 24 24"
    width={24}
    height={24}
    {...props}
  >
    <Path d="M19.586 21H3a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1h.586L1.394 2.808l1.414-1.415 19.799 19.8-1.415 1.414zM7.556 8.97a6 6 0 0 0 8.475 8.475l-1.417-1.417a4 4 0 0 1-5.642-5.642zM22 17.786l-4.045-4.045Q18 13.377 18 13a6 6 0 0 0-6.74-5.955L8.107 3.893 9 3h6l2 2h4a1 1 0 0 1 1 1zM13.51 9.294a4.01 4.01 0 0 1 2.197 2.198z" />
  </Svg>
);
export default SvgCameraOffFill;
