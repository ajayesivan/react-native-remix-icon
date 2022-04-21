import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgMoneyEuroCircleFill(props) {
  return (
    <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
      <Path fill="none" d="M0 0h24v24H0z" />
      <Path d="M12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10zm-1.95-11a2.5 2.5 0 014.064-1.41l1.701-1.133A4.5 4.5 0 008.028 11H7v2h1.027a4.5 4.5 0 007.788 2.543l-1.701-1.134A2.5 2.5 0 0110.05 13l4.95.001v-2h-4.95z" />
    </Svg>
  );
}

export default SvgMoneyEuroCircleFill;
