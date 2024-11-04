import * as React from "react";
import Svg, { Path } from "react-native-svg";
const SvgCollapseVerticalLine = props => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    fill="currentColor"
    viewBox="0 0 24 24"
    {...props}
  >
    <Path d="m12 13.5 4.95 4.95-1.415 1.413-2.536-2.535V23h-2v-5.672L8.467 19.86l-1.414-1.414zM11 1v5.67L8.465 4.135 7.05 5.55 12 10.5l4.95-4.95-1.414-1.414L13 6.672V1z" />
  </Svg>
);
export default SvgCollapseVerticalLine;
