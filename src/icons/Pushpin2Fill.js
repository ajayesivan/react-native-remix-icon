import * as React from "react";
import Svg, { Path } from "react-native-svg";
const SvgPushpin2Fill = props => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    fill="currentColor"
    viewBox="0 0 24 24"
    width={24}
    height={24}
    {...props}
  >
    <Path d="M18 3v2h-1v6l2 3v2h-6v7h-2v-7H5v-2l2-3V5H6V3z" />
  </Svg>
);
export default SvgPushpin2Fill;
