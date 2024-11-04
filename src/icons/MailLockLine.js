import * as React from "react";
import Svg, { Path } from "react-native-svg";
const SvgMailLockLine = props => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    fill="currentColor"
    viewBox="0 0 24 24"
    width={24}
    height={24}
    {...props}
  >
    <Path d="m20 7.238-7.928 7.1L4 7.216V19h9v2H3a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h18a1 1 0 0 1 1 1v7h-2zM19.501 5H4.511l7.55 6.662zM22 17h1v5h-8v-5h1v-1a3 3 0 1 1 6 0zm-2 0v-1a1 1 0 1 0-2 0v1z" />
  </Svg>
);
export default SvgMailLockLine;
