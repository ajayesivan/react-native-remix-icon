import * as React from "react";
import Svg, { Path } from "react-native-svg";
const SvgStairsFill = props => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    fill="currentColor"
    viewBox="0 0 24 24"
    width={24}
    height={24}
    {...props}
  >
    <Path d="M15 3h6v18H3v-6h4v-4h4V7h4z" />
  </Svg>
);
export default SvgStairsFill;
