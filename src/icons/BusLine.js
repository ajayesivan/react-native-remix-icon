import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgBusLine(props) {
  return (
    <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
      <Path fill="none" d="M0 0h24v24H0z" />
      <Path d="M17 20H7v1a1 1 0 01-1 1H5a1 1 0 01-1-1v-1H3v-8H2V8h1V5a2 2 0 012-2h14a2 2 0 012 2v3h1v4h-1v8h-1v1a1 1 0 01-1 1h-1a1 1 0 01-1-1v-1zm2-8V5H5v7h14zm0 2H5v4h14v-4zM6 15h4v2H6v-2zm8 0h4v2h-4v-2z" />
    </Svg>
  );
}

export default SvgBusLine;
