import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgMenuUnfoldLine(props) {
  return (
    <Svg
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path d="M21 18v2H3v-2h18zM17.404 3.903L22 8.5l-4.596 4.596-1.414-1.415L19.172 8.5 15.99 5.318l1.414-1.415zM12 11v2H3v-2h9zm0-7v2H3V4h9z" />
    </Svg>
  );
}

export default SvgMenuUnfoldLine;
