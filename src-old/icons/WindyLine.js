import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgWindyLine(props) {
  return (
    <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
      <Path fill="none" d="M0 0h24v24H0z" />
      <Path d="M10.5 17H4v-2h6.5a3.5 3.5 0 11-3.278 4.73l1.873-.703A1.5 1.5 0 1010.5 17zM5 11h13.5a3.5 3.5 0 11-3.278 4.73l1.873-.703A1.5 1.5 0 1018.5 13H5a3 3 0 010-6h8.5a1.5 1.5 0 10-1.405-2.027l-1.873-.702A3.501 3.501 0 0117 5.5 3.5 3.5 0 0113.5 9H5a1 1 0 100 2z" />
    </Svg>
  );
}

export default SvgWindyLine;
