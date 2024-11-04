import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgFlowerFill(props) {
  return (
    <Svg
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path d="M12.455 2.309L12 2.076l-.455.233a12.034 12.034 0 00-3.09 2.265A14.047 14.047 0 0112 7.202a14.047 14.047 0 013.544-2.628 12.036 12.036 0 00-3.089-2.265zm-1.756 6.425a11.978 11.978 0 00-6.518-3.536L3 4.98v8.02a9.003 9.003 0 005.697 8.374A13.987 13.987 0 018 17c0-3.092 1.002-5.95 2.7-8.266zM21 4.981l-1.18.217C14.232 6.224 10 11.117 10 17c0 1.536.29 3.007.817 4.36l.24.615c.314.01.629.025.943.025a9 9 0 009-9V4.981z" />
    </Svg>
  );
}

export default SvgFlowerFill;
