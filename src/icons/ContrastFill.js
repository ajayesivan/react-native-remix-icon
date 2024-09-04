import * as React from "react";
import Svg, { Path } from "react-native-svg";
const SvgContrastFill = props => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    fill="currentColor"
    viewBox="0 0 24 24"
    {...props}
  >
    <Path d="M12 21.997c-5.523 0-10-4.477-10-10s4.477-10 10-10 10 4.477 10 10-4.477 10-10 10m0-2v-16a8 8 0 0 0 0 16" />
  </Svg>
);
export default SvgContrastFill;
