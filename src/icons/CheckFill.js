import * as React from "react";
import Svg, { Path } from "react-native-svg";
const SvgCheckFill = props => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    fill="currentColor"
    viewBox="0 0 24 24"
    width={24}
    height={24}
    {...props}
  >
    <Path d="m10 15.17 9.192-9.191 1.414 1.414L10 17.999l-6.364-6.364 1.414-1.414z" />
  </Svg>
);
export default SvgCheckFill;
