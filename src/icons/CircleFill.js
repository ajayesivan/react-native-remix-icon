import * as React from "react";
import Svg, { Path } from "react-native-svg";
const SvgCircleFill = props => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    fill="currentColor"
    viewBox="0 0 24 24"
    {...props}
  >
    <Path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10" />
  </Svg>
);
export default SvgCircleFill;
