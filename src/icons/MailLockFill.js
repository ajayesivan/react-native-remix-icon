import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgMailLockFill(props) {
  return (
    <Svg
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path d="M22 12a5.002 5.002 0 00-7.9 3H13v6H3a1 1 0 01-1-1V4a1 1 0 011-1h18a1 1 0 011 1v8zm-9.94-.317L5.648 6.238 4.353 7.762l7.72 6.555 7.581-6.56-1.308-1.513-6.285 5.439zM22 17h1v5h-8v-5h1v-1a3 3 0 116 0v1zm-2 0v-1a1 1 0 10-2 0v1h2z" />
    </Svg>
  );
}

export default SvgMailLockFill;
