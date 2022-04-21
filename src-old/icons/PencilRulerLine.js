import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgPencilRulerLine(props) {
  return (
    <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
      <Path fill="none" d="M0 0h24v24H0z" />
      <Path d="M5 8v12h4V8H5zM3 7l4-5 4 5v15H3V7zm16 9v-2h-3v-2h3v-2h-2V8h2V6h-4v14h4v-2h-2v-2h2zM14 4h6a1 1 0 011 1v16a1 1 0 01-1 1h-6a1 1 0 01-1-1V5a1 1 0 011-1z" />
    </Svg>
  );
}

export default SvgPencilRulerLine;
