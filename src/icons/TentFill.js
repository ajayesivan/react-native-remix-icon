import * as React from "react";
import Svg, { Path } from "react-native-svg";
const SvgTentFill = props => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    fill="currentColor"
    viewBox="0 0 24 24"
    {...props}
  >
    <Path d="m12.866 3 9.237 16H23v2H1v-2h.896l9.238-16a1 1 0 0 1 1.732 0M12 12.925 8.659 19h6.682z" />
  </Svg>
);
export default SvgTentFill;
