import * as React from "react";
import Svg, { Path } from "react-native-svg";
const SvgWaterFlashLine = props => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    fill="currentColor"
    viewBox="0 0 24 24"
    {...props}
  >
    <Path d="m12.005 3.103-4.95 4.95a7 7 0 1 0 9.9 0zm0-2.828 6.364 6.364A9 9 0 1 1 5.64 19.367a9 9 0 0 1 0-12.728zm1 10.728h2.5l-4.5 6.5v-4.5h-2.5l4.5-6.5z" />
  </Svg>
);
export default SvgWaterFlashLine;
