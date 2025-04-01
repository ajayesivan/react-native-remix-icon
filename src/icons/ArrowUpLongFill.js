import * as React from "react";
import Svg, { Path } from "react-native-svg";
const SvgArrowUpLongFill = props => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    fill="currentColor"
    viewBox="0 0 24 24"
    width={24}
    height={24}
    {...props}
  >
    <Path d="M11 22h2V8.414h5.414L12 2 5.586 8.414H11z" />
  </Svg>
);
export default SvgArrowUpLongFill;
