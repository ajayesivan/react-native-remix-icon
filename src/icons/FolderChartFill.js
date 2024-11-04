import * as React from "react";
import Svg, { Path } from "react-native-svg";
const SvgFolderChartFill = props => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    fill="currentColor"
    viewBox="0 0 24 24"
    width={24}
    height={24}
    {...props}
  >
    <Path d="M12.414 5H21a1 1 0 0 1 1 1v14a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h7.414zM11 9v8h2V9zm4 3v5h2v-5zm-8 2v3h2v-3z" />
  </Svg>
);
export default SvgFolderChartFill;
