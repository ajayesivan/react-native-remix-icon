import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgMickeyFill(props) {
  return (
    <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
      <Path fill="none" d="M0 0h24v24H0z" />
      <Path d="M18.5 2a4.5 4.5 0 01.883 8.913 8 8 0 11-14.765-.001A4.499 4.499 0 015.5 2a4.5 4.5 0 014.493 4.254A7.998 7.998 0 0112 6a7.99 7.99 0 012.006.254A4.5 4.5 0 0118.5 2z" />
    </Svg>
  );
}

export default SvgMickeyFill;
