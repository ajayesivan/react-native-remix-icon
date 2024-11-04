import * as React from "react";
import Svg, { Path } from "react-native-svg";
const SvgFileCheckFill = props => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    fill="currentColor"
    viewBox="0 0 24 24"
    width={24}
    height={24}
    {...props}
  >
    <Path d="m21 7-5-5H3.999A.995.995 0 0 0 3 2.992v18.016a1 1 0 0 0 .993.992h8.348A6 6 0 0 1 21 14.803zm-6.535 12.465L18 23l4.95-4.95-1.414-1.414L18 20.172 15.88 18.05z" />
  </Svg>
);
export default SvgFileCheckFill;
