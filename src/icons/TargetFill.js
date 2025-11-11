import * as React from "react";
import Svg, { Path } from "react-native-svg";
const SvgTargetFill = props => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    fill="currentColor"
    viewBox="0 0 24 24"
    width={24}
    height={24}
    {...props}
  >
    <Path d="M12 2a1 1 0 1 1 0 2 8 8 0 1 0 8 8 1 1 0 1 1 2 0c0 5.523-4.477 10-10 10S2 17.523 2 12 6.477 2 12 2m0 4a1 1 0 1 1 0 2 4 4 0 1 0 4 4 1 1 0 1 1 2 0 6 6 0 1 1-6-6m6.571-3.9a.5.5 0 0 1 .5.5v1.83a.5.5 0 0 0 .5.499H21.4a.5.5 0 0 1 .5.5v.915l-1.888 1.888a2 2 0 0 1-1.414.586h-2l-3.89 3.889a1 1 0 0 1-1.414-1.414l3.89-3.889v-2a2 2 0 0 1 .585-1.414l1.89-1.89z" />
  </Svg>
);
export default SvgTargetFill;
