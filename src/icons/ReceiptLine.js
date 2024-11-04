import * as React from "react";
import Svg, { Path } from "react-native-svg";
const SvgReceiptLine = props => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    fill="currentColor"
    viewBox="0 0 24 24"
    {...props}
  >
    <Path d="M9 4 6 2 3 4v15a3 3 0 0 0 3 3h14a3 3 0 0 0 3-3v-3h-2V4l-3-2-3 2-3-2zm10 12H7v3a1 1 0 1 1-2 0V5.07l1-.666 3 2 3-2 3 2 3-2 1 .666zm1 4H8.83c.11-.313.17-.65.17-1v-1h12v1a1 1 0 0 1-1 1" />
  </Svg>
);
export default SvgReceiptLine;
