import * as React from "react";
import Svg, { Path } from "react-native-svg";
const SvgDoorClosedFill = props => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    fill="currentColor"
    viewBox="0 0 24 24"
    width={24}
    height={24}
    {...props}
  >
    <Path d="M2.998 21v-2h2V4a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v15h2v2zm12-10h-2v2h2z" />
  </Svg>
);
export default SvgDoorClosedFill;
