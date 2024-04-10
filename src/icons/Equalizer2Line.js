import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgEqualizer2Line(props) {
  return (
    <Svg
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path d="M5 7a1.5 1.5 0 113 0 1.5 1.5 0 01-3 0zm1.5-3.5a3.5 3.5 0 100 7 3.5 3.5 0 000-7zM12 8h8V6h-8v2zm4 9a1.5 1.5 0 113 0 1.5 1.5 0 01-3 0zm1.5-3.5a3.5 3.5 0 100 7 3.5 3.5 0 000-7zM4 16v2h8v-2H4z" />
    </Svg>
  );
}

export default SvgEqualizer2Line;
