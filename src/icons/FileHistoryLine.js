import * as React from "react";
import Svg, { Path } from "react-native-svg";
const SvgFileHistoryLine = props => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    fill="currentColor"
    viewBox="0 0 24 24"
    width={24}
    height={24}
    {...props}
  >
    <Path d="m16 2 5 5v13.993A1 1 0 0 1 20.007 22H3.993A1 1 0 0 1 3 21.008V2.992C3 2.444 3.447 2 3.999 2zm-1 2H5v16h14V8h-4zm-2 5v4h3v2h-5V9z" />
  </Svg>
);
export default SvgFileHistoryLine;
