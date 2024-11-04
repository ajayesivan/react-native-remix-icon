import * as React from "react";
import Svg, { Path } from "react-native-svg";
const SvgBuildingFill = props => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    fill="currentColor"
    viewBox="0 0 24 24"
    {...props}
  >
    <Path d="M21 19h2v2H1v-2h2V4a1 1 0 0 1 1-1h10a1 1 0 0 1 1 1v15h2V9h3a1 1 0 0 1 1 1zM7 11v2h4v-2zm0-4v2h4V7z" />
  </Svg>
);
export default SvgBuildingFill;
