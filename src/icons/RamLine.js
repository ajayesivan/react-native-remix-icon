import * as React from "react";
import Svg, { Path } from "react-native-svg";
const SvgRamLine = props => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    fill="currentColor"
    viewBox="0 0 24 24"
    {...props}
  >
    <Path d="M3 7h18v10h-2v-2h-2v2h-2v-2h-2v2h-2v-2H9v2H7v-2H5v2H3zM2 5a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h20a1 1 0 0 0 1-1V6a1 1 0 0 0-1-1zm9 4H5v3h6zm2 0h6v3h-6z" />
  </Svg>
);
export default SvgRamLine;
