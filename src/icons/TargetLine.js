import * as React from "react";
import Svg, { Path } from "react-native-svg";
const SvgTargetLine = props => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    fill="currentColor"
    viewBox="0 0 24 24"
    width={24}
    height={24}
    {...props}
  >
    <Path d="M12 2a1 1 0 1 1 0 2 8 8 0 1 0 8 8 1 1 0 0 1 2 0c0 5.523-4.477 10-10 10S2 17.523 2 12 6.477 2 12 2m0 4a1 1 0 1 1 0 2 4 4 0 1 0 4 4 1 1 0 0 1 2 0 6 6 0 1 1-6-6m5.656-3.9a1.001 1.001 0 0 1 1.415 1.415l-.708.706h.001a1 1 0 1 0 1.414 1.415l.707-.707A1 1 0 0 1 21.9 6.343l-2.12 2.122a1 1 0 0 1-.708.292h-2.414l-3.95 3.95a1 1 0 0 1-1.414-1.414l3.95-3.95V4.93a1 1 0 0 1 .292-.707z" />
  </Svg>
);
export default SvgTargetLine;
