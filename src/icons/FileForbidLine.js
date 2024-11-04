import * as React from "react";
import Svg, { Path } from "react-native-svg";
const SvgFileForbidLine = props => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    fill="currentColor"
    viewBox="0 0 24 24"
    width={24}
    height={24}
    {...props}
  >
    <Path d="M11.29 20c.215.722.543 1.396.965 2H3.993A1 1 0 0 1 3 21.008V2.992C3 2.444 3.447 2 3.999 2H16l5 5v4.674a7 7 0 0 0-2-.603V8h-4V4H5v16zM18 23a5 5 0 1 1 0-10 5 5 0 0 1 0 10m-1.293-2.292a3 3 0 0 0 4.001-4.001zm-1.415-1.415 4.001-4a3 3 0 0 0-4.001 4.001" />
  </Svg>
);
export default SvgFileForbidLine;
