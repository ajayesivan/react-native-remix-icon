import * as React from "react";
import Svg, { Path } from "react-native-svg";
const SvgArrowLeftBoxLine = props => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    fill="currentColor"
    viewBox="0 0 24 24"
    {...props}
  >
    <Path d="M20 3H4a1 1 0 0 0-1 1v16a1 1 0 0 0 1 1h16a1 1 0 0 0 1-1V4a1 1 0 0 0-1-1M5 19V5h14v14zm1.344-6.999L12 6.344l1.414 1.414-3.243 3.243h7.485v2h-7.485l3.243 3.243L12 17.658z" />
  </Svg>
);
export default SvgArrowLeftBoxLine;
