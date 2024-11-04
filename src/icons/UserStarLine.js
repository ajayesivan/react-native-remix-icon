import * as React from "react";
import Svg, { Path } from "react-native-svg";
const SvgUserStarLine = props => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    fill="currentColor"
    viewBox="0 0 24 24"
    width={24}
    height={24}
    {...props}
  >
    <Path d="M12 14v2a6 6 0 0 0-6 6H4a8 8 0 0 1 8-8m0-1c-3.315 0-6-2.685-6-6s2.685-6 6-6 6 2.685 6 6-2.685 6-6 6m0-2c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4m6 10.5-2.939 1.545.561-3.273-2.377-2.317 3.286-.477L18 14l1.47 2.977 3.285.478-2.377 2.318.56 3.272z" />
  </Svg>
);
export default SvgUserStarLine;
