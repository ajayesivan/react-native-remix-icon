import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgInputMethodLine(props) {
  return (
    <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
      <Path fill="none" d="M0 0h24v24H0z" />
      <Path d="M5 5v14h14V5H5zM4 3h16a1 1 0 011 1v16a1 1 0 01-1 1H4a1 1 0 01-1-1V4a1 1 0 011-1zm5.869 12l-.82 2H6.833L11 7h2l4.167 10H14.95l-.82-2H9.87zm.82-2h2.622L12 9.8 10.689 13z" />
    </Svg>
  );
}

export default SvgInputMethodLine;
