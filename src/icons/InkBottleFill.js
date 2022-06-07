import * as React from "react";
import Svg, { Path } from "react-native-svg";

const SvgInkBottleFill = props => (
  <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 0h24v24H0z" />
    <Path d="m16 9 4.371 1.749a1 1 0 0 1 .629.928V21a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1v-9.323c0-.409.249-.777.629-.928L8 9h8zm4 5H8v5h12v-5zM16 3a1 1 0 0 1 1 1v4H7V4a1 1 0 0 1 1-1h8z" />
  </Svg>
);

export default SvgInkBottleFill;
