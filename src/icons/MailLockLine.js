import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgMailLockLine(props) {
  return (
    <Svg
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path d="M20 7.238l-7.928 7.1L4 7.216V19h9v2H3a1 1 0 01-1-1V4a1 1 0 011-1h18a1 1 0 011 1v7h-2V7.238zM19.501 5H4.511l7.55 6.662L19.502 5zM22 17h1v5h-8v-5h1v-1a3 3 0 116 0v1zm-2 0v-1a1 1 0 10-2 0v1h2z" />
    </Svg>
  );
}

export default SvgMailLockLine;
