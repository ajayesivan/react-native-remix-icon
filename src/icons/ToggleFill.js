import * as React from "react";
import Svg, { Path } from "react-native-svg";
const SvgToggleFill = props => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    fill="currentColor"
    viewBox="0 0 24 24"
    width={24}
    height={24}
    {...props}
  >
    <Path d="M8 5h8a7 7 0 1 1 0 14H8A7 7 0 1 1 8 5m8 10a3 3 0 1 0 0-6 3 3 0 0 0 0 6" />
  </Svg>
);
export default SvgToggleFill;
