import * as React from "react";
import Svg, { Path } from "react-native-svg";
const SvgInfoCardLine = props => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    fill="currentColor"
    viewBox="0 0 24 24"
    width={24}
    height={24}
    {...props}
  >
    <Path d="M3 6h18v12H3zM2 4a1 1 0 0 0-1 1v14a1 1 0 0 0 1 1h20a1 1 0 0 0 1-1V5a1 1 0 0 0-1-1zm11 5h6v2h-6zm5 4h-5v2h5zM6 13h1v3h2v-5H6zm3-5H7v2h2z" />
  </Svg>
);
export default SvgInfoCardLine;
