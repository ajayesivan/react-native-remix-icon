import * as React from "react";
import Svg, { Path } from "react-native-svg";
const SvgCheckboxIndeterminateFill = props => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    fill="currentColor"
    viewBox="0 0 24 24"
    width={24}
    height={24}
    {...props}
  >
    <Path d="M4 3h16a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1m3 8v2h10v-2z" />
  </Svg>
);
export default SvgCheckboxIndeterminateFill;
