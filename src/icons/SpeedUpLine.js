import * as React from "react";
import Svg, { Path } from "react-native-svg";
const SvgSpeedUpLine = props => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    fill="currentColor"
    viewBox="0 0 24 24"
    width={24}
    height={24}
    {...props}
  >
    <Path d="M20 13c0 2.21-.895 4.21-2.343 5.657l1.414 1.414A9.97 9.97 0 0 0 22 13c0-5.523-4.477-10-10-10S2 7.477 2 13a9.97 9.97 0 0 0 2.929 7.071l1.414-1.414A8 8 0 1 1 20 13m-4.707-4.707-4.5 4.5 1.414 1.414 4.5-4.5z" />
  </Svg>
);
export default SvgSpeedUpLine;
