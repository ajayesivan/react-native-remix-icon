import * as React from "react";
import Svg, { Path } from "react-native-svg";
const SvgFolderReduceLine = props => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    fill="currentColor"
    viewBox="0 0 24 24"
    width={24}
    height={24}
    {...props}
  >
    <Path d="M12.414 5H21a1 1 0 0 1 1 1v14a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h7.414zM4 5v14h16V7h-8.414l-2-2zm4 7h8v2H8z" />
  </Svg>
);
export default SvgFolderReduceLine;
