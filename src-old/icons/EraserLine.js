import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgEraserLine(props) {
  return (
    <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
      <Path fill="none" d="M0 0h24v24H0z" />
      <Path d="M8.586 8.858l-4.95 4.95 5.194 5.194H10V19h1.172l3.778-3.778-6.364-6.364zM10 7.444l6.364 6.364 2.828-2.829-6.364-6.364L10 7.444zM14 19h7v2h-9l-3.998.002-6.487-6.487a1 1 0 010-1.414L12.12 2.494a1 1 0 011.415 0l7.778 7.778a1 1 0 010 1.414L14 19z" />
    </Svg>
  );
}

export default SvgEraserLine;
