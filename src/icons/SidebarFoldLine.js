import * as React from "react";
import Svg, { Path } from "react-native-svg";
const SvgSidebarFoldLine = props => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    fill="currentColor"
    viewBox="0 0 24 24"
    width={24}
    height={24}
    {...props}
  >
    <Path d="M5 5h8v14H5zm14 14h-4V5h4zM4 3a1 1 0 0 0-1 1v16a1 1 0 0 0 1 1h16a1 1 0 0 0 1-1V4a1 1 0 0 0-1-1zm3 9 4-3.5v7z" />
  </Svg>
);
export default SvgSidebarFoldLine;
