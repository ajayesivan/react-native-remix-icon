import * as React from "react";
import Svg, { Path } from "react-native-svg";
const SvgDragDropLine = props => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    fill="currentColor"
    viewBox="0 0 24 24"
    {...props}
  >
    <Path d="m16 13 6.964 4.062-2.973.85 2.125 3.681-1.732 1-2.125-3.68-2.223 2.15zm-2-7h2v2h5a1 1 0 0 1 1 1v4h-2v-3H10v10h4v2H9a1 1 0 0 1-1-1v-5H6v-2h2V9a1 1 0 0 1 1-1h5zM4 14v2H2v-2zm0-4v2H2v-2zm0-4v2H2V6zm0-4v2H2V2zm4 0v2H6V2zm4 0v2h-2V2zm4 0v2h-2V2z" />
  </Svg>
);
export default SvgDragDropLine;
