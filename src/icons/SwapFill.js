import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgSwapFill(props) {
  return (
    <Svg
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path d="M12.005 22.003c-5.523 0-10-4.477-10-10s4.477-10 10-10 10 4.477 10 10-4.477 10-10 10zm-5-13h2v4h2v-4h2l-3-3.5-3 3.5zm10 6h-2v-4h-2v4h-2l3 3.5 3-3.5z" />
    </Svg>
  );
}

export default SvgSwapFill;
