import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgHardDriveLine(props) {
  return (
    <Svg
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path d="M5 10.938A8.004 8.004 0 0011.938 4H5v6.938zm0 2.013V20h14V4h-5.05A10.003 10.003 0 015 12.95zM4 2h16a1 1 0 011 1v18a1 1 0 01-1 1H4a1 1 0 01-1-1V3a1 1 0 011-1zm11 14h2v2h-2v-2z" />
    </Svg>
  );
}

export default SvgHardDriveLine;
