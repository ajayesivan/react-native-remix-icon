import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgMenuFold4Line(props) {
  return (
    <Svg
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path d="M21 4H7v2h14V4zm0 7H11v2h10v-2zm0 7H7v2h14v-2zM1.99 8.814L3.402 7.4 8 11.996l-4.597 4.596-1.414-1.414 3.182-3.182L1.99 8.814z" />
    </Svg>
  );
}

export default SvgMenuFold4Line;
