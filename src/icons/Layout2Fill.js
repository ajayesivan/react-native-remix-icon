import * as React from "react";
import Svg, { Path } from "react-native-svg";
const SvgLayout2Fill = props => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    fill="currentColor"
    viewBox="0 0 24 24"
    width={24}
    height={24}
    {...props}
  >
    <Path d="M11 3v18H4a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1zm10 10v7a1 1 0 0 1-1 1h-7v-8zM20 3a1 1 0 0 1 1 1v7h-8V3z" />
  </Svg>
);
export default SvgLayout2Fill;
