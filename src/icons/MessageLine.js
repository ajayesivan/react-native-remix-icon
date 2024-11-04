import * as React from "react";
import Svg, { Path } from "react-native-svg";
const SvgMessageLine = props => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    fill="currentColor"
    viewBox="0 0 24 24"
    width={24}
    height={24}
    {...props}
  >
    <Path d="M6.455 19 2 22.5V4a1 1 0 0 1 1-1h18a1 1 0 0 1 1 1v14a1 1 0 0 1-1 1zm-.692-2H20V5H4v13.385zM8 10h8v2H8z" />
  </Svg>
);
export default SvgMessageLine;
