import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgEraserFill(props) {
  return (
    <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
      <Path fill="none" d="M0 0h24v24H0z" />
      <Path d="M14 19h7v2h-9l-3.998.002-6.487-6.487a1 1 0 010-1.414L12.12 2.494a1 1 0 011.415 0l7.778 7.778a1 1 0 010 1.414L14 19zm1.657-4.485l3.535-3.536-6.364-6.364-3.535 3.536 6.364 6.364z" />
    </Svg>
  );
}

export default SvgEraserFill;
