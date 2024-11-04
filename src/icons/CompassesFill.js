import * as React from "react";
import Svg, { Path } from "react-native-svg";
const SvgCompassesFill = props => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    fill="currentColor"
    viewBox="0 0 24 24"
    width={24}
    height={24}
    {...props}
  >
    <Path d="M11 4.123V1.997h2v2.126a4.002 4.002 0 0 1 1.802 6.728l6.064 10.502-1.732 1-6.063-10.501a4 4 0 0 1-2.142 0L4.866 22.353l-1.732-1 6.063-10.502A4.002 4.002 0 0 1 11 4.123m1 4.874a1 1 0 1 0 0-2 1 1 0 0 0 0 2" />
  </Svg>
);
export default SvgCompassesFill;
