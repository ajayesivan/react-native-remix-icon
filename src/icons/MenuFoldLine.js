import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgMenuFoldLine(props) {
  return (
    <Svg
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path d="M21 18v2H3v-2h18zM6.596 3.903L8.01 5.318 4.828 8.5 8.01 11.68l-1.414 1.415L2 8.5l4.596-4.597zM21 11v2h-9v-2h9zm0-7v2h-9V4h9z" />
    </Svg>
  );
}

export default SvgMenuFoldLine;
