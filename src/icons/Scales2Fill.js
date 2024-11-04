import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgScales2Fill(props) {
  return (
    <Svg
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path d="M5.998 2c0 .513.49 1 1 1h10c.513 0 1-.49 1-1h2a3 3 0 01-3 3h-4l.001 2.062A8.001 8.001 0 0119.998 15v6a1 1 0 01-1 1h-14a1 1 0 01-1-1v-6a8.001 8.001 0 017-7.938V5h-4c-1.66 0-3-1.34-3-3h2zm6 9a4 4 0 103.446 1.968l-2.739 2.74-.094.082a1 1 0 01-1.32-1.497l2.739-2.74A3.981 3.981 0 0011.998 11z" />
    </Svg>
  );
}

export default SvgScales2Fill;
