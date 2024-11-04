import * as React from "react";
import Svg, { Path } from "react-native-svg";
const SvgFolderLockLine = props => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    fill="currentColor"
    viewBox="0 0 24 24"
    width={24}
    height={24}
    {...props}
  >
    <Path d="M12.414 5H21a1 1 0 0 1 1 1v14a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h7.414zM4 5v14h16V7h-8.414l-2-2zm11 8h1v4H8v-4h1v-1a3 3 0 1 1 6 0zm-2 0v-1a1 1 0 1 0-2 0v1z" />
  </Svg>
);
export default SvgFolderLockLine;
