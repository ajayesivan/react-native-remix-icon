import * as React from "react";
import Svg, { Path } from "react-native-svg";
const SvgContrastLine = props => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    fill="currentColor"
    viewBox="0 0 24 24"
    {...props}
  >
    <Path d="M12 21.997c-5.523 0-10-4.477-10-10s4.477-10 10-10 10 4.477 10 10-4.477 10-10 10m0-2a8 8 0 1 0 0-16 8 8 0 0 0 0 16m0-2v-12a6 6 0 0 1 0 12" />
  </Svg>
);
export default SvgContrastLine;
