import * as React from "react";
import Svg, { Path } from "react-native-svg";
const SvgArrowUpBoxLine = props => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    fill="currentColor"
    viewBox="0 0 24 24"
    {...props}
  >
    <Path d="M20 3H4a1 1 0 0 0-1 1v16a1 1 0 0 0 1 1h16a1 1 0 0 0 1-1V4a1 1 0 0 0-1-1M5 19V5h14v14zm7-12.657L6.343 12l1.414 1.414L11 10.172v7.485h2v-7.485l3.243 3.242L17.657 12z" />
  </Svg>
);
export default SvgArrowUpBoxLine;
