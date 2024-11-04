import * as React from "react";
import Svg, { Path } from "react-native-svg";
const SvgArrowLeftRightFill = props => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    fill="currentColor"
    viewBox="0 0 24 24"
    width={24}
    height={24}
    {...props}
  >
    <Path d="M16 16v-4l5 5-5 5v-4H4v-2zM8 2v3.999L20 6v2H8v4L3 7z" />
  </Svg>
);
export default SvgArrowLeftRightFill;
