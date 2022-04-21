import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgFridgeFill(props) {
  return (
    <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
      <Path fill="none" d="M0 0h24v24H0z" />
      <Path d="M20 12v10a1 1 0 01-1 1H5a1 1 0 01-1-1V12h16zM9 14H7v5h2v-5zM19 1a1 1 0 011 1v8H4V2a1 1 0 011-1h14zM9 4H7v4h2V4z" />
    </Svg>
  );
}

export default SvgFridgeFill;
