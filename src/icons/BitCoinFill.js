import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgBitCoinFill(props) {
  return (
    <Svg
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path d="M12.005 22.003c-5.523 0-10-4.477-10-10s4.477-10 10-10 10 4.477 10 10-4.477 10-10 10zm-1-6v2h2v-2h1a2.5 2.5 0 002-4 2.5 2.5 0 00-2-4h-1v-2h-2v2h-3v8h3zm-1-3h4a.5.5 0 010 1h-4v-1zm0-3h4a.5.5 0 010 1h-4v-1z" />
    </Svg>
  );
}

export default SvgBitCoinFill;
