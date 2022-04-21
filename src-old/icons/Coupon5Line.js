import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgCoupon5Line(props) {
  return (
    <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
      <Path fill="none" d="M0 0h24v24H0z" />
      <Path d="M21 14v7a1 1 0 01-1 1H4a1 1 0 01-1-1v-7a2 2 0 100-4V3a1 1 0 011-1h16a1 1 0 011 1v7a2 2 0 100 4zm-2 1.465A3.998 3.998 0 0117 12c0-1.48.804-2.773 2-3.465V4H5v4.535C6.196 9.227 7 10.52 7 12c0 1.48-.804 2.773-2 3.465V20h14v-4.535zM9 6h6v2H9V6zm0 10h6v2H9v-2z" />
    </Svg>
  );
}

export default SvgCoupon5Line;
