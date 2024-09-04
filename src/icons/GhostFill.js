import * as React from "react";
import Svg, { Path } from "react-native-svg";
const SvgGhostFill = props => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    fill="currentColor"
    viewBox="0 0 24 24"
    {...props}
  >
    <Path d="M12 2a9 9 0 0 1 9 9v7.5a3.5 3.5 0 0 1-6.39 1.976 2.999 2.999 0 0 1-5.223 0 3.5 3.5 0 0 1-6.382-1.783L3 18.499V11a9 9 0 0 1 9-9m0 10c-1.105 0-2 1.12-2 2.5s.895 2.5 2 2.5 2-1.12 2-2.5-.895-2.5-2-2.5M9.5 8a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3m5 0a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3" />
  </Svg>
);
export default SvgGhostFill;
