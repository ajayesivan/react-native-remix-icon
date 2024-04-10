import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgMoneyEuroCircleLine(props) {
  return (
    <Svg
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path d="M12.005 22.003c-5.523 0-10-4.477-10-10s4.477-10 10-10 10 4.477 10 10-4.477 10-10 10zm0-2a8 8 0 100-16 8 8 0 000 16zm-1.95-9h4.95v2h-4.95a2.5 2.5 0 004.064 1.409l1.7 1.134a4.5 4.5 0 01-7.787-2.543H7.005v-2h1.027A4.5 4.5 0 0115.82 8.46l-1.701 1.134a2.5 2.5 0 00-4.064 1.41z" />
    </Svg>
  );
}

export default SvgMoneyEuroCircleLine;
