import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgUser4Line(props) {
  return (
    <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
      <Path fill="none" d="M0 0h24v24H0z" />
      <Path d="M5 20h14v2H5v-2zm7-2a8 8 0 110-16 8 8 0 010 16zm0-2a6 6 0 100-12 6 6 0 000 12z" />
    </Svg>
  );
}

export default SvgUser4Line;
