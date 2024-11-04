import * as React from "react";
import Svg, { Path } from "react-native-svg";
const SvgGpsFill = props => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    fill="currentColor"
    viewBox="0 0 24 24"
    width={24}
    height={24}
    {...props}
  >
    <Path d="m12 16 3 6H9zm-2.627.255a5 5 0 1 1 5.255 0l-1.356-2.711a2 2 0 1 0-2.544 0zm-2.241 4.482A10 10 0 0 1 2 12C2 6.477 6.477 2 12 2s10 4.477 10 10a10 10 0 0 1-5.131 8.737l-1.344-2.688a7 7 0 1 0-7.05 0z" />
  </Svg>
);
export default SvgGpsFill;
