import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgGobletLine(props) {
  return (
    <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
      <Path fill="none" d="M0 0h24v24H0z" />
      <Path d="M11 19v-5.111L3 5V3h18v2l-8 8.889V19h5v2H6v-2h5zM7.49 7h9.02l1.8-2H5.69l1.8 2zm1.8 2L12 12.01 14.71 9H9.29z" />
    </Svg>
  );
}

export default SvgGobletLine;
