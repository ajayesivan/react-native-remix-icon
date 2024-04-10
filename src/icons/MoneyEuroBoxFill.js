import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgMoneyEuroBoxFill(props) {
  return (
    <Svg
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path d="M3.005 3.003h18a1 1 0 011 1v16a1 1 0 01-1 1h-18a1 1 0 01-1-1v-16a1 1 0 011-1zm7.05 8a2.5 2.5 0 014.064-1.41l1.7-1.133a4.5 4.5 0 00-7.787 2.543H7.005v2h1.027a4.5 4.5 0 007.788 2.543l-1.701-1.134a2.5 2.5 0 01-4.064-1.41h4.95v-2h-4.95z" />
    </Svg>
  );
}

export default SvgMoneyEuroBoxFill;
