import * as React from "react";
import Svg, { Path } from "react-native-svg";
const SvgArrowGoBackFill = props => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    fill="currentColor"
    viewBox="0 0 24 24"
    width={24}
    height={24}
    {...props}
  >
    <Path d="M8 7v4L2 6l6-5v4h5a8 8 0 1 1 0 16H4v-2h9a6 6 0 0 0 0-12z" />
  </Svg>
);
export default SvgArrowGoBackFill;
