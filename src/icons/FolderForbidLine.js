import * as React from "react";
import Svg, { Path } from "react-native-svg";
const SvgFolderForbidLine = props => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    fill="currentColor"
    viewBox="0 0 24 24"
    width={24}
    height={24}
    {...props}
  >
    <Path d="M22 11.255a7 7 0 0 0-2-.965V7h-8.414l-2-2H4v14h7.29c.215.722.543 1.396.965 2H3a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h7.414l2 2H21a1 1 0 0 1 1 1zM18 22a5 5 0 1 1 0-10 5 5 0 0 1 0 10m-1.293-2.292a3 3 0 0 0 4.001-4.001zm-1.415-1.415 4.001-4a3 3 0 0 0-4.001 4.001" />
  </Svg>
);
export default SvgFolderForbidLine;
