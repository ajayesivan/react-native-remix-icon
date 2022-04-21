import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgBodyScanFill(props) {
  return (
    <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
      <Path fill="none" d="M0 0h24v24H0z" />
      <Path d="M4 16v4h4v2H2v-6h2zm18 0v6h-6v-2h4v-4h2zM7.5 7a4.5 4.5 0 009 0h2a6.5 6.5 0 01-3.499 5.767L15 19H9v-6.232A6.5 6.5 0 015.5 7h2zM12 5a2.5 2.5 0 110 5 2.5 2.5 0 010-5zM8 2v2l-4-.001V8H2V2h6zm14 0v6h-2V4h-4V2h6z" />
    </Svg>
  );
}

export default SvgBodyScanFill;
