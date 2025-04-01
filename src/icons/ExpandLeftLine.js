import * as React from "react";
import Svg, { Path } from "react-native-svg";
const SvgExpandLeftLine = props => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    fill="currentColor"
    viewBox="0 0 24 24"
    width={24}
    height={24}
    {...props}
  >
    <Path d="m10.071 4.929 1.414 1.414L6.828 11H16v2H6.828l4.657 4.657-1.414 1.414L3 12zM18.001 19V5h2v14z" />
  </Svg>
);
export default SvgExpandLeftLine;
