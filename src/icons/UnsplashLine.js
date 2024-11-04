import * as React from "react";
import Svg, { Path } from "react-native-svg";
const SvgUnsplashLine = props => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    fill="currentColor"
    viewBox="0 0 24 24"
    {...props}
  >
    <Path d="M10.001 10v4h4v-4h7v11h-18V10zm-2 2h-3v7h14v-7h-3L16 16H8zm8-9v6h-8V3zm-2 2h-4v2h4z" />
  </Svg>
);
export default SvgUnsplashLine;
