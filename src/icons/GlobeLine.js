import * as React from "react";
import Svg, { Path } from "react-native-svg";
const SvgGlobeLine = props => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    fill="currentColor"
    viewBox="0 0 24 24"
    {...props}
  >
    <Path d="M13 21h5v2H6v-2h5v-1.05a10 10 0 0 1-7.684-4.988l1.737-.992A8 8 0 1 0 15.97 3.053l.993-1.737A10 10 0 0 1 22 10c0 5.185-3.946 9.449-9 9.95zm-1-4a7 7 0 1 1 0-14 7 7 0 0 1 0 14m0-2a5 5 0 1 0 0-10 5 5 0 0 0 0 10" />
  </Svg>
);
export default SvgGlobeLine;
