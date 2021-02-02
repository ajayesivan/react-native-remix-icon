import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgArrowDropLeftLine(props) {
  return (
    <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
      <Path fill="none" d="M0 0h24v24H0z" />
      <Path d="M11.828 12l2.829 2.828-1.414 1.415L9 12l4.243-4.243 1.414 1.415L11.828 12z" />
    </Svg>
  );
}

export default SvgArrowDropLeftLine;
