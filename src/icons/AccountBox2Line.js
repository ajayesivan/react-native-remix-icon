import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgAccountBox2Line(props) {
  return (
    <Svg
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path d="M4.995 3A1.995 1.995 0 003 4.995v14.01C3 20.107 3.893 21 4.995 21h14.01A1.995 1.995 0 0021 19.005V4.995A1.995 1.995 0 0019.005 3H4.995zM5 19V5h14v14H5zm7-11a1 1 0 110 2 1 1 0 010-2zm0 4a3 3 0 100-6 3 3 0 000 6zm0 3a2 2 0 00-2 2H8a4 4 0 018 0h-2a2 2 0 00-2-2z" />
    </Svg>
  );
}

export default SvgAccountBox2Line;
