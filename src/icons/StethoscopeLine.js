import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgStethoscopeLine(props) {
  return (
    <Svg
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path d="M8 3v2H6v4a4 4 0 008 0V5h-2V3h3a1 1 0 011 1v5a6.002 6.002 0 01-5 5.917V16.5a3.5 3.5 0 006.775 1.238 3 3 0 112.05.148A5.502 5.502 0 018.999 16.5v-1.583A6.002 6.002 0 014 9V4a1 1 0 011-1h3zm11 11a1 1 0 100 2 1 1 0 000-2z" />
    </Svg>
  );
}

export default SvgStethoscopeLine;
