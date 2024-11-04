import * as React from "react";
import Svg, { Path } from "react-native-svg";
const SvgGamepadFill = props => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    fill="currentColor"
    viewBox="0 0 24 24"
    width={24}
    height={24}
    {...props}
  >
    <Path d="M17 4a6 6 0 0 1 6 6v4a6 6 0 0 1-6 6H7a6 6 0 0 1-6-6v-4a6 6 0 0 1 6-6zm-7 5H8v2H6v2h1.999L8 15h2l-.001-2H12v-2h-2zm8 4h-2v2h2zm-2-4h-2v2h2z" />
  </Svg>
);
export default SvgGamepadFill;
