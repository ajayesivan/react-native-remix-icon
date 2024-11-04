import * as React from "react";
import Svg, { Path } from "react-native-svg";
const SvgSplitCellsHorizontal = props => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    fill="currentColor"
    viewBox="0 0 24 24"
    width={24}
    height={24}
    {...props}
  >
    <Path d="M20 3a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1zm-9 2H5v14h6v-4h2v4h6V5h-6v4h-2zm4 4 3 3-3 3v-2H9v2l-3-3 3-3v2h6z" />
  </Svg>
);
export default SvgSplitCellsHorizontal;
