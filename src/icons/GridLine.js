import * as React from "react";
import Svg, { Path } from "react-native-svg";
const SvgGridLine = props => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    fill="currentColor"
    viewBox="0 0 24 24"
    {...props}
  >
    <Path d="M14 10h-4v4h4zm2 0v4h3v-4zm-2 9v-3h-4v3zm2 0h3v-3h-3zM14 5h-4v3h4zm2 0v3h3V5zm-8 5H5v4h3zm0 9v-3H5v3zM8 5H5v3h3zM4 3h16a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1" />
  </Svg>
);
export default SvgGridLine;
