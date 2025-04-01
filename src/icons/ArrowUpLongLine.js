import * as React from "react";
import Svg, { Path } from "react-native-svg";
const SvgArrowUpLongLine = props => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    fill="currentColor"
    viewBox="0 0 24 24"
    width={24}
    height={24}
    {...props}
  >
    <Path d="M13 22h-2V5.828l-3.95 3.95-1.414-1.414L12 2l6.364 6.364-1.414 1.414L13 5.828z" />
  </Svg>
);
export default SvgArrowUpLongLine;
