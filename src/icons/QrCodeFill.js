import * as React from "react";
import Svg, { Path } from "react-native-svg";
const SvgQrCodeFill = props => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    fill="currentColor"
    viewBox="0 0 24 24"
    {...props}
  >
    <Path d="M16 17v-1h-3v-3h3v2h2v2h-1v2h-2v2h-2v-3h2v-1zm5 4h-4v-2h2v-2h2zM3 3h8v8H3zm10 0h8v8h-8zM3 13h8v8H3zm15 0h3v2h-3zM6 6v2h2V6zm0 10v2h2v-2zM16 6v2h2V6z" />
  </Svg>
);
export default SvgQrCodeFill;
