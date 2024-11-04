import * as React from "react";
import Svg, { Path } from "react-native-svg";
const SvgExpandRightFill = props => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    fill="currentColor"
    viewBox="0 0 24 24"
    width={24}
    height={24}
    {...props}
  >
    <Path d="m14 5 7 7-7 7v-6H8v-2h6zM4 19V5h2v14z" />
  </Svg>
);
export default SvgExpandRightFill;
