import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgInkBottleLine(props) {
  return (
    <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
      <Path fill="none" d="M0 0h24v24H0z" />
      <Path d="M16 9l4.371 1.749a1 1 0 01.629.928V21a1 1 0 01-1 1H4a1 1 0 01-1-1v-9.323c0-.409.249-.777.629-.928L8 9h8zm-.385 2h-7.23L5 12.354V20h14v-1H8v-5h11v-1.646L15.615 11zM16 3a1 1 0 011 1v4H7V4a1 1 0 011-1h8zm-1 2H9v1h6V5z" />
    </Svg>
  );
}

export default SvgInkBottleLine;
