import * as React from "react";
import Svg, { Path } from "react-native-svg";
const SvgArrowTurnBackFill = props => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    fill="currentColor"
    viewBox="0 0 24 24"
    width={24}
    height={24}
    {...props}
  >
    <Path d="M17 16h-4l5 6 5-6h-4v-5a8 8 0 1 0-16 0v9h2v-9a6 6 0 1 1 12 0z" />
  </Svg>
);
export default SvgArrowTurnBackFill;
