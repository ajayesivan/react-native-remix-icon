import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgRestTimeLine(props) {
  return (
    <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
      <Path fill="none" d="M0 0h24v24H0z" />
      <Path d="M11 6v2a6 6 0 105.996 6.225L17 14h2a8 8 0 01-16 0c0-4.335 3.58-8 8-8zm10-4v2l-5.327 6H21v2h-8v-2l5.326-6H13V2h8z" />
    </Svg>
  );
}

export default SvgRestTimeLine;
