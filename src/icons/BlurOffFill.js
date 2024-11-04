import * as React from "react";
import Svg, { Path } from "react-native-svg";
const SvgBlurOffFill = props => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    fill="currentColor"
    viewBox="0 0 24 24"
    width={24}
    height={24}
    {...props}
  >
    <Path d="M5.432 6.843 1.394 2.804 2.808 1.39l19.799 19.8-1.415 1.413-3.038-3.038A9 9 0 0 1 5.432 6.843m2.811-2.817L12 .269l6.364 6.364a9 9 0 0 1 2.05 9.564z" />
  </Svg>
);
export default SvgBlurOffFill;
