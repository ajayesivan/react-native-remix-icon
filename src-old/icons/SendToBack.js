import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgSendToBack(props) {
  return (
    <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
      <Path fill="none" d="M0 0h24v24H0z" />
      <Path d="M11 3a1 1 0 011 1v2h5a1 1 0 011 1v5h2a1 1 0 011 1v7a1 1 0 01-1 1h-7a1 1 0 01-1-1v-2H7a1 1 0 01-1-1v-5H4a1 1 0 01-1-1V4a1 1 0 011-1h7zm5 5h-4v3a1 1 0 01-1 1H8v4h4v-3a1 1 0 011-1h3V8z" />
    </Svg>
  );
}

export default SvgSendToBack;
