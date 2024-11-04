import * as React from "react";
import Svg, { Path } from "react-native-svg";
const SvgFilterLine = props => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    fill="currentColor"
    viewBox="0 0 24 24"
    {...props}
  >
    <Path d="M21 4v2h-1l-5 7.5V22H9v-8.5L4 6H3V4zM6.404 6 11 12.894V20h2v-7.106L17.596 6z" />
  </Svg>
);
export default SvgFilterLine;
