import * as React from "react";
import Svg, { Path } from "react-native-svg";
const SvgRulerFill = props => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    fill="currentColor"
    viewBox="0 0 24 24"
    width={24}
    height={24}
    {...props}
  >
    <Path d="m4.929 13.314 2.121 2.121 1.415-1.414L6.343 11.9l2.122-2.122 2.828 2.829 1.414-1.414L9.88 8.364 12 6.243l2.121 2.121 1.415-1.414-2.122-2.121L16.243 2a1 1 0 0 1 1.414 0l4.95 4.95a1 1 0 0 1 0 1.414l-14.85 14.85a1 1 0 0 1-1.414 0l-4.95-4.95a1 1 0 0 1 0-1.415z" />
  </Svg>
);
export default SvgRulerFill;
