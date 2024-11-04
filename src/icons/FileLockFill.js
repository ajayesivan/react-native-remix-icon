import * as React from "react";
import Svg, { Path } from "react-native-svg";
const SvgFileLockFill = props => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    fill="currentColor"
    viewBox="0 0 24 24"
    width={24}
    height={24}
    {...props}
  >
    <Path d="m16 2 5 5v14.008a.993.993 0 0 1-.993.992H3.993A1 1 0 0 1 3 21.008V2.992C3 2.444 3.445 2 3.993 2zm-1 9v-1a3 3 0 1 0-6 0v1H8v5h8v-5zm-2 0h-2v-1a1 1 0 1 1 2 0z" />
  </Svg>
);
export default SvgFileLockFill;
