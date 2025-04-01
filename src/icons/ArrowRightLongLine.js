import * as React from "react";
import Svg, { Path } from "react-native-svg";
const SvgArrowRightLongLine = props => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    fill="currentColor"
    viewBox="0 0 24 24"
    width={24}
    height={24}
    {...props}
  >
    <Path d="M2 13v-2h16.172l-3.95-3.95 1.414-1.414L22 12l-6.364 6.364-1.414-1.414 3.95-3.95z" />
  </Svg>
);
export default SvgArrowRightLongLine;
