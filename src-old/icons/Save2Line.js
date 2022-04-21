import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgSave2Line(props) {
  return (
    <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
      <Path fill="none" d="M0 0h24v24H0z" />
      <Path d="M5 5v14h14V7.828L16.172 5H5zM4 3h13l3.707 3.707a1 1 0 01.293.707V20a1 1 0 01-1 1H4a1 1 0 01-1-1V4a1 1 0 011-1zm8 15a3 3 0 110-6 3 3 0 010 6zM6 6h9v4H6V6z" />
    </Svg>
  );
}

export default SvgSave2Line;
