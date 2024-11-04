import * as React from "react";
import Svg, { Path } from "react-native-svg";
const SvgMapPin2Fill = props => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    fill="currentColor"
    viewBox="0 0 24 24"
    width={24}
    height={24}
    {...props}
  >
    <Path d="M18.364 17.364 12 23.728l-6.364-6.364a9 9 0 1 1 12.728 0M12 13a2 2 0 1 0 0-4 2 2 0 0 0 0 4" />
  </Svg>
);
export default SvgMapPin2Fill;
