import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgEqualizer3Line(props) {
  return (
    <Svg
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path d="M7 3v3H3v2h4v3h2V3H7zm4 5h10V6H11v2zm6 5v3h4v2h-4v3h-2v-8h2zm-4 5H3v-2h10v2z" />
    </Svg>
  );
}

export default SvgEqualizer3Line;
