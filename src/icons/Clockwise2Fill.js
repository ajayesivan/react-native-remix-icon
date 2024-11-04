import * as React from "react";
import Svg, { Path } from "react-native-svg";
const SvgClockwise2Fill = props => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    fill="currentColor"
    viewBox="0 0 24 24"
    width={24}
    height={24}
    {...props}
  >
    <Path d="M10 4V1l5 4-5 4V6H8a3 3 0 0 0-3 3v4H3V9a5 5 0 0 1 5-5zm-1 7a1 1 0 0 1 1-1h10a1 1 0 0 1 1 1v10a1 1 0 0 1-1 1H10a1 1 0 0 1-1-1z" />
  </Svg>
);
export default SvgClockwise2Fill;
