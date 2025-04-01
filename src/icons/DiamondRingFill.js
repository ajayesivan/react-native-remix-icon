import * as React from "react";
import Svg, { Path } from "react-native-svg";
const SvgDiamondRingFill = props => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    fill="currentColor"
    viewBox="0 0 24 24"
    width={24}
    height={24}
    {...props}
  >
    <Path d="M14.535 1h-5.07L7.69 3.661l1.865 1.696a8.5 8.5 0 1 0 4.888 0L16.31 3.66zM12 7a6.5 6.5 0 1 1 0 13 6.5 6.5 0 0 1 0-13" />
  </Svg>
);
export default SvgDiamondRingFill;
