import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgChatNewLine(props) {
  return (
    <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
      <Path fill="none" d="M0 0h24v24H0z" />
      <Path d="M14 3v2H4v13.385L5.763 17H20v-7h2v8a1 1 0 01-1 1H6.455L2 22.5V4a1 1 0 011-1h11zm5 0V0h2v3h3v2h-3v3h-2V5h-3V3h3z" />
    </Svg>
  );
}

export default SvgChatNewLine;
