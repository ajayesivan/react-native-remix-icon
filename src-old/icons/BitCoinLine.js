import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgBitCoinLine(props) {
  return (
    <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
      <Path fill="none" d="M0 0h24v24H0z" />
      <Path d="M12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10zm0-2a8 8 0 100-16 8 8 0 000 16zm-1-4H8V8h3V6h2v2h1a2.5 2.5 0 012 4 2.5 2.5 0 01-2 4h-1v2h-2v-2zm-1-3v1h4a.5.5 0 100-1h-4zm0-3v1h4a.5.5 0 100-1h-4z" />
    </Svg>
  );
}

export default SvgBitCoinLine;
