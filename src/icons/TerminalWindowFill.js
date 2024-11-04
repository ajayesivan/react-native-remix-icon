import * as React from "react";
import Svg, { Path } from "react-native-svg";
const SvgTerminalWindowFill = props => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    fill="currentColor"
    viewBox="0 0 24 24"
    width={24}
    height={24}
    {...props}
  >
    <Path d="M20 10H4v9h16zM3 3h18a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1m2 3v2h2V6zm4 0v2h2V6zm-4 5h3v5H5z" />
  </Svg>
);
export default SvgTerminalWindowFill;
