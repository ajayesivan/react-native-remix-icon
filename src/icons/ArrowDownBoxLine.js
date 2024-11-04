import * as React from "react";
import Svg, { Path } from "react-native-svg";
const SvgArrowDownBoxLine = props => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    fill="currentColor"
    viewBox="0 0 24 24"
    {...props}
  >
    <Path d="M20 3H4a1 1 0 0 0-1 1v16a1 1 0 0 0 1 1h16a1 1 0 0 0 1-1V4a1 1 0 0 0-1-1M5 19V5h14v14zm6-12.656v7.485l-3.242-3.243-1.414 1.415L12 17.657l5.656-5.656-1.414-1.415-3.242 3.243V6.344z" />
  </Svg>
);
export default SvgArrowDownBoxLine;
