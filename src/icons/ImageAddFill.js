import * as React from "react";
import Svg, { Path } from "react-native-svg";
const SvgImageAddFill = props => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    fill="currentColor"
    viewBox="0 0 24 24"
    {...props}
  >
    <Path d="M21 15v3h3v2h-3v3h-2v-3h-3v-2h3v-3zm.008-12c.548 0 .992.445.992.993v9.349A6 6 0 0 0 20 13V5H4l.001 14 9.292-9.293a1 1 0 0 1 1.32-.084l.094.085 3.545 3.55a6.003 6.003 0 0 0-3.91 7.743L2.992 21A.993.993 0 0 1 2 20.007V3.993A1 1 0 0 1 2.992 3zM8 7a2 2 0 1 1 0 4 2 2 0 0 1 0-4" />
  </Svg>
);
export default SvgImageAddFill;
