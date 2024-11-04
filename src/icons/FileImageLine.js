import * as React from "react";
import Svg, { Path } from "react-native-svg";
const SvgFileImageLine = props => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    fill="currentColor"
    viewBox="0 0 24 24"
    width={24}
    height={24}
    {...props}
  >
    <Path d="M15 8V4H5v16h14V8zM3 2.992C3 2.444 3.447 2 3.999 2H16l5 5v13.993A1 1 0 0 1 20.007 22H3.993A1 1 0 0 1 3 21.008zM11 9.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0m6.5 7.5-4-7L8 17z" />
  </Svg>
);
export default SvgFileImageLine;
