import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgMoneyEuroBoxLine(props) {
  return (
    <Svg
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path d="M3.005 3.003h18a1 1 0 011 1v16a1 1 0 01-1 1h-18a1 1 0 01-1-1v-16a1 1 0 011-1zm1 2v14h16v-14h-16zm6.05 6h4.95v2h-4.95a2.5 2.5 0 004.064 1.409l1.7 1.134a4.5 4.5 0 01-7.787-2.543H7.005v-2h1.027A4.5 4.5 0 0115.82 8.46l-1.701 1.134a2.5 2.5 0 00-4.064 1.41z" />
    </Svg>
  );
}

export default SvgMoneyEuroBoxLine;
