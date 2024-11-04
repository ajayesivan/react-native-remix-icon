import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgFunctionAddFill(props) {
  return (
    <Svg
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path d="M4 3a1 1 0 00-1 1v6a1 1 0 001 1h6a1 1 0 001-1V4a1 1 0 00-1-1H4zm0 10a1 1 0 00-1 1v6a1 1 0 001 1h6a1 1 0 001-1v-6a1 1 0 00-1-1H4zm10 0a1 1 0 00-1 1v6a1 1 0 001 1h6a1 1 0 001-1v-6a1 1 0 00-1-1h-6zm2-2V8h-3V6h3V3h2v3h3v2h-3v3h-2z" />
    </Svg>
  );
}

export default SvgFunctionAddFill;
