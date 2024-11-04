import * as React from "react";
import Svg, { Path } from "react-native-svg";
const SvgParentFill = props => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    fill="currentColor"
    viewBox="0 0 24 24"
    {...props}
  >
    <Path d="M7 11a4.5 4.5 0 1 1 0-9 4.5 4.5 0 0 1 0 9m10.5 4a4 4 0 1 1 0-8 4 4 0 0 1 0 8m0 1a4.5 4.5 0 0 1 4.5 4.5v.5h-9v-.5a4.5 4.5 0 0 1 4.5-4.5M7 12a5 5 0 0 1 5 5v4H2v-4a5 5 0 0 1 5-5" />
  </Svg>
);
export default SvgParentFill;
