import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgDragDropFill(props) {
  return (
    <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
      <Path fill="none" d="M0 0h24v24H0z" />
      <Path d="M14 6h2v2h5a1 1 0 011 1v7.5L16 13l.036 8.062 2.223-2.15L20.041 22H9a1 1 0 01-1-1v-5H6v-2h2V9a1 1 0 011-1h5V6zm8 11.338V21a1 1 0 01-.048.307l-1.96-3.394L22 17.338zM4 14v2H2v-2h2zm0-4v2H2v-2h2zm0-4v2H2V6h2zm0-4v2H2V2h2zm4 0v2H6V2h2zm4 0v2h-2V2h2zm4 0v2h-2V2h2z" />
    </Svg>
  );
}

export default SvgDragDropFill;
