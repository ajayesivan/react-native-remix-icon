import * as React from "react";
import Svg, { Path } from "react-native-svg";
const SvgGameLine = props => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    fill="currentColor"
    viewBox="0 0 24 24"
    width={24}
    height={24}
    {...props}
  >
    <Path d="M12 2a9.98 9.98 0 0 1 7.743 3.671L13.414 12l6.329 6.329A9.98 9.98 0 0 1 12 22C6.477 22 2 17.523 2 12S6.477 2 12 2m0 2a8 8 0 1 0 4.697 14.477l.208-.157-6.32-6.32 6.32-6.321-.208-.156a7.97 7.97 0 0 0-4.394-1.517zm0 1a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3" />
  </Svg>
);
export default SvgGameLine;
