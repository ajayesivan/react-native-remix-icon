import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgMoneyPoundBoxFill(props) {
  return (
    <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
      <Path fill="none" d="M0 0h24v24H0z" />
      <Path d="M3 3h18a1 1 0 011 1v16a1 1 0 01-1 1H3a1 1 0 01-1-1V4a1 1 0 011-1zm6 10v2H8v2h8v-2h-5v-2h3v-2h-3v-1a1.5 1.5 0 012.76-.815l1.986-.496A3.501 3.501 0 009 10v1H8v2h1z" />
    </Svg>
  );
}

export default SvgMoneyPoundBoxFill;
