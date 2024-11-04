import * as React from "react";
import Svg, { Path } from "react-native-svg";
const SvgBarcodeBoxLine = props => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    fill="currentColor"
    viewBox="0 0 24 24"
    width={24}
    height={24}
    {...props}
  >
    <Path d="M4 5v14h16V5zM3 3h18a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1m3 4h3v10H6zm4 0h2v10h-2zm3 0h1v10h-1zm2 0h3v10h-3z" />
  </Svg>
);
export default SvgBarcodeBoxLine;
