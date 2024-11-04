import * as React from "react";
import Svg, { Path } from "react-native-svg";
const SvgProhibitedFill = props => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    fill="currentColor"
    viewBox="0 0 24 24"
    width={24}
    height={24}
    {...props}
  >
    <Path d="M19.743 18.329A9.96 9.96 0 0 0 22 12c0-5.523-4.477-10-10-10a9.96 9.96 0 0 0-6.329 2.257zM4.257 5.67A9.96 9.96 0 0 0 2 12c0 5.523 4.477 10 10 10a9.96 9.96 0 0 0 6.329-2.257z" />
  </Svg>
);
export default SvgProhibitedFill;
