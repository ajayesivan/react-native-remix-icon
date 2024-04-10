import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgShirtLine(props) {
  return (
    <Svg
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path d="M12.998 20h6v-4h-4v-2h4V6h-2v5l-4-1.6V20zm-2 0V9.4l-4 1.6V6h-2v14h6zm-4-16V3h10v1h3a1 1 0 011 1v16a1 1 0 01-1 1h-16a1 1 0 01-1-1V5a1 1 0 011-1h3zm5 4l3.5-3h-7l3.5 3z" />
    </Svg>
  );
}

export default SvgShirtLine;
