import * as React from "react";
import Svg, { Path } from "react-native-svg";
const SvgOpenArmFill = props => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    fill="currentColor"
    viewBox="0 0 24 24"
    width={24}
    height={24}
    {...props}
  >
    <Path d="M12 12a5 5 0 1 1 0-10 5 5 0 0 1 0 10m6 5v5h-2v-5c0-4.451 2.644-8.285 6.448-10.016l.827 1.82A9 9 0 0 0 18 17M8 17v5H6v-5A9 9 0 0 0 .726 8.805l.827-1.821A11 11 0 0 1 8 17" />
  </Svg>
);
export default SvgOpenArmFill;
