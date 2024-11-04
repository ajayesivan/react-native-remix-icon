import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgSuitcase2Line(props) {
  return (
    <Svg
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path d="M18 23h-2v-1H8v1H6v-1H5a2 2 0 01-2-2V7a2 2 0 012-2h3V3a1 1 0 011-1h6a1 1 0 011 1v2h3a2 2 0 012 2v13a2 2 0 01-2 2h-1v1zm1-16H5v13h14V7zm-9 2v9H8V9h2zm6 0v9h-2V9h2zm-2-5h-4v1h4V4z" />
    </Svg>
  );
}

export default SvgSuitcase2Line;
