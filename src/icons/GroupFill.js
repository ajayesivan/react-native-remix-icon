import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgGroupFill(props) {
  return (
    <Svg
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path d="M2 22a8 8 0 1116 0H2zm8-9c-3.315 0-6-2.685-6-6s2.685-6 6-6 6 2.685 6 6-2.685 6-6 6zm7.363 2.233A7.505 7.505 0 0122.983 22H20c0-2.61-1-4.986-2.637-6.767zm-2.023-2.276A7.98 7.98 0 0018 7a7.964 7.964 0 00-1.015-3.903A5 5 0 0121 8a4.999 4.999 0 01-5.66 4.957z" />
    </Svg>
  );
}

export default SvgGroupFill;
