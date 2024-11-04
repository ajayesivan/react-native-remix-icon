import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgMailForbidLine(props) {
  return (
    <Svg
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path d="M20 7.238l-7.928 7.1L4 7.216V19h7.07c.102.706.308 1.378.604 2H3a1 1 0 01-1-1V4a1 1 0 011-1h18a1 1 0 011 1v8.255a6.972 6.972 0 00-2-.965V7.238zM19.501 5H4.511l7.55 6.662L19.502 5zm-2.794 15.708a3 3 0 004.001-4.001l-4.001 4zm-1.415-1.415l4.001-4a3 3 0 00-4.001 4.001zM18 23a5 5 0 110-10 5 5 0 010 10z" />
    </Svg>
  );
}

export default SvgMailForbidLine;
