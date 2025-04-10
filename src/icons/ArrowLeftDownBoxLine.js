import * as React from "react";
import Svg, { Path } from "react-native-svg";
const SvgArrowLeftDownBoxLine = props => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    fill="currentColor"
    viewBox="0 0 24 24"
    width={24}
    height={24}
    {...props}
  >
    <Path d="M20 3H4a1 1 0 0 0-1 1v16a1 1 0 0 0 1 1h16a1 1 0 0 0 1-1V4a1 1 0 0 0-1-1M5 19V5h14v14zm3-2.999v-8h2v4.586l5.293-5.293 1.414 1.414-5.293 5.293H16v2z" />
  </Svg>
);
export default SvgArrowLeftDownBoxLine;
