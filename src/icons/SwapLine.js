import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgSwapLine(props) {
  return (
    <Svg
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path d="M12.005 22.003c-5.523 0-10-4.477-10-10s4.477-10 10-10 10 4.477 10 10-4.477 10-10 10zm0-2a8 8 0 100-16 8 8 0 000 16zm-5-11l3-3.5 3 3.5h-2v4h-2v-4h-2zm10 6l-3 3.5-3-3.5h2v-4h2v4h2z" />
    </Svg>
  );
}

export default SvgSwapLine;
