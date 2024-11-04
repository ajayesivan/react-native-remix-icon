import * as React from "react";
import Svg, { Path } from "react-native-svg";
const SvgFlowerFill = props => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    fill="currentColor"
    viewBox="0 0 24 24"
    {...props}
  >
    <Path d="M12.455 2.309 12 2.076l-.455.233a12 12 0 0 0-3.09 2.265A14 14 0 0 1 12 7.202a14 14 0 0 1 3.544-2.628 12 12 0 0 0-3.089-2.265m-1.756 6.425a11.98 11.98 0 0 0-6.518-3.536L3 4.98v8.02a9 9 0 0 0 5.697 8.374A14 14 0 0 1 8 17c0-3.092 1.002-5.95 2.7-8.266M21 4.981l-1.18.217C14.232 6.224 10 11.117 10 17c0 1.536.29 3.007.817 4.36l.24.615c.314.01.629.025.943.025a9 9 0 0 0 9-9z" />
  </Svg>
);
export default SvgFlowerFill;
