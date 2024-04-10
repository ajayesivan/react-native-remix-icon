import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgExchangeLine(props) {
  return (
    <Svg
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path d="M12.005 22.003c-5.523 0-10-4.477-10-10s4.477-10 10-10 10 4.477 10 10-4.477 10-10 10zm0-2a8 8 0 100-16 8 8 0 000 16zm-5-7h9v2h-4v3l-5-5zm5-4v-3l5 5h-9v-2h4z" />
    </Svg>
  );
}

export default SvgExchangeLine;
