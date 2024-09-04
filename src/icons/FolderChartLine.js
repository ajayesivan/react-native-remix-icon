import * as React from "react";
import Svg, { Path } from "react-native-svg";
const SvgFolderChartLine = props => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    fill="currentColor"
    viewBox="0 0 24 24"
    {...props}
  >
    <Path d="M12.414 5H21a1 1 0 0 1 1 1v14a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h7.414zM4 5v14h16V7h-8.414l-2-2zm7 4h2v8h-2zm4 3h2v5h-2zm-8 2h2v3H7z" />
  </Svg>
);
export default SvgFolderChartLine;
