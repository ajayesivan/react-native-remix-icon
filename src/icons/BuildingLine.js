import * as React from "react";
import Svg, { Path } from "react-native-svg";
const SvgBuildingLine = props => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    fill="currentColor"
    viewBox="0 0 24 24"
    {...props}
  >
    <Path d="M21 19h2v2H1v-2h2V4a1 1 0 0 1 1-1h10a1 1 0 0 1 1 1v15h4v-8h-2V9h3a1 1 0 0 1 1 1zM5 5v14h8V5zm2 6h4v2H7zm0-4h4v2H7z" />
  </Svg>
);
export default SvgBuildingLine;
