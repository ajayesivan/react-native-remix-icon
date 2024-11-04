import * as React from "react";
import Svg, { Path } from "react-native-svg";
const SvgSplitCellsVertical = props => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    fill="currentColor"
    viewBox="0 0 24 24"
    width={24}
    height={24}
    {...props}
  >
    <Path d="M20 3a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1zm-1 2H5v5.999L9 11v2H5v6h14v-6h-4v-2l4-.001zm-7 1 3 3h-2v6h2l-3 3-3-3h2V9H9z" />
  </Svg>
);
export default SvgSplitCellsVertical;
