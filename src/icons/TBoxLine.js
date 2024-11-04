import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgTBoxLine(props) {
  return (
    <Svg
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path d="M5 5v14h14V5H5zM4 3h16a1 1 0 011 1v16a1 1 0 01-1 1H4a1 1 0 01-1-1V4a1 1 0 011-1zm9 7v7h-2v-7H7V8h10v2h-4z" />
    </Svg>
  );
}

export default SvgTBoxLine;
