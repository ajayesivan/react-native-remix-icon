import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgRecycleLine(props) {
  return (
    <Svg
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path d="M19.56 12.098l1.532 2.652A3.5 3.5 0 0118.061 20h-2.063v2.5l-5-3.5 5-3.5V18h2.063a1.5 1.5 0 001.299-2.25l-1.532-2.652 1.733-1zM7.304 9.133l.53 6.08-2.165-1.25-1.03 1.786A1.5 1.5 0 005.937 18h3.062v2H5.937a3.5 3.5 0 01-3.032-5.25l1.031-1.787-2.165-1.249 5.532-2.58zm6.446-6.165a3.5 3.5 0 011.28 1.281l1.032 1.786 2.165-1.25-.531 6.08-5.531-2.58 2.165-1.25-1.031-1.786a1.5 1.5 0 00-2.598 0L9.168 7.903l-1.732-1L8.968 4.25a3.5 3.5 0 014.78-1.281z" />
    </Svg>
  );
}

export default SvgRecycleLine;
