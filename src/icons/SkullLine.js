import * as React from "react";
import Svg, { Path } from "react-native-svg";
const SvgSkullLine = props => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    fill="currentColor"
    viewBox="0 0 24 24"
    {...props}
  >
    <Path d="M20 12a8 8 0 1 0-16 0v4h3a1 1 0 0 1 1 1v3h8v-3a1 1 0 0 1 1-1h3zm-2 6v3a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1v-3H3a1 1 0 0 1-1-1v-5C2 6.477 6.477 2 12 2s10 4.477 10 10v5a1 1 0 0 1-1 1zM7.5 14a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3m9 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3" />
  </Svg>
);
export default SvgSkullLine;
