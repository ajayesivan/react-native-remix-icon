import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgBracesFill(props) {
  return (
    <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
      <Path fill="none" d="M0 0h24v24H0z" />
      <Path d="M4 18v-3.7a1.5 1.5 0 00-1.5-1.5H2v-1.6h.5A1.5 1.5 0 004 9.7V6a3 3 0 013-3h1v2H7a1 1 0 00-1 1v4.1A2 2 0 014.626 12 2 2 0 016 13.9V18a1 1 0 001 1h1v2H7a3 3 0 01-3-3zm16-3.7V18a3 3 0 01-3 3h-1v-2h1a1 1 0 001-1v-4.1a2 2 0 011.374-1.9A2 2 0 0118 10.1V6a1 1 0 00-1-1h-1V3h1a3 3 0 013 3v3.7a1.5 1.5 0 001.5 1.5h.5v1.6h-.5a1.5 1.5 0 00-1.5 1.5z" />
    </Svg>
  );
}

export default SvgBracesFill;
