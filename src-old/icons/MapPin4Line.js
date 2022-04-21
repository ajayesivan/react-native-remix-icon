import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgMapPin4Line(props) {
  return (
    <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
      <Path fill="none" d="M0 0h24v24H0z" />
      <Path d="M11 17.938A8.001 8.001 0 0112 2a8 8 0 011 15.938V21h-2v-3.062zM12 16a6 6 0 100-12 6 6 0 000 12zm-7 6h14v2H5v-2z" />
    </Svg>
  );
}

export default SvgMapPin4Line;
