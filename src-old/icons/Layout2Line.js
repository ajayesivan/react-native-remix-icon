import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgLayout2Line(props) {
  return (
    <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
      <Path fill="none" d="M0 0h24v24H0z" />
      <Path d="M21 20a1 1 0 01-1 1H4a1 1 0 01-1-1V4a1 1 0 011-1h16a1 1 0 011 1v16zM11 5H5v14h6V5zm8 8h-6v6h6v-6zm0-8h-6v6h6V5z" />
    </Svg>
  );
}

export default SvgLayout2Line;
