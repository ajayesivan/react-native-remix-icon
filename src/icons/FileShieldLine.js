import * as React from "react";
import Svg, { Path } from "react-native-svg";
const SvgFileShieldLine = props => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    fill="currentColor"
    viewBox="0 0 24 24"
    {...props}
  >
    <Path d="M14 8V4H5v16h14V9h-3v4.62c0 .844-.446 1.633-1.187 2.102L12 17.498 9.187 15.72C8.446 15.254 8 14.465 8 13.62V8zm7 0v12.993A1 1 0 0 1 20.007 22H3.993A.993.993 0 0 1 3 21.008V2.992C3 2.455 3.449 2 4.002 2h10.995zm-11 5.62c0 .15.087.304.255.41L12 15.133l1.745-1.101c.168-.107.255-.261.255-.412V10h-4z" />
  </Svg>
);
export default SvgFileShieldLine;
