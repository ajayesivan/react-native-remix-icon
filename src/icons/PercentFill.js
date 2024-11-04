import * as React from "react";
import Svg, { Path } from "react-native-svg";
const SvgPercentFill = props => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    fill="currentColor"
    viewBox="0 0 24 24"
    {...props}
  >
    <Path d="M17.505 21.003a3.5 3.5 0 1 1 0-7 3.5 3.5 0 0 1 0 7m-11-11a3.5 3.5 0 1 1 0-7 3.5 3.5 0 0 1 0 7m12.571-6.486 1.414 1.415L4.934 20.488 3.52 19.074z" />
  </Svg>
);
export default SvgPercentFill;
