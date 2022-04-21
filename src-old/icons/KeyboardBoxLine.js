import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgKeyboardBoxLine(props) {
  return (
    <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
      <Path fill="none" d="M0 0h24v24H0z" />
      <Path d="M4 5v14h16V5H4zM3 3h18a1 1 0 011 1v16a1 1 0 01-1 1H3a1 1 0 01-1-1V4a1 1 0 011-1zm3 4h2v2H6V7zm0 4h2v2H6v-2zm0 4h12v2H6v-2zm5-4h2v2h-2v-2zm0-4h2v2h-2V7zm5 0h2v2h-2V7zm0 4h2v2h-2v-2z" />
    </Svg>
  );
}

export default SvgKeyboardBoxLine;
