import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgTokenSwapLine(props) {
  return (
    <Svg
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path d="M9 12.5L6.5 15 9 17.5l2.5-2.5L9 12.5zm6-10a6.5 6.5 0 00-6.482 6.018 6.5 6.5 0 106.964 6.964A6.5 6.5 0 0015 2.5zm.323 10.989a6.51 6.51 0 00-4.812-4.812 4.5 4.5 0 114.812 4.812zM13.5 15a4.5 4.5 0 11-9 0 4.5 4.5 0 019 0zM3 7a4 4 0 014-4h1.5v2H7a2 2 0 00-2 2v1.5H3V7zm16 10v-1.5h2V17a4 4 0 01-4 4h-1.5v-2H17a2 2 0 002-2z" />
    </Svg>
  );
}

export default SvgTokenSwapLine;
