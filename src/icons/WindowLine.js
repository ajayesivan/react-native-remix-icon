import * as React from "react";
import Svg, { Path } from "react-native-svg";
const SvgWindowLine = props => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    fill="currentColor"
    viewBox="0 0 24 24"
    width={24}
    height={24}
    {...props}
  >
    <Path d="M21 3a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1zm-1 8H4v8h16zm0-6H4v4h16zm-9 1v2H9V6zM7 6v2H5V6z" />
  </Svg>
);
export default SvgWindowLine;
