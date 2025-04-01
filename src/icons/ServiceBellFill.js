import * as React from "react";
import Svg, { Path } from "react-native-svg";
const SvgServiceBellFill = props => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    fill="currentColor"
    viewBox="0 0 24 24"
    width={24}
    height={24}
    {...props}
  >
    <Path d="M15 3v2h-2v1.05c5.053.501 9 4.765 9 9.95H2c0-5.185 3.947-9.449 9-9.95V5H9V3zm8 17v-2H1v2z" />
  </Svg>
);
export default SvgServiceBellFill;
