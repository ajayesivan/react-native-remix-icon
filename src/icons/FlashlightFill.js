import * as React from "react";
import Svg, { Path } from "react-native-svg";
const SvgFlashlightFill = props => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    fill="currentColor"
    viewBox="0 0 24 24"
    width={24}
    height={24}
    {...props}
  >
    <Path d="M13 10h7l-9 13v-9H4l9-13z" />
  </Svg>
);
export default SvgFlashlightFill;
