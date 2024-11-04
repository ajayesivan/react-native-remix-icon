import * as React from "react";
import Svg, { Path } from "react-native-svg";
const SvgHdLine = props => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    fill="currentColor"
    viewBox="0 0 24 24"
    width={24}
    height={24}
    {...props}
  >
    <Path d="M4 5v14h16V5zM3 3h18a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1m4.5 8.25h2V9H11v6H9.5v-2.25h-2V15H6V9h1.5zm7-.75v3H16a.5.5 0 0 0 .5-.5v-2a.5.5 0 0 0-.5-.5zM13 9h3a2 2 0 0 1 2 2v2a2 2 0 0 1-2 2h-3z" />
  </Svg>
);
export default SvgHdLine;
