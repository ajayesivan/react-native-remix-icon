import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgDoorLine(props) {
  return (
    <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
      <Path fill="none" d="M0 0h24v24H0z" />
      <Path d="M18 3a1 1 0 011 1v16a1 1 0 01-1 1H6a1 1 0 01-1-1V4a1 1 0 011-1h12zm-1 2H7v14h10V5zm-2 6v2h-2v-2h2z" />
    </Svg>
  );
}

export default SvgDoorLine;
