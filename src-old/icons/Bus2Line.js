import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgBus2Line(props) {
  return (
    <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
      <Path fill="none" d="M0 0h24v24H0z" />
      <Path d="M17 20H7v1a1 1 0 01-1 1H4a1 1 0 01-1-1v-9H2V8h1V5a2 2 0 012-2h14a2 2 0 012 2v3h1v4h-1v9a1 1 0 01-1 1h-2a1 1 0 01-1-1v-1zM5 5v6h14V5H5zm14 8H5v5h14v-5zM7.5 17a1.5 1.5 0 110-3 1.5 1.5 0 010 3zm9 0a1.5 1.5 0 110-3 1.5 1.5 0 010 3z" />
    </Svg>
  );
}

export default SvgBus2Line;
