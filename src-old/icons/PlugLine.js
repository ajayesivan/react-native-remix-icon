import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgPlugLine(props) {
  return (
    <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
      <Path fill="none" d="M0 0h24v24H0z" />
      <Path d="M13 18v2h6v2h-6a2 2 0 01-2-2v-2H8a4 4 0 01-4-4V7a1 1 0 011-1h3V2h2v4h4V2h2v4h3a1 1 0 011 1v7a4 4 0 01-4 4h-3zm-5-2h8a2 2 0 002-2v-3H6v3a2 2 0 002 2zm10-8H6v1h12V8zm-6 6.5a1 1 0 110-2 1 1 0 010 2z" />
    </Svg>
  );
}

export default SvgPlugLine;
