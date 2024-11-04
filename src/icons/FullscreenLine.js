import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgFullscreenLine(props) {
  return (
    <Svg
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path d="M8 3v2H4v4H2V3h6zM2 21v-6h2v4h4v2H2zm20 0h-6v-2h4v-4h2v6zm0-12h-2V5h-4V3h6v6z" />
    </Svg>
  );
}

export default SvgFullscreenLine;
