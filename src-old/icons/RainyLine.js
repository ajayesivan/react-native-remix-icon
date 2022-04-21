import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgRainyLine(props) {
  return (
    <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
      <Path fill="none" d="M0 0h24v24H0z" />
      <Path d="M16 18v-2h1a4 4 0 10-2.157-7.37A6 6 0 108 15.917v2.022A8.001 8.001 0 019 2a7.998 7.998 0 016.98 4.087A6 6 0 1117 18h-1zm-5.768.732L12 16.964l1.768 1.768a2.5 2.5 0 11-3.536 0z" />
    </Svg>
  );
}

export default SvgRainyLine;
