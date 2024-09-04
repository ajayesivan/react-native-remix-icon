import * as React from "react";
import Svg, { Path } from "react-native-svg";
const SvgUserStarFill = props => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    fill="currentColor"
    viewBox="0 0 24 24"
    {...props}
  >
    <Path d="M12 14v8H4a8 8 0 0 1 8-8m6 7.5-2.939 1.545.561-3.273-2.377-2.317 3.286-.477L18 14l1.47 2.977 3.285.478-2.377 2.318.56 3.272zM12 13c-3.315 0-6-2.685-6-6s2.685-6 6-6 6 2.685 6 6-2.685 6-6 6" />
  </Svg>
);
export default SvgUserStarFill;
