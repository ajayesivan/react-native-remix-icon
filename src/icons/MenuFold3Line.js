import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgMenuFold3Line(props) {
  return (
    <Svg
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path d="M21 4H7v2h14V4zm0 7H11v2h10v-2zm0 7H7v2h14v-2zM9.01 8.814L7.596 7.4 3 11.996l4.596 4.596 1.414-1.414-3.182-3.182L9.01 8.814z" />
    </Svg>
  );
}

export default SvgMenuFold3Line;
