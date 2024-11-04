import * as React from "react";
import Svg, { Path } from "react-native-svg";
const SvgSunFoggyLine = props => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    fill="currentColor"
    viewBox="0 0 24 24"
    {...props}
  >
    <Path d="M8 12h2v2H4v-2h2a6 6 0 1 1 6 6v-2a4 4 0 1 0-4-4m-2 8h9v2H6zm-4-4h8v2H2zm9-15h2v3h-2zM3.515 4.929l1.414-1.414L7.05 5.636 5.636 7.05zM16.95 18.364l1.414-1.414 2.121 2.121-1.414 1.414zm2.121-14.85 1.414 1.415-2.121 2.121-1.414-1.414zM23 11v2h-3v-2z" />
  </Svg>
);
export default SvgSunFoggyLine;
