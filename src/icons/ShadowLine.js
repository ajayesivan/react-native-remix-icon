import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgShadowLine(props) {
  return (
    <Svg
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path d="M3 2a1 1 0 00-1 1v14a1 1 0 001 1h3v3a1 1 0 001 1h14a1 1 0 001-1V7a1 1 0 00-1-1h-3V3a1 1 0 00-1-1H3zm15 9.56l2 2v2.88l-2-2v-2.88zm0-2.12V8h2v3.44l-2-2zM18 17v-.44l2 2V20h-1.44l-2-2H17a1 1 0 001-1zm-3.56 1l2 2h-2.88l-2-2h2.88zm-5 0l2 2H8v-2h1.44zM4 16V4h12v12H4z" />
    </Svg>
  );
}

export default SvgShadowLine;
