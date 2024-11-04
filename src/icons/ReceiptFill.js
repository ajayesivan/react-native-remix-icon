import * as React from "react";
import Svg, { Path } from "react-native-svg";
const SvgReceiptFill = props => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    fill="currentColor"
    viewBox="0 0 24 24"
    {...props}
  >
    <Path d="M9 4 6 2 3 4v15a3 3 0 0 0 3 3h14a3 3 0 0 0 3-3v-2H7v2a1 1 0 1 1-2 0v-4h16V4l-3-2-3 2-3-2z" />
  </Svg>
);
export default SvgReceiptFill;
