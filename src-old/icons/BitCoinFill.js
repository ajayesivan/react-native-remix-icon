import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgBitCoinFill(props) {
  return (
    <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
      <Path fill="none" d="M0 0h24v24H0z" />
      <Path d="M12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10zm-1-6v2h2v-2h1a2.5 2.5 0 002-4 2.5 2.5 0 00-2-4h-1V6h-2v2H8v8h3zm-1-3h4a.5.5 0 110 1h-4v-1zm0-3h4a.5.5 0 110 1h-4v-1z" />
    </Svg>
  );
}

export default SvgBitCoinFill;
