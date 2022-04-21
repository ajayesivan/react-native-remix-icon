import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgInkBottleFill(props) {
  return (
    <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
      <Path fill="none" d="M0 0h24v24H0z" />
      <Path d="M16 9l4.371 1.749a1 1 0 01.629.928V21a1 1 0 01-1 1H4a1 1 0 01-1-1v-9.323c0-.409.249-.777.629-.928L8 9h8zm4 5H8v5h12v-5zM16 3a1 1 0 011 1v4H7V4a1 1 0 011-1h8z" />
    </Svg>
  );
}

export default SvgInkBottleFill;
