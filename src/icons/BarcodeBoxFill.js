import * as React from "react";
import Svg, { Path } from "react-native-svg";
const SvgBarcodeBoxFill = props => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    fill="currentColor"
    viewBox="0 0 24 24"
    {...props}
  >
    <Path d="M3 3h18a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1m3 4v10h3V7zm4 0v10h2V7zm3 0v10h1V7zm2 0v10h3V7z" />
  </Svg>
);
export default SvgBarcodeBoxFill;
