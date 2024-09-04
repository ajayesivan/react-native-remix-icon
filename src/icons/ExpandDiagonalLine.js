import * as React from "react";
import Svg, { Path } from "react-native-svg";
const SvgExpandDiagonalLine = props => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    fill="currentColor"
    viewBox="0 0 24 24"
    {...props}
  >
    <Path d="M17.586 5H14V3h7v7h-2V6.414l-4.293 4.293-1.414-1.414zM3 14h2v3.586l4.293-4.293 1.414 1.414L6.414 19H10v2H3z" />
  </Svg>
);
export default SvgExpandDiagonalLine;
