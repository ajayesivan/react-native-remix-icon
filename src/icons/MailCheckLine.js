import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgMailCheckLine(props) {
  return (
    <Svg
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path d="M22 14h-2V7.238l-7.928 7.1L4 7.216V19h10v2H3a1 1 0 01-1-1V4a1 1 0 011-1h18a1 1 0 011 1v10zM4.511 5l7.55 6.662L19.502 5H4.511zM19 22l-3.536-3.535 1.415-1.415L19 19.172l3.535-3.536 1.415 1.414L19 22z" />
    </Svg>
  );
}

export default SvgMailCheckLine;
