import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgCastLine(props) {
  return (
    <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
      <Path fill="none" d="M0 0h24v24H0z" />
      <Path d="M3 3h18a1 1 0 011 1v16a1 1 0 01-1 1h-6a13.1 13.1 0 00-.153-2H20V5H4v3.153A13.1 13.1 0 002 8V4a1 1 0 011-1zm10 18h-2a9 9 0 00-9-9v-2c6.075 0 11 4.925 11 11zm-4 0H7a5 5 0 00-5-5v-2a7 7 0 017 7zm-4 0H2v-3a3 3 0 013 3z" />
    </Svg>
  );
}

export default SvgCastLine;
