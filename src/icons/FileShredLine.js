import * as React from "react";
import Svg, { Path } from "react-native-svg";
const SvgFileShredLine = props => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    fill="currentColor"
    viewBox="0 0 24 24"
    {...props}
  >
    <Path d="M6 12h12V8h-4V4H6zm-2 0V2.995c0-.55.445-.995.996-.995H15l5 5v5h2v2H2v-2zm-1 4h2v6H3zm16 0h2v6h-2zm-4 0h2v6h-2zm-4 0h2v6h-2zm-4 0h2v6H7z" />
  </Svg>
);
export default SvgFileShredLine;
